module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'import/order': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        bracketSameLine: false,
        trailingComma: 'all',
      },
    ],
  },
};
