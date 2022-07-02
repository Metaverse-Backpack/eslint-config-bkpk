# eslint-config-bkpk

> Standard Bkpk [`eslint`](https://eslint.org) configurations

## Requirements

- `eslint >7.X.X`

## Basic Usage

**Install**

```bash
$ npm install -D eslint-config-bkpk
```

**Create `.eslintrc.js`**

```javascript
// .eslintrc.js

module.exports = {
  extends: ['bkpk/<extension name>'],
}
```

## Available Extensions

- `es6`
- `typescript`
- `react` (for ES6)
- `react-with-typescript`
- `react-native` (for ES6)
- `react-native-with-typescript`
- `vue` (for ES6)
- `vue-with-typescript`
- `next`

## Examples

```javascript
// .eslintrc.js

module.exports = {
  extends: ['bkpk/typescript'],
}
```

```javascript
// .eslintrc.js

module.exports = {
  extends: ['bkpk/react-with-typescript'],
}
```
