;(function ($, window, document, undefined) {

  var _pluginName = 'pluginname',
      _defaults   = {},
      _settings   = {}; 
      
  // -- Private ----------------------------------------------------

  
  // -- Public ----------------------------------------------------
  var methods = {
    init : function (options) {
      _settings = $.extend(_defaults, options);

      return this.each(function () {
      
      }); 
  
    }
  };
  
  $.fn[_pluginName] = function (method) {
    if (methods[method]) { // Call Method
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) { // Initialize
      return methods.init.apply(this);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.' + _pluginName);
    }
  };
} (jQuery, window, document));