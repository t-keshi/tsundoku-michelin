module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'plugin:import/errors', 'plugin:jsx-a11y/recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['jsx-a11y', 'prefer-arrow', 'react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {
    camelcase: 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'consistent-return': 'off',
    'no-console': 'error',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__specs__/**',
          '**/*/*.spec.*',
          '**/__tests__/**',
          '**/*/*.test.*',
          'src/setupTests.*',
          '.storybook/**',
          'stories/**',
          '**/*.stories.tsx',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
};
