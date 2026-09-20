export default {
  '.hooks/*': 'git update-index --add --chmod=+x',
  '*.{astro,css,scss,sass,less,json,jsonc,js,jsx,mjs,cjs,ts,tsx,mts,cts,svg}':
    'node ./node_modules/@biomejs/biome/bin/biome check --no-errors-on-unmatched',
  '*.astro': 'node ./node_modules/markuplint/bin/markuplint.mjs',
};
