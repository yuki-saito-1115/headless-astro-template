import { exec } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { clearLine, cursorTo } from 'node:readline';
import { promisify } from 'node:util';
import { dump } from 'js-yaml';

/**
 * microCMSのマネジメントAPIから各APIのスキーマを取得し、コンテンツAPIの
 * OpenAPI定義と、その定義に基づくTypeScript型を生成するスクリプト。
 *
 * 生成先:
 * - public/openapi.yaml
 * - packages/content/src/types/microcms.ts
 */

const execAsync = promisify(exec);
// マネジメントAPIの「1秒あたり1リクエスト」制限を超えないための待機時間。
const requestInterval = 1_100;
const rootDirectory = resolve(import.meta.dirname, '..');
const envPath = resolve(rootDirectory, '.env');
const outputPath = resolve(rootDirectory, 'public/openapi.yaml');
const typeOutputPath = resolve(
  rootDirectory,
  'packages/content/src/types/microcms.ts',
);

if (existsSync(envPath)) {
  process.loadEnvFile(envPath);
}

const { MICROCMS_SERVICE_DOMAIN, MICROCMS_MANAGEMENT_API_KEY } = process.env;

if (!MICROCMS_SERVICE_DOMAIN || !MICROCMS_MANAGEMENT_API_KEY) {
  throw new Error(
    'MICROCMS_SERVICE_DOMAIN と MICROCMS_MANAGEMENT_API_KEY の環境変数を設定してください。',
  );
}

const managementApiUrl = `https://${MICROCMS_SERVICE_DOMAIN}.microcms-management.io/api/v1`;
const requestHeaders = {
  'X-MICROCMS-API-KEY': MICROCMS_MANAGEMENT_API_KEY,
};

// すべてのリスト形式APIのコンテンツにmicroCMSが自動付与するプロパティ。
const commonProperties = {
  id: { type: 'string' },
  createdAt: { type: 'string', format: 'date-time' },
  updatedAt: { type: 'string', format: 'date-time' },
  publishedAt: { type: 'string', format: 'date-time', nullable: true },
  revisedAt: { type: 'string', format: 'date-time', nullable: true },
};

/**
 * OpenAPIのobjectスキーマを組み立てる。
 * 説明とプロパティが未指定の場合は、制約のない空のobjectスキーマを返す。
 */
const objectSchema = (description, properties) => ({
  type: 'object',
  ...(description ? { description } : {}),
  ...(properties ? { properties } : {}),
});

/**
 * microCMSのAPIエンドポイントをOpenAPIのスキーマ名へ変換する。
 * 例: `blog-posts`を`BlogPosts`へ変換する。
 */
const schemaName = (endpoint) =>
  endpoint.replaceAll(/(^|[-_])(\w)/g, (_, __, character) =>
    character.toUpperCase(),
  );

/**
 * 画像フィールド共通のOpenAPIスキーマを生成する。
 * 画像URLは常に返るため必須とし、サイズと代替テキストは任意とする。
 */
const mediaSchema = (description) => ({
  ...objectSchema(description, {
    url: { type: 'string', format: 'uri' },
    width: { type: 'integer' },
    height: { type: 'integer' },
    alt: { type: 'string' },
  }),
  required: ['url'],
});

/**
 * microCMSのフィールド定義を、対応するOpenAPIスキーマへ変換する。
 * カスタムフィールドと繰り返しフィールドは、同じAPI内のカスタムフィールド
 * 定義を参照して具体的なオブジェクト型へ展開する。
 */
const fieldSchema = (field, customFields) => {
  const description = field.description ?? field.name;

  switch (field.kind) {
    case 'text':
    case 'textArea':
    case 'richEditor':
    case 'richEditorV2':
      return { type: 'string', description };
    case 'number':
      return { type: 'number', description };
    case 'boolean':
      return { type: 'boolean', description };
    case 'date':
      return { type: 'string', format: 'date-time', description };
    case 'select': {
      const values = field.selectItems?.map((item) => item.value) ?? [];
      const itemSchema = {
        type: 'string',
        description,
        ...(values.length ? { enum: values } : {}),
      };

      return { type: 'array', description, items: itemSchema };
    }
    case 'media':
      return mediaSchema(description);
    case 'mediaList':
      return {
        type: 'array',
        description,
        items: mediaSchema(),
      };
    case 'file':
      return {
        ...objectSchema(description, {
          url: { type: 'string', format: 'uri' },
          fileSize: { type: 'integer' },
        }),
        required: ['url', 'fileSize'],
      };
    case 'relation':
      return field.referencedApiEndpoint
        ? {
            description,
            $ref: `#/components/schemas/${schemaName(field.referencedApiEndpoint)}`,
          }
        : objectSchema(description);
    case 'relationList': {
      const items = field.referencedApiEndpoint
        ? {
            $ref: `#/components/schemas/${schemaName(field.referencedApiEndpoint)}`,
          }
        : objectSchema();

      return { type: 'array', description, items };
    }
    case 'custom': {
      const customField = customFields.get(field.customFieldId);
      return customField
        ? customFieldSchema(customField, customFields, description)
        : { ...objectSchema(description), additionalProperties: true };
    }
    case 'repeater': {
      const customFieldSchemas = (field.customFieldIds ?? [])
        .map((customFieldId) => customFields.get(customFieldId))
        .filter(Boolean)
        .map((customField) => customFieldSchema(customField, customFields));

      return {
        type: 'array',
        description,
        items: customFieldSchemas.length
          ? { oneOf: customFieldSchemas }
          : { ...objectSchema(), additionalProperties: true },
      };
    }
    case 'iframe':
      return {
        ...objectSchema(description),
        additionalProperties: true,
      };
    default:
      throw new Error(
        `未対応のフィールドタイプです: ${field.kind} (${field.fieldId})`,
      );
  }
};

/**
 * 複数のmicroCMSフィールドから、1つのobjectスキーマを生成する。
 * `properties`にはコンテンツ共通項目やカスタムフィールドの識別子など、
 * 呼び出し元があらかじめ持たせたいプロパティを受け取る。
 */
const fieldsSchema = (fields, customFields, properties, description) => {
  const required = [];

  for (const field of fields) {
    properties[field.fieldId] = fieldSchema(field, customFields);

    if (field.required) {
      required.push(field.fieldId);
    }
  }

  return {
    type: 'object',
    ...(description ? { description } : {}),
    properties,
    ...(required.length ? { required } : {}),
  };
};

/**
 * 通常コンテンツのOpenAPIスキーマを生成する。
 * microCMSが自動付与するID・日時と、API固有のフィールドを統合する。
 */
const contentSchema = (fields, customFields, description) =>
  fieldsSchema(fields, customFields, { ...commonProperties }, description);

/**
 * カスタムフィールドのOpenAPIスキーマを生成する。
 * レスポンスに必ず含まれる`fieldId`をリテラル型として定義することで、
 * 繰り返しフィールド内のカスタムフィールドを判別可能にする。
 */
const customFieldSchema = (customField, customFields, description) =>
  (() => {
    const schema = fieldsSchema(
      customField.fields,
      customFields,
      {
        fieldId: {
          type: 'string',
          enum: [customField.fieldId],
        },
      },
      description ?? customField.name,
    );

    return {
      ...schema,
      required: ['fieldId', ...(schema.required ?? [])],
    };
  })();

/**
 * 指定したパスのJSONをmicroCMSマネジメントAPIから取得する。
 * HTTPエラーの場合は、ステータスコードとリクエスト先を含むエラーを送出する。
 */
const getJson = async (path) => {
  const response = await fetch(`${managementApiUrl}${path}`, {
    headers: requestHeaders,
  });

  if (!response.ok) {
    throw new Error(
      `マネジメントAPIの取得に失敗しました: ${response.status} ${path}`,
    );
  }

  return response.json();
};

/** 指定されたミリ秒だけ後続処理を待機させる。 */
const wait = (milliseconds) =>
  new Promise((resolvePromise) => setTimeout(resolvePromise, milliseconds));

/**
 * API一覧と各APIの詳細スキーマを取得し、OpenAPI定義とTypeScript型を生成する。
 * 各詳細取得はレート制限を守るため逐次実行する。
 */
const buildOpenAPI = async () => {
  // 最初にサービス内のAPI名・エンドポイント・形式の一覧を取得する。
  process.stdout.write('⌛ microCMSのマネジメントAPIからAPI一覧を取得中...');

  const { apis } = await getJson('/apis');

  if (process.stdout.isTTY) {
    cursorTo(process.stdout, 0);
    clearLine(process.stdout, 0);
  } else {
    console.log();
  }

  console.log('✅ microCMSのマネジメントAPIからAPI一覧を取得完了');
  const apiDefinitions = [];

  // 各APIのフィールド定義とカスタムフィールド定義を順番に取得する。
  for (const api of apis) {
    await wait(requestInterval);
    const loadingMessage = `⌛ ${api.name} (${api.endpoint}) のスキーマを取得中...`;
    process.stdout.write(loadingMessage);

    apiDefinitions.push({
      ...api,
      ...(await getJson(`/apis/${api.endpoint}`)),
    });

    if (process.stdout.isTTY) {
      cursorTo(process.stdout, 0);
      clearLine(process.stdout, 0);
    } else {
      console.log();
    }

    console.log(`✅ ${api.name} (${api.endpoint}) のスキーマ取得完了`);
  }

  const schemas = {};
  const paths = {};

  // 取得した定義から、コンテンツのスキーマと一覧・詳細取得のパスを作る。
  for (const api of apiDefinitions) {
    const customFields = new Map(
      api.customFields.map((field) => [field.fieldId, field]),
    );
    const apiSchemaName = schemaName(api.endpoint);
    const schema = contentSchema(api.apiFields, customFields, api.name);
    schemas[apiSchemaName] = schema;

    paths[`/${api.endpoint}`] = {
      get: {
        summary: `${api.name}の一覧取得`,
        responses: {
          200: {
            description: `${api.name}の一覧`,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    contents: {
                      type: 'array',
                      items: { $ref: `#/components/schemas/${apiSchemaName}` },
                    },
                    totalCount: { type: 'integer' },
                    offset: { type: 'integer' },
                    limit: { type: 'integer' },
                  },
                },
              },
            },
          },
        },
      },
    };

    paths[`/${api.endpoint}/{content_id}`] = {
      get: {
        summary: `${api.name}の詳細取得`,
        parameters: [
          {
            name: 'content_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: `${api.name}の詳細`,
            content: {
              'application/json': {
                schema: { $ref: `#/components/schemas/${apiSchemaName}` },
              },
            },
          },
        },
      },
    };
  }

  const openApi = {
    openapi: '3.0.3',
    info: {
      title: 'microCMS API',
      version: '1.0.0',
      description: 'microCMSのマネジメントAPIから生成したコンテンツAPIの定義',
    },
    paths,
    components: { schemas },
  };

  // YAMLを保存し、openapi-typescriptでアプリケーション用の型を生成する。
  writeFileSync(
    outputPath,
    dump(openApi, { indent: 2, lineWidth: -1 }),
    'utf8',
  );
  await execAsync(
    `openapi-typescript ${outputPath} --output ${typeOutputPath}`,
  );
  console.log('OpenAPI定義と型定義の生成が完了しました。');
};

buildOpenAPI().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
