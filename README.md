# power-string

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/power-string.svg
[npm-url]: https://npmjs.org/package/power-string
[ci-image]: https://github.com/xudafeng/power-string/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/xudafeng/power-string/actions/workflows/ci.yml
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/power-string.svg
[coveralls-url]: https://coveralls.io/r/xudafeng/power-string?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/power-string.svg
[download-url]: https://npmjs.org/package/power-string

> the missing utilities of String

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

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars.githubusercontent.com/u/52845048?v=4" width="100px;"/><br/><sub><b>snapre</b></sub>](https://github.com/snapre)<br/>|
| :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Mon May 23 2022 15:14:54 GMT+0000`.

<!-- GITCONTRIBUTOR_END -->

## License

The MIT License (MIT)
