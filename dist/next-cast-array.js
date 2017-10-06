(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.castArray = function (inTarget) {
    return Array.isArray( inTarget ) ?  inTarget : [ inTarget ];
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.castArray;
  }

}());
