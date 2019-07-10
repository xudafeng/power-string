'use strict';

const assert = require('assert');

const { PowerString: StringUtil } = require('../lib/power-string');

describe('./test/power-string.test.js', () => {
  let res;

  describe('isChineseLetter()', () => {
    it('should be ok', () => {
      res = StringUtil.isChineseLetter('.');
      assert.equal(res, false);
      res = StringUtil.isChineseLetter('我');
      assert.equal(res, true);
      res = StringUtil.isChineseLetter(' ');
      assert.equal(res, false);
      res = StringUtil.isChineseLetter('　');
      assert.equal(res, true);
    });
  });

  describe('getLength()', () => {
    it('should be ok', () => {
      res = StringUtil.getLength('.');
      assert.equal(res, 1);
      res = StringUtil.getLength('。');
      assert.equal(res, 2);
      res = StringUtil.getLength('hello power string');
      assert.equal(res, 18);
      res = StringUtil.getLength('这是一段中文');
      assert.equal(res, 12);
    });
  });

  describe('sliceString()', () => {
    it('should be ok', () => {
      res = StringUtil.sliceString('123.一段中文', 5);
      assert.equal(res, '123.一');
      res = StringUtil.sliceString('一段123.中文', 5);
      assert.equal(res, '一段1');
    });
  });

  describe('splitToArray()', () => {
    it('should be ok', () => {
      res = StringUtil.splitToArray('123.一段中文123.一段中文123.一段中文123.一段中文', 6);
      assert.equal(res.length, 8);
      res = StringUtil.splitToArray('123', 6);
      assert.deepEqual(res, ['123']);
      res = StringUtil.splitToArray('123456789', 2);
      assert.deepEqual(res[4], '9');
    });
  });
});
