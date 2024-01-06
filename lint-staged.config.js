export default {
  '*.{ts,cts,mts,js,cjs,mjs}': ['eslint --fix', 'prettier --write'],
  '*.{html,css,less,scss,md,json,yml,yaml,sh}': 'prettier --write',
};
