import { exec } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { promisify } from 'node:util';
import { dump } from 'js-yaml';

const execAsync = promisify(exec);
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

const commonProperties = {
  id: { type: 'string' },
  createdAt: { type: 'string', format: 'date-time' },
  updatedAt: { type: 'string', format: 'date-time' },
  publishedAt: { type: 'string', format: 'date-time', nullable: true },
  revisedAt: { type: 'string', format: 'date-time', nullable: true },
};

const objectSchema = (description) => ({
  type: 'object',
  ...(description ? { description } : {}),
});

const fieldSchema = (field, customFields) => {
  const description = field.description ?? field.name;

  switch (field.kind) {
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

      return field.multipleSelect
        ? { type: 'array', description, items: itemSchema }
        : itemSchema;
    }
    case 'media':
    case 'relation':
      return field.multipleSelect
        ? { type: 'array', description, items: objectSchema() }
        : objectSchema(description);
    case 'custom': {
      const customField = customFields.get(field.customFieldId);
      return customField
        ? contentSchema(customField.fields, customFields, description)
        : objectSchema(description);
    }
    case 'repeater':
      return {
        type: 'array',
        description,
        items: objectSchema(),
      };
    default:
      return { type: 'string', description };
  }
};

const contentSchema = (fields, customFields, description) => {
  const properties = { ...commonProperties };
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

const buildOpenAPI = async () => {
  console.log('microCMSのマネジメントAPIからスキーマを取得中...');

  const { apis } = await getJson('/apis');
  const apiDefinitions = await Promise.all(
    apis.map(async (api) => ({
      ...api,
      ...(await getJson(`/apis/${api.endpoint}`)),
    })),
  );

  const schemas = {};
  const paths = {};

  for (const api of apiDefinitions) {
    const customFields = new Map(
      api.customFields.map((field) => [field.fieldId, field]),
    );
    const schemaName = api.endpoint.replaceAll(
      /(^|[-_])(\w)/g,
      (_, __, character) => character.toUpperCase(),
    );
    const schema = contentSchema(api.apiFields, customFields, api.name);
    schemas[schemaName] = schema;

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
                      items: { $ref: `#/components/schemas/${schemaName}` },
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
                schema: { $ref: `#/components/schemas/${schemaName}` },
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

  writeFileSync(
    outputPath,
    dump(openApi, { indent: 2, lineWidth: -1 }),
    'utf8',
  );
  await execAsync(
    `openapi-typescript ${outputPath} --output ${typeOutputPath}`,
  );
  await execAsync(`biome format --write ${typeOutputPath}`);
  console.log('OpenAPI定義と型定義の生成が完了しました。');
};

buildOpenAPI().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
