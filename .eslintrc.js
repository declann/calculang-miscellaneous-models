module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  //"extends": "eslint:recommended",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  //ignorePatterns: ['**/*.cul.js'], // how to ignore bundles? or just add define as a global?
  rules: {
    'no-undef': ['error'/*, { "globals": { "define": "readonly" } }*/], // some version of eslint don't like the global define !
    'no-restricted-syntax': [
      'error',
      {
        message: "calculang: don't pollute the _ namespace, 'as' to something not ending with _",
        selector:
          'ImportDeclaration[source.value=/cul\.js/] > ImportSpecifier[local.name=/_$/]',
        // converted to esm => match cul_scope_x rather than .cul
      },
    ],
  },
};
