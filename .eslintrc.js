// ref: https://github.com/lightsound/nexst/blob/main/.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  overrides: [],
  plugins: ['@typescript-eslint', 'sort-keys-custom-order', 'simple-import-sort', 'import', 'unused-imports'], // ex) @typescript-eslintを入れるとtypescriptに関するrulesを設定できるようにする(eslintは元々javascriptのものなので、デフォルトではtypescriptに対応していない)
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ], // rulesのデフォルトの値を決める、さらにpluginsやparserOptionsなどにも影響を及ぼす。preiiterを最後に追加することでprettierで設定されているもののeslintは全てoffになる(被らなくなる)。
  rules: {
    // extendsでデフォルトにセットされている値を上書きする
    // Javascript
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }], // console.logなどが残っているとエラーになる
    'no-restricted-syntax': [
      // 以下の文法を禁止する(https://qiita.com/putan/items/0c0037ce00d21854a8d0)
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
      { selector: 'TSEnumDeclaration', message: "Don't declare enums" },
    ],
    'prefer-arrow-callback': 'error', // callback関数をアロー関数に強制する
    'prefer-const': 'error', // constで宣言できる場合はconstで宣言する
    'func-style': ['error', 'expression'], // 関数はアロー関数を強制する
    'arrow-body-style': 'off', // アロー関数の中身が1行の場合{}をつけなくて良いようにする
    'no-restricted-imports': [
      // 特定のimportを禁止する
      'error',
      {
        paths: [
          {
            name: 'moment',
            message: 'Use dayjs instead!',
          },
          {
            name: 'lodash', // https://azukiazusa.dev/blog/lodash-es-lodash/
            message: 'Use lodash-es instead!',
          },
        ],
        patterns: ['./', '../'], // 相対パスでのimportを禁止する
      },
    ],
    'unused-imports/no-unused-imports': 'error', // 未使用のimportを禁止する
    'no-var': 'error', // varで変数の宣言をできないようにする
    // react
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // `import React from 'react';` はimportしなくても良いようにする
    // 'react/jsx-handler-names': [ // イベントハンドラの命名規則を強制する(イベントハンドラの名前はある程度自由を持たせたい(toggleとか使うと思う)のでoffにする)
    //   'error',
    //   {
    //     eventHandlerPrefix: 'handle',
    //     eventHandlerPropPrefix: 'on',
    //     checkLocalVariables: true,
    //     checkInlineFunction: true,
    //   },
    // ],
    'react/destructuring-assignment': ['error', 'never'], // propsの分割代入を許容しない
    'react/display-name': 'error', // 関数に名前をつけることが推奨されているため(https://zenn.dev/daisuke7924/scraps/454f5655b1c3ff)
    'react-hooks/rules-of-hooks': 'error', // Hooksは関数のトップレベルでしか呼び出せない
    'react-hooks/exhaustive-deps': 'off', // useEffectの依存配列に警告を出さないようにする
    // typescript
    '@typescript-eslint/no-explicit-any': 'off', // anyを許容する
    '@typescript-eslint/no-var-requires': 'off', // requireを許容する
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 関数の戻り値の型を明示しなくてもよいようにする
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }], // 型のimportの場合、import typeを強制する
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }], // 未使用の変数を禁止する(変数、引数の先頭に_をつけた場合は許容する)
    '@typescript-eslint/naming-convention': [
      // 命名規則を強制する
      'error',
      { selector: ['typeAlias', 'typeParameter'], format: ['PascalCase'] },
      // { selector: ['property', 'method'], format: ['camelCase'] }, // dbのカラム、フィールド名はsnake_caseなのでその場合はコメントで無効化する
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['no', 'is', 'has', 'should'],
        filter: { regex: '^_', match: false },
      },
    ],
    // next
    '@next/next/no-document-import-in-page': 'off', // https://stackoverflow.com/questions/69061240/nextjs-importing-next-document-outside-of-pages-document-error
    // sort-keys-custom-order
    'sort-keys-custom-order/object-keys': ['off'], // For JS objects sorting
    'sort-keys-custom-order/type-keys': ['error', { orderedKeys: ['id', 'name', 'title'] }], // For TS types sorting
    // eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // eslint-plugin-import
    'import/first': 'error', // importはファイルの最初に書くのを強制する
    'import/newline-after-import': 'error', // 最後のimoprt文の終わりに改行を強制する
    'import/no-duplicates': 'error', // fromが同じ場合は自動でマージされる
    'import/no-default-export': 'error', // default exportを禁止する なぜdefault exportを使うべきではないのか → https://engineering.linecorp.com/ja/blog/you-dont-need-default-export/
    // eslint-plugin-jsx-a11y
    'jsx-a11y/no-autofocus': 'off', // autoFocusを許容する
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    // Next.js needs default exports for pages and API points
    {
      files: ['*/pages/**'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
    // Storybook needs default exports for stories
    {
      files: ['*/**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
