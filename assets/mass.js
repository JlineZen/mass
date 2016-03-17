;(function() {
  var root = this,
      mass = {},
      nativeEach = [].forEach;
  
  function Promise() {
    this.callbacks = [];
  }    

  Promise.prototype = {

    constructor: Promise,

    resolve: function(result) {
      this.complete('resolve', result);
    },

    reject: function(result) {
      this.complete('reject', result);
    },

    complete: function(type, result) {
      while (this.callbacks[0]) {
        this.callbacks.shift()[type](result);
      }
    },

    then: function(successHandle, failedHandle) {
      this.callbacks.push({
        resolve: successHandle,
        reject:  failedHandle
      });

      return this;
    }
  };
      
  function extend(target, sources) {
    for (var key in sources) {
      if (Object.hasOwnProperty.call(sources, key)) {
        target[key] = sources[key];
      }
    }
    return target;
  }

  extend(mass, {
    requestAnimationFrame: function(fn) {
       return  window.requestAnimationFrame(fn) ||
               window.mozRequestAnimationFrame(fn) ||
               window.webkitRequestAnimationFrame(fn) ||
               window.msRequestAnimationFrame(fn) ||
               window.oRequestAnimationFrame(fn) ||
               function() {
                  setTimeout(fn, 1000 / 60);
               };
    },

    getStyle: function(elem) {
      if (elem.currentStyle) {
        return elem.currentStyle;
      } else if (window.getComputedStyle) {
        return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
      }
    },

    debounce: function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        timeout = setTimeOut(later, wait);
        if(callNow) func.apply(context, args);
      }
    },

    once: function(fn, context) {
      var result;
      return function() {
        if (fn) {
          result = fn.apply(context || this, arguments);
          fn = null;
        }

        return result;
      }
    },

    each: function(obj, callback, context) {
      if (!obj) return;
      if (typeof obj === 'function' && obj.forEach === nativeEach) {
        obj.forEach(callback);
      } else if (+obj.length === obj.length) {
        for (var i = 0, len = obj.length; i < len; i++) {
          callback.call(context, obj[i], i, obj);
        }
      }
    },

    uniquel: function(obj) { //remove the same in array
      var newArray = [];
      obj.forEach(function(index) {
        if (newArray.indexOf(index) == -1) {
          newArray.push(index);
        }
      });

      return newArray;
    },

    Promise: function() {
      return new Promise();
    }
  });

  root.mass = mass;
}).call(this);