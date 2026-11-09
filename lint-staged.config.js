export default {
  '.hooks/*': 'git update-index --add --chmod=+x',
  '*.{astro,html,css,scss,sass,less,json,jsonc,js,jsx,mjs,cjs,ts,tsx,mts,cts,svg}':
    'biome check --no-errors-on-unmatched',
  '*.{astro,html}': 'markuplint',
};
