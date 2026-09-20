import { exec } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { promisify } from 'node:util';
import SwaggerParser from '@apidevtools/swagger-parser';
import { dump } from 'js-yaml';

const execAsync = promisify(exec);

async function buildOpenAPI() {
  try {
    console.log('🔄 OpenAPIファイルを統合中...');

    // 分割されたOpenAPIファイルを読み込んで統合
    const api = await SwaggerParser.dereference('./openapi/openapi.yaml');

    // 統合されたファイルをpublicフォルダに出力
    const outputPath = resolve('./public/openapi.yaml');

    // JSONをYAMLに変換
    const yamlString = dump(api, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
    });

    writeFileSync(outputPath, yamlString, 'utf8');

    console.log('✅ OpenAPIファイルの統合が完了しました');
    console.log(`📁 出力先: ${outputPath}`);

    // 型定義も生成
    console.log('🔄 型定義を生成中...');
    await execAsync(
      'openapi-typescript ./public/openapi.yaml --output ./packages/ui/src/types/microcms.ts',
    );
    await execAsync('biome format --write ./packages/ui/src/types/microcms.ts');
    console.log('✅ 型定義の生成が完了しました');
  } catch (error) {
    console.error('❌ OpenAPIファイルの統合に失敗しました:', error);
    process.exit(1);
  }
}

buildOpenAPI();
