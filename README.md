# power-string

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/power-string.svg?style=flat-square
[npm-url]: https://npmjs.org/package/power-string
[travis-image]: https://img.shields.io/travis/xudafeng/power-string.svg?style=flat-square
[travis-url]: https://travis-ci.org/xudafeng/power-string
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/power-string.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/xudafeng/power-string?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/power-string.svg?style=flat-square
[download-url]: https://npmjs.org/package/power-string

> string utils

## Installment

```bash
$ npm i power-string --save-dev
```

## Usage

```javascript
const PowerString = require('power-string');
const {
  isChineseLetter,
  getLength,
  sliceString,
  splitToArray
} = PowerString;

isChineseLetter('中'); // true
getLength('中'); // 2
sliceString('这是一句中文', 4); // 这是
splitToArray('这是一句中文+123456', 4); // [ '这是', '一句', '中文', '+123', '456' ]
```

## License

The MIT License (MIT)
