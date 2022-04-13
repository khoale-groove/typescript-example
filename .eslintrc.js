module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Format
        quotes: [2, 'single'],
        semi: [2, 'always'],
        // 'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-unused-vars': ['warn', { vars: 'all' }],

        // react native
        'react-native/no-unused-styles': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,

        // import
        // 'import/order': [
        //   2,
        //   {
        //     groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        //     'newlines-between': 'always-and-inside-groups',
        //   },
        // ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-undef': 'off',
      },
    },
  ],
};
