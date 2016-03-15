;(function() {
  var root = this;
  var mass = {};


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
    }
  });

  root.mass = mass;
}).call(this);