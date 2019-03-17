module.exports = {
  'env': {
    'browser': true
  },
  'plugins': [
    "es5"
  ],
  'extends': [
    'standard',
    'plugin:es5/no-es2015'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': ['error', 4],
    'no-cond-assign': "off",
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
}
