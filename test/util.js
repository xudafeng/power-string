'use strict';

var _macaca_uitest = window._macaca_uitest;

_macaca_uitest.utils = {
  diffWithScreenshot: function(name, done, tolerantCfg) {
    var that = this;
    that.takeScreenshot(name, function(screenshotImg) {
      if (screenshotImg) {
        that.loadImage('./test/expectScreenshot/' + name + '.png', function(specImg){
          if (specImg) {
            var isSame = that.diffImage(screenshotImg, specImg, tolerantCfg);
            if (isSame) {
              done();
            } else {
              done(new Error('diff image error:' + name));
            }
          } else {
            done();
          }
        });
      } else {
        setTimeout(function(){
          done();
        }, 100);
      }
    });
  },
  takeScreenshot: function(name, callback) {
    var that = this;
    setTimeout(function() {
      _macaca_uitest.screenshot(name + '.png', function() {
        if (callback) {
          that.loadImage('./screenshot/' + name + '.png', callback);
        }
      });
    }, 1000);
  },
  loadImage: function(src, callback) {
    var img = new Image();
    img.onerror = function() {
      callback && callback(null);
    };
    img.onload = function() {
      callback && callback(img);
    };
    img.src = src;
  },
  diffImage: function(img0, img1, tolerantCfg) {
    if (img0.width !== img1.width || img0.height !== img1.height){
      return false;
    } else {
      var imgData0 = this.getImageData(img0);
      var imgData1 = this.getImageData(img1);
      return this.diffImageData(imgData0, imgData1, tolerantCfg);
    }
  },
  diffImageData:function (imgData0, imgData1, tolerantCfg) {
    tolerantCfg = tolerantCfg || {};
    var tolerantValue = tolerantCfg.value || 20;
    var tolerantNum = tolerantCfg.num || 20;

    var num = 0;
    for (var i = 0, l = imgData0.length; i < l; i += 4) {
      for (var j = 0;j < 4;j ++) {
        if (Math.abs(imgData0[i + j] - imgData1[i + j]) > tolerantValue) {
          num ++;
          if (num > tolerantNum) {
            return false;
          }
          break;
        }
      }
    }
    return true;
  },
  getImageData: function(img) {
    this._cacheCanvas = this._cacheCanvas || document.createElement('canvas');
    var canvas = this._cacheCanvas;
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0, 0, img.width, img.height).data;
    return data;
  }
};
