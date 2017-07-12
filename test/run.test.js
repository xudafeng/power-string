'use strict';

const path = require('path');
const uitest = require('uitest');

const testFile = `file://${path.join(__dirname, 'test.html')}`;

uitest({
  url: testFile,
  width: 300,
  height: 400,
  hidpi: false,
  useContentSize: true
}).then(() => {
  console.log('uitest success');
}).catch(() => {
  console.log('uitest error');
});
