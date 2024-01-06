const { builtinModules } = require('node:module');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    'shared-node-browser': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: ['eslint:recommended'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'import/no-nodejs-modules': [
      'error',
      {
        allow: builtinModules.map((mod) => `node:${mod}`),
      },
    ],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
  },
  overrides: [
    // TS files
    {
      files: ['*.{ts,cts,mts}'],
      // These rules are handled by tsc
      rules: {
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
    // Test files
    {
      files: ['*.spec.ts', '**/__tests__/**'],
      rules: {
        'no-console': 'off',
      },
    },
    // Node scripts
    {
      files: [
        'scripts/**',
        './*.{js,cjs,mjs,ts,cts,mts}',
        'packages/*/*.{js,cjs,mjs,ts,cts,mts}',
      ],
      env: {
        node: true,
      },
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
