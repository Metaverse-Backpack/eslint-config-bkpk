module.exports = {
  plugins: ['xss'],
  rules: {
    'xss/no-location-href-assign': [
      'error',
      {
        escapeFunc: 'sanitizeUrl',
      },
    ],
    'xss/no-mixed-html': 'error',
  },
}
