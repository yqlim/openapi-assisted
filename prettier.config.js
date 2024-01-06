// spellchecker:ignore ianvs,tsdoc,packagejson

export default {
  singleQuote: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-jsdoc',
    'prettier-plugin-sh',
    'prettier-plugin-packagejson',
  ],
  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@|~|#)+/',
    '',
    '^[.]',
    '',
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '.(c|s|le)ss$',
    '',
    '^(assets|public)/',
  ],
  importOrderTypeScriptVersion: '5.3.3',
  // prettier-plugin-jsdoc
  jsdocCommentLineStrategy: 'multiline',
  jsdocPreferCodeFences: true,
  tsdoc: true,
};
