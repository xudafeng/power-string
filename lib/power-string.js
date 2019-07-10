'use strict';

// https://github.com/xudafeng/power-string

;(function(root, factory) {
  if (typeof exports !== 'undefined') {
    return factory(exports);
  } else {
    /* istanbul ignore next */
    factory(root['PowserString'] || (root['PowserString'] = {}));
  }
})(this, function(exports) {
  const isChineseLetter = letter => {
    const charCode = letter.charCodeAt();
    const single = (charCode >= 0x0001 && charCode <= 0x007e) || (charCode >= 0xff60 && charCode <= 0xff9f);
    return !single;
  };

  const getLength = string => {
    let res = 0;
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      const isChinese = isChineseLetter(letter);
      res++;
      if (isChinese) {
        res++;
      }
    }
    return res;
  };

  const sliceString = (string, len) => {
    let res = '';
    let strlen = 0;
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      strlen++;
      if (isChineseLetter(letter)) {
        strlen++;
      }
      res += string.substr(i, 1);
      if (strlen >= len) {
        break;
      }
    }
    return res;
  };

  const splitToArray = (string, width) => {
    const res = [];
    let temp = '';
    let strlen = 0;
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      strlen++;
      temp += letter;
      if (isChineseLetter(letter)) {
        strlen++;
      }
      if (strlen >= width) {
        res.push(temp);
        temp = '';
        strlen = 0;
      }
    }
    if (temp.length) {
      res.push(temp);
    }
    return res;
  };

  /* istanbul ignore next */
  function PowerString() {}

  PowerString.isChineseLetter = isChineseLetter;
  PowerString.getLength = getLength;
  PowerString.sliceString = sliceString;
  PowerString.splitToArray = splitToArray;

  exports.PowerString = PowerString;
});
