/*!
 * Vue-datepicker v0.2.11
 * (c) 2019-2023 Mathieu Stanowski
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = global || self, factory(global.VueDatepicker = {}, global.Vue));
}(this, (function (exports, OurVue) { 'use strict';

  OurVue = OurVue && Object.prototype.hasOwnProperty.call(OurVue, 'default') ? OurVue['default'] : OurVue;

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) { return arr; }
  }
  var arrayWithHoles = _arrayWithHoles;

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) { return; }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) { break; }
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) { _i["return"](); }
      } finally {
        if (_d) { throw _e; }
      }
    }
    return _arr;
  }
  var iterableToArrayLimit = _iterableToArrayLimit;

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) { len = arr.length; }
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var arrayLikeToArray = _arrayLikeToArray;

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) { return; }
    if (typeof o === "string") { return arrayLikeToArray(o, minLen); }
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) { n = o.constructor.name; }
    if (n === "Map" || n === "Set") { return Array.from(o); }
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return arrayLikeToArray(o, minLen); }
  }
  var unsupportedIterableToArray = _unsupportedIterableToArray;

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var nonIterableRest = _nonIterableRest;

  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
  }
  var slicedToArray = _slicedToArray;

  function install(Vue) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (install.installed) { return; }
    install.installed = true;
    if (OurVue !== Vue) {
      console.error("Multiple instances of Vue detected.");
    }
    var components = args.components || {};
    var options = args.options || {};
    Vue.prototype.$vuedatepicker = options;
    OurVue.prototype.$vuedatepicker = options;
    Object.entries(components).forEach(function (_ref) {
      var _ref2 = slicedToArray(_ref, 2),
          name = _ref2[0],
          component = _ref2[1];
      Vue.component(name, component);
    });
  }

  var VueDatePicker = {
    installed: false,
    version: "0.2.11",
    install: install
  };

  exports.default = VueDatePicker;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
