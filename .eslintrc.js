module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    'linebreak-style': 0,
    'import/first': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'operator-linebreak': ['error', 'after'],
    "object-curly-newline": ["error", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": { "multiline": true, "minProperties": 5 },
      "ExportDeclaration": { "multiline": true, "minProperties": 5 }
    }],
    'react/button-has-type': 0,
    // 'implicit-arrow-linebreak': ["error", "below"],
    'arrow-body-style': ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "prettier/prettier": ["error", {
      "printWidth": 85,
      "arrowParens": "always",
      "semi": true,
      "tabWidth": 2,
      "singleQuote": true,
      "trailingComma": "all",
      "endOfLine": "auto",
      "jsxBracketSameLine": false
    }],
    "no-param-reassign": ["error", {"props": false}],
    "react/jsx-props-no-spreading": "off"
  },
};
