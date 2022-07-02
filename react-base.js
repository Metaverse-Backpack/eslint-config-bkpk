module.exports = {
  extends: ['./es6.js', './web.js', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-fragments': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'xss/no-mixed-html': 0,
  },
}
