/*!
 * Vue-datepicker v0.2.11
 * (c) 2019-2023 Mathieu Stanowski
 */
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Vue from 'vue';
import dayjs from 'dayjs';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var defineProperty = _defineProperty;

var localeObject = {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
  weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  weekStart: 0,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  ordinal: function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return "[".concat(n).concat(s[(v - 20) % 10] || s[v] || s[0], "]");
  },
  buttonValidate: 'Ok',
  buttonCancel: 'Cancel',
  rangeHeaderText: 'From %d To %d'
};

var localeObject$1 = {
  name: 'fr',
  weekdays: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
  months: 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Dim_Lun_Mar_Mer_Jeu_Ven_Sam'.split('_'),
  monthsShort: 'Janv_Févr_Mars_Avr_Mai_Juin_Juil_Août_Sept_Oct_Nov_Déc'.split('_'),
  weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  buttonValidate: 'Ok',
  buttonCancel: 'Annuler',
  rangeHeaderText: 'Du %d Au %d'
};

var localeObject$2 = {
  name: 'es',
  monthsShort: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
  weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
  weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
  weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY H:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
  },
  ordinal: function ordinal(n) {
    return "".concat(n, "\xBA");
  },
  buttonValidate: 'Ok',
  buttonCancel: 'Anular',
  rangeHeaderText: 'Del %d Al %d'
};

var localeObject$3 = {
  name: 'de',
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
  months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
  ordinal: function ordinal(n) {
    return "".concat(n, ".");
  },
  weekStart: 1,
  formats: {
    LTS: 'HH:mm:ss',
    LT: 'HH:mm',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd, D. MMMM YYYY HH:mm'
  },
  buttonValidate: 'Ok',
  buttonCancel: 'Abbrechen',
  rangeHeaderText: 'Vom %d Bis %d'
};

var localeObject$4 = {
  name: 'he',
  weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
  weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
  weekdaysMin: 'א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳'.split('_'),
  months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
  monthsShort: 'ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ'.split('_'),
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [ב]MMMM YYYY',
    LLL: 'D [ב]MMMM YYYY HH:mm',
    LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
    l: 'D/M/YYYY',
    ll: 'D MMM YYYY',
    lll: 'D MMM YYYY HH:mm',
    llll: 'ddd, D MMM YYYY HH:mm'
  },
  buttonValidate: 'אישור',
  buttonCancel: 'ביטול',
  rangeHeaderText: 'מתאריך %d עד תאריך %d'
};

var localeObject$5 = {
  name: 'ru',
  weekdays: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
  weekdaysShort: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
  weekdaysMin: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
  months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
  monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  ordinal: function ordinal(n) {
    return n;
  },
  buttonValidate: 'Ок',
  buttonCancel: 'Отмена',
  rangeHeaderText: 'От %d До %d'
};

var localeObject$6 = {
  name: 'sv',
  weekdays: 'Söndag_Måndag_Tisdag_Onsdag_Torsdag_Fredag_Lördag'.split('_'),
  weekdaysShort: 'Sön_Mån_Tis_Ons_Tor_Fre_Lör'.split('_'),
  weekdaysMin: 'Sö_Må_Ti_On_To_Fr_Lö'.split('_'),
  months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
  monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
  weekStart: 0,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  ordinal: function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return "[".concat(n).concat(s[(v - 20) % 10] || s[v] || s[0], "]");
  },
  buttonValidate: 'Ok',
  buttonCancel: 'Avbryt',
  rangeHeaderText: 'Från %d till %d'
};



var locales = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fr: localeObject$1,
  en: localeObject,
  es: localeObject$2,
  de: localeObject$3,
  he: localeObject$4,
  ru: localeObject$5,
  sv: localeObject$6
});

var Z_INDEX_LIST = {
  datepicker: 1002
};
var DEFAULT_LOCALE_PROPERTIES = ['name', 'weekdays', 'weekdaysShort', 'weekdaysMin', 'weekStart', 'months', 'monthsShort', 'ordinal', 'formats', 'buttonCancel', 'buttonValidate', 'rangeHeaderText'];
var DEFAULT_INPUT_DATE_FORMAT = {
  date: 'DD MMMM YYYY',
  month: 'MMMM YYYY',
  quarter: 'YYYY-[Q]Q',
  year: 'YYYY',
  range: 'DD MMMM YYYY'
};
var DEFAULT_OUTPUT_DATE_FORMAT = {
  date: 'YYYY-MM-DD',
  month: 'YYYY-MM',
  quarter: 'YYYY-Q',
  year: 'YYYY',
  range: 'YYYY-MM-DD'
};
var DEFAULT_HEADER_DATE_FORMAT = {
  date: 'dddd DD MMMM',
  month: 'MMMM',
  quarter: '[Q]Q',
  year: 'YYYY',
  range: 'DD MMMM YYYY'
};
var AVAILABLE_YEARS = {
  min: 1900,
  max: 3000
};
var DATEPICKER_MODES = {
  date: 'date',
  month: 'month',
  quarter: 'quarter',
  year: 'year'
};
var MAX_PRESETS_NUMBER = 6;
var DATE_HEADER_REGEX = /(%d)+/;
var KEYCODES = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Localable = Vue.extend({
  name: 'Localable',
  props: {
    locale: {
      type: Object,
      default: function _default() {
        return {
          lang: undefined
        };
      }
    }
  },
  computed: {
    currentLocale: function currentLocale() {
      var lang = this.locale.lang;
      return _objectSpread(_objectSpread({}, this.locale), {}, {
        lang: this.getLocale(lang)
      });
    }
  },
  methods: {
    getDefaultLang: function getDefaultLang() {
      return (this.$vuedatepicker && this.$vuedatepicker.lang || window.navigator.userLanguage || window.navigator.language || 'en').substr(0, 2);
    },
    isValidLocale: function isValidLocale() {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var properties = Object.keys(lang);
      return properties.length > 0 && properties.every(function (property) {
        return DEFAULT_LOCALE_PROPERTIES.includes(property);
      });
    },
    getLocale: function getLocale(lang) {
      return this.isValidLocale(lang) ? lang : locales[lang] || this.getLocale(this.getDefaultLang());
    }
  }
});

var Mobile = Vue.extend({
  name: 'Mobile',
  props: {
    mobileBreakpoint: {
      type: [Number, String],
      default: 576,
      validator: function validator(value) {
        return !isNaN(Number(value));
      }
    }
  },
  data: function data() {
    return {
      width: 0,
      mobile: false,
      resizeTimeout: undefined
    };
  },
  computed: {
    isMobile: function isMobile() {
      return this.mobile;
    }
  },
  created: function created() {
    var _this = this;
    if (!window) { return; }
    window.addEventListener('resize', this.onResize, {
      passive: true
    });
    this.$on('hook:destroyed', function () {
      window.removeEventListener('resize', _this.onResize, {
        passive: true
      });
    });
    this.update();
  },
  methods: {
    onResize: function onResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(this.update, 200);
    },
    update: function update() {
      var width = this.getClientWidth();
      this.width = width;
      this.mobile = width < parseInt(this.mobileBreakpoint, 10);
    },
    getClientWidth: function getClientWidth() {
      if (typeof document === 'undefined') { return 0; }
      return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
  }
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
module.exports = _typeof;
});

var EVENTS = ['click'];
var instances = [];
var ClickOutside = {
  instances: instances,
  bind: bind,
  update: function update(el, binding) {
    if (JSON.stringify(binding.value) === JSON.stringify(binding.oldValue)) { return; }
    bind(el, binding);
  },
  unbind: unbind
};
function bind(el, _ref) {
  var value = _ref.value;
  unbind(el);
  var bindingValue = value;
  var isFunction = typeof bindingValue === 'function';
  var isObject = _typeof_1(bindingValue) === 'object';
  if (!isFunction && !isObject) { return; }
  var isActive = !(bindingValue.isActive === false);
  if (!isActive) { return; }
  var handler = isFunction ? bindingValue : bindingValue.handler;
  var instance = createInstance({
    el: el,
    handler: handler
  });
  instance.eventHandlers.forEach(function (_ref2) {
    var event = _ref2.event,
        handler = _ref2.handler;
    return setTimeout(function () {
      return document.addEventListener(event, handler, false);
    }, 0);
  });
  instances.push(instance);
}
function unbind(el) {
  var instanceIndex = instances.findIndex(function (instance) {
    return instance.el === el;
  });
  if (instanceIndex === -1) { return; }
  var instance = instances[instanceIndex];
  instance.eventHandlers.forEach(function (_ref3) {
    var event = _ref3.event,
        handler = _ref3.handler;
    return document.removeEventListener(event, handler, false);
  });
  instances.splice(instanceIndex, 1);
}
function createInstance(_ref4) {
  var el = _ref4.el,
      _handler = _ref4.handler;
  return {
    el: el,
    eventHandlers: EVENTS.map(function (eventName) {
      return {
        event: eventName,
        handler: function handler(event) {
          return onEvent({
            event: event,
            el: el,
            handler: _handler
          });
        }
      };
    })
  };
}
function onEvent(_ref5) {
  var event = _ref5.event,
      el = _ref5.el,
      handler = _ref5.handler;
  var path = event.path || (event.composedPath ? event.composedPath() : undefined);
  if (path ? path.indexOf(el) < 0 : !el.contains(event.target)) {
    return handler(event, el);
  }
}

function inserted(el, binding) {
  var callback = binding.value;
  var options = binding.options || {
    passive: true
  };
  var running = false;
  var resizeCallback = function resizeCallback() {
    if (running) { return; }
    running = true;
    window.requestAnimationFrame(callback);
    running = false;
  };
  window.addEventListener('resize', resizeCallback, options);
  Object.assign(el, {
    onResize: {
      resizeCallback: resizeCallback,
      options: options,
      running: running
    }
  });
  if (!binding.modifiers || !binding.modifiers.quiet) {
    resizeCallback();
  }
}
function unbind$1(el) {
  if (!el.onResize) { return; }
  var _el$onResize = el.onResize,
      resizeCallback = _el$onResize.resizeCallback,
      options = _el$onResize.options;
  window.removeEventListener('resize', resizeCallback, options);
  delete el.onResize;
}
var Resize = {
  inserted: inserted,
  unbind: unbind$1
};

var toggleable = {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Boolean,
      required: false
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  watch: {
    value: {
      handler: function handler(val) {
        this.isActive = val;
      },
      immediate: true
    },
    isActive: function isActive(val) {
      val !== this.value && this.$emit('input', val);
    }
  }
};

function addOnceEventListener(el, eventName, cb) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var once = function once(event) {
    cb(event);
    el.removeEventListener(eventName, once, options);
  };
  el.addEventListener(eventName, once, options);
}
function generateRandomId() {
  return "_".concat(Math.random().toString(36).substr(2, 9));
}
function validateAttachTarget(value) {
  var type = _typeof_1(value);
  if (type === 'boolean' || type === 'string') { return true; }
  return value.nodeType === Node.ELEMENT_NODE;
}
function convertToUnit(value) {
  if (value == null || value === '') { return; }
  if (isNaN(+value)) { return String(value); }
  return "".concat(Number(value), "px");
}
function getSlotType(vm, name, split) {
  if (vm.$slots[name] && vm.$scopedSlots[name] && vm.$scopedSlots[name].name) {
    return split ? 'v-slot' : 'scoped';
  }
  if (vm.$slots[name]) { return 'normal'; }
  if (vm.$scopedSlots[name]) { return 'scoped'; }
}
function getSlot(vm) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var optional = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (vm.$scopedSlots[name]) {
    return vm.$scopedSlots[name] && vm.$scopedSlots[name](data);
  } else if (vm.$slots[name] && (!data || optional)) {
    return vm.$slots[name];
  }
  return;
}
function getZIndex(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) { return 0; }
  var index = +window.getComputedStyle(el).getPropertyValue('z-index');
  if (!index) { return getZIndex(el.parentNode); }
  return index;
}

var activatable = {
  mixins: [toggleable],
  props: {
    activator: {
      default: undefined,
      validator: function validator(val) {
        return ['string', 'object'].includes(_typeof_1(val));
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      activatorElement: undefined,
      activatorNode: []
    };
  },
  watch: {
    activator: 'resetActivator'
  },
  mounted: function mounted() {
    var slotType = getSlotType(this, 'activator', true);
    if (slotType && ['v-slot', 'normal'].includes(slotType)) {
      console.error("The activator slot must be bound, try '<template v-slot:activator=\"{ on }\"><button v-on=\"on\">'", this);
    }
    this.getActivator();
  },
  methods: {
    resetActivator: function resetActivator() {
      this.activatorElement = undefined;
      this.getActivator();
    },
    genActivator: function genActivator() {
      var node = getSlot(this, 'activator', Object.assign(this.getValueProxy(), {
        attrs: {
          role: 'button',
          'aria-haspopup': true,
          'aria-expanded': String(this.isActive)
        }
      })) || [];
      this.activatorNode = node;
      return node;
    },
    getActivator: function getActivator(event) {
      if (this.activatorElement) { return this.activatorElement; }
      var activator;
      if (this.activator) {
        var target = document;
        if (typeof this.activator === 'string') {
          activator = target.querySelector(this.activator);
        } else if (this.activator.$el) {
          activator = this.activator.$el;
        } else {
          activator = this.activator;
        }
      } else if (event) {
        activator = event.currentTarget || event.target;
      } else if (this.activatorNode.length) {
        activator = this.activatorNode[0].elm;
      }
      this.activatorElement = activator;
      return this.activatorElement;
    },
    getContentSlot: function getContentSlot() {
      return getSlot(this, 'default', this.getValueProxy(), true);
    },
    getValueProxy: function getValueProxy() {
      var self = this;
      return {
        get value() {
          return self.isActive;
        },
        set value(isActive) {
          self.isActive = isActive;
        }
      };
    }
  }
};

var bootable = {
  name: 'Bootable',
  data: function data() {
    return {
      isBooted: false
    };
  },
  computed: {
    hasContent: function hasContent() {
      return this.isBooted || this.isActive;
    }
  },
  watch: {
    isActive: function isActive() {
      this.isBooted = true;
    }
  },
  methods: {
    showLazyContent: function showLazyContent(content) {
      return this.hasContent && content ? content() : [this.$createElement()];
    }
  }
};

var detachable = {
  name: 'Detachable',
  mixins: [bootable],
  props: {
    attach: {
      validator: validateAttachTarget,
      default: false
    },
    contentClass: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      activatorNode: undefined,
      hasDetached: false
    };
  },
  watch: {
    attach: function attach() {
      this.hasDetached = false;
      this.initDetach();
    },
    hasContent: function hasContent() {
      this.$nextTick(this.initDetach);
    }
  },
  beforeMount: function beforeMount() {
    var _this = this;
    this.$nextTick(function () {
      if (!_this.activatorNode) { return; }
      var activator = Array.isArray(_this.activatorNode) ? _this.activatorNode : [_this.activatorNode];
      activator.forEach(function (node) {
        if (!node.elm) { return; }
        if (!_this.$el.parentNode) { return; }
        var target = _this.$el === _this.$el.parentNode.firstChild ? _this.$el : _this.$el.nextSibling;
        _this.$el.parentNode.insertBefore(node.elm, target);
      });
    });
  },
  mounted: function mounted() {
    this.hasContent && this.initDetach();
  },
  deactivated: function deactivated() {
    this.isActive = false;
  },
  beforeDestroy: function beforeDestroy() {
    try {
      if (this.$refs.content && this.$refs.content.parentNode) {
        this.$refs.content.parentNode.removeChild(this.$refs.content);
      }
      if (this.activatorNode) {
        var activator = Array.isArray(this.activatorNode) ? this.activatorNode : [this.activatorNode];
        activator.forEach(function (node) {
          node.elm && node.elm.parentNode && node.elm.parentNode.removeChild(node.elm);
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    initDetach: function initDetach() {
      if (
      this._isDestroyed || !this.$refs.content || this.hasDetached ||
      this.attach === '' ||
      this.attach === true
      ) { return; }
      var target;
      if (this.attach === false) {
        target = document.querySelector('#app') || document.querySelector('body');
      } else if (typeof this.attach === 'string') {
        target = document.querySelector(this.attach);
      } else {
        target = this.attach;
      }
      if (!target) {
        console.error("Unable to locate target '".concat(this.attach, "'"), this);
        return;
      }
      target.appendChild(this.$refs.content);
      this.hasDetached = true;
    }
  }
};

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) { len = arr.length; }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var arrayLikeToArray = _arrayLikeToArray;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) { return arrayLikeToArray(arr); }
}
var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) { return Array.from(iter); }
}
var iterableToArray = _iterableToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) { return; }
  if (typeof o === "string") { return arrayLikeToArray(o, minLen); }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) { n = o.constructor.name; }
  if (n === "Map" || n === "Set") { return Array.from(o); }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return arrayLikeToArray(o, minLen); }
}
var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
var toConsumableArray = _toConsumableArray;

function computeYearsScrollPosition(_ref) {
  var activeItem = _ref.activeItem,
      container = _ref.container,
      min = _ref.min,
      max = _ref.max;
  if (activeItem) { return activeItem.offsetTop - container.offsetHeight / 2 + activeItem.offsetHeight / 2; }
  if (min || max) { return 0; }
  return container.scrollHeight / 2 - container.offsetHeight / 2;
}
function detectFixedActivator(activator) {
  var POSITIONS = ['fixed', 'sticky'];
  var element = activator;
  var activatorFixed = false;
  while (element) {
    if (POSITIONS.includes(window.getComputedStyle(element).position)) {
      activatorFixed = true;
      return activatorFixed;
    }
    element = element.offsetParent;
  }
  activatorFixed = false;
  return activatorFixed;
}
function getInnerWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}
function getInnerHeight() {
  return window.innerHeight || document.documentElement.clientHeight;
}
function getOffsetLeft() {
  return window.pageXOffset || document.documentElement.scrollLeft;
}
function getOffsetTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
}
function getRoundedBoundedClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    top: Math.round(rect.top),
    left: Math.round(rect.left),
    bottom: Math.round(rect.bottom),
    right: Math.round(rect.right),
    width: Math.round(rect.width),
    height: Math.round(rect.height)
  };
}
function measure(element, attach) {
  if (!element) { return; }
  var rect = getRoundedBoundedClientRect(element);
  if (attach !== false) {
    var style = window.getComputedStyle(element);
    rect.left = parseInt(style.marginLeft || 0);
    rect.top = parseInt(style.marginTop || 0);
  }
  return rect;
}

var scrollbarWidth = 12;
var dynamicPosition = {
  name: 'DynamicPosition',
  data: function data() {
    return {
      activatorFixed: false,
      dimensions: {
        activator: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          offsetTop: 0,
          scrollHeight: 0,
          offsetLeft: 0
        },
        content: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          offsetTop: 0,
          scrollHeight: 0
        }
      },
      isContentActive: false,
      pageWidth: 0,
      pageYOffset: 0
    };
  },
  computed: {
    isAttached: function isAttached() {
      return this.attach !== false;
    },
    computedLeft: function computedLeft() {
      var _this$dimensions = this.dimensions,
          activator = _this$dimensions.activator,
          content = _this$dimensions.content;
      var left = (this.isAttached ? activator.offsetLeft : activator.left) || 0;
      return this.rtl ? activator.right - content.width : left;
    },
    computedTop: function computedTop() {
      var activator = this.dimensions.activator;
      var activatorHeight = activator.height;
      var top = (this.isAttached ? activator.offsetTop : activator.top + this.pageYOffset) || 0;
      return top + activatorHeight;
    },
    hasActivator: function hasActivator() {
      return Boolean(this.$slots.activator) || Boolean(this.$scopedSlots.activator) || Boolean(this.activator);
    }
  },
  watch: {
    disabled: function disabled(val) {
      val && this.callDeactivate();
    },
    isActive: function isActive(val) {
      if (this.disabled) { return; }
      val ? this.callActivate() : this.callDeactivate();
    }
  },
  methods: {
    activate: function activate() {},
    deactivate: function deactivate() {},
    callActivate: function callActivate() {
      this.activate();
    },
    callDeactivate: function callDeactivate() {
      this.isContentActive = false;
      this.deactivate();
    },
    calcLeft: function calcLeft(menuWidth) {
      return convertToUnit(this.isAttached ? this.computedLeft : this.calcXOverflow(this.computedLeft, menuWidth));
    },
    calcTop: function calcTop() {
      return convertToUnit(this.isAttached ? this.computedTop : this.calcYOverflow(this.computedTop));
    },
    calcXOverflow: function calcXOverflow(left, menuWidth) {
      var xOverflow = left + menuWidth - this.pageWidth + scrollbarWidth;
      if ((!this.left || this.right) && xOverflow > 0) {
        left = Math.max(left - xOverflow, 0);
      } else {
        left = Math.max(left, scrollbarWidth);
      }
      return left + getOffsetLeft();
    },
    calcYOverflow: function calcYOverflow(top) {
      var toTop = this.pageYOffset + getInnerHeight();
      var _this$dimensions2 = this.dimensions,
          activator = _this$dimensions2.activator,
          content = _this$dimensions2.content;
      var contentHeight = (content || {}).height;
      var totalHeight = top + contentHeight;
      var isOverflowing = toTop < totalHeight;
      if (isOverflowing && activator.top > contentHeight) {
        top = this.pageYOffset + (activator.top - contentHeight);
      } else if (isOverflowing && !this.allowOverflow) {
        top = toTop - contentHeight - scrollbarWidth;
      } else if (top < this.pageYOffset && !this.allowOverflow) {
        top = this.pageYOffset + scrollbarWidth;
      }
      return top < scrollbarWidth ? scrollbarWidth : top;
    },
    detectOrigin: function detectOrigin(leftInPx, topInPx) {
      var left = parseInt(leftInPx.split('px')[0]);
      var top = parseInt(topInPx.split('px')[0]);
      var activator = this.dimensions.activator;
      var origin = [];
      origin.push(activator.top < top - this.pageYOffset ? 'top' : 'bottom');
      origin.push(activator.left === left ? 'left' : 'right');
      return this.origin || origin.join(' ');
    },
    checkForPageYOffset: function checkForPageYOffset() {
      this.pageYOffset = this.activatorFixed ? 0 : getOffsetTop();
    },
    checkActivatorFixed: function checkActivatorFixed() {
      if (this.isAttached) { return; }
      var activator = this.getActivator();
      this.activatorFixed = detectFixedActivator(activator);
    },
    sneakPeek: function sneakPeek(cb) {
      var _this = this;
      requestAnimationFrame(function () {
        var element = _this.$refs.content;
        if (!element || element.style.display !== 'none') {
          cb();
          return;
        }
        element.style.display = 'inline-block';
        cb();
        element.style.display = 'none';
      });
    },
    startTransition: function startTransition() {
      var _this2 = this;
      return new Promise(function (resolve) {
        return requestAnimationFrame(function () {
          _this2.isContentActive = _this2.isActive;
          resolve();
        });
      });
    },
    updateDimensions: function updateDimensions() {
      var _this3 = this;
      this.checkActivatorFixed();
      this.checkForPageYOffset();
      this.pageWidth = getInnerWidth();
      var dimensions = {};
      var activator = this.getActivator();
      if (!activator) { return; }
      dimensions.activator = measure(activator, this.attach);
      dimensions.activator.offsetLeft = activator.offsetLeft;
      if (this.isAttached) {
        dimensions.activator.offsetTop = activator.offsetTop;
      } else {
        dimensions.activator.offsetTop = 0;
      }
      this.sneakPeek(function () {
        dimensions.content = measure(_this3.$refs.content, _this3.attach);
        _this3.dimensions = dimensions;
      });
    }
  }
};

var stackable = {
  data: function data() {
    return {
      stackMinZIndex: 1000
    };
  },
  computed: {
    activeZIndex: function activeZIndex() {
      var content = this.$refs.content;
      var index = !this.isActive ? getZIndex(content) : this.getMaxZIndex() + 2;
      return parseInt(index);
    }
  },
  methods: {
    getMaxZIndex: function getMaxZIndex() {
      var base = this.$el;
      var activeElements = toConsumableArray(document.getElementsByClassName('menu__content--active'));
      var zIndexes = [this.stackMinZIndex, getZIndex(base)].concat(toConsumableArray(activeElements.map(function (activeElement) {
        return getZIndex(activeElement);
      })));
      return Math.max.apply(Math, toConsumableArray(zIndexes));
    }
  }
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var VDMenu = {
  name: 'VDMenu',
  mixins: [activatable, detachable, dynamicPosition, stackable],
  directives: {
    Resize: Resize
  },
  props: {
    transition: {
      type: String,
      default: 'menu-transition'
    },
    origin: {
      type: String,
      default: undefined
    },
    allowOverflow: {
      type: Boolean,
      default: false
    },
    rtl: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: [Number, String],
      default: undefined
    },
    maxWidth: {
      type: [Number, String],
      default: undefined
    },
    maxHeight: {
      type: [Number, String],
      default: 'auto'
    },
    zIndex: {
      type: Number,
      default: undefined
    },
    bottomSheet: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      resizeTimeout: 0,
      defaultOffset: 8
    };
  },
  computed: {
    styles: function styles() {
      return {
        maxHeight: this.calculedMenuMaxHeight,
        minWidth: this.calculedMenuWidth,
        maxWidth: this.calculedMaxWidth,
        top: this.calculedTop,
        left: this.calculedLeft,
        transformOrigin: this.detectedOrigin,
        zIndex: this.zIndex || this.activeZIndex
      };
    },
    calculedMenuMaxHeight: function calculedMenuMaxHeight() {
      return convertToUnit(this.maxHeight);
    },
    calculedMaxWidth: function calculedMaxWidth() {
      return convertToUnit(this.maxWidth);
    },
    calculedMenuWidth: function calculedMenuWidth() {
      if (this.minWidth) {
        return convertToUnit(this.minWidth);
      }
      var minWidth = Math.min(this.dimensions.activator.width, Math.max(this.pageWidth - 24, 0));
      var isMaxWidthUnitless = parseInt(this.calculedMaxWidth) === this.calculedMaxWidth * 1;
      var maxWidth = isMaxWidthUnitless ? this.calculedMaxWidth : parseInt((this.calculedMaxWidth || '').split('px')[0]);
      var calculedMaxWidth = maxWidth || minWidth;
      return convertToUnit(Math.min(calculedMaxWidth, minWidth));
    },
    calculedLeft: function calculedLeft() {
      var menuWidth = Math.max(this.dimensions.content.width, parseFloat(this.calculedMenuWidth));
      return this.calcLeft(menuWidth) || '0';
    },
    calculedTop: function calculedTop() {
      return this.calcTop() || '0';
    },
    detectedOrigin: function detectedOrigin() {
      return this.detectOrigin(this.calculedLeft, this.calculedTop);
    }
  },
  mounted: function mounted() {
    this.isActive && this.callActivate();
  },
  methods: {
    activate: function activate() {
      var _this = this;
      this.updateDimensions();
      requestAnimationFrame(function () {
        _this.startTransition().then(function () {
          _this.$emit('transitionEnd');
        });
      });
    },
    callDeactivate: function callDeactivate() {
      this.isContentActive = false;
    },
    onResize: function onResize() {
      if (!this.isActive) { return; }
      this.$refs.content.offsetWidth;
      this.updateDimensions();
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(this.updateDimensions, 100);
    },
    genTransition: function genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genContent()]);
    },
    genContent: function genContent() {
      var options = {
        attrs: {
          role: this.$attrs.role || 'menu'
        },
        staticClass: 'vd-menu__content',
        class: _objectSpread$1(_objectSpread$1({}, this.contentClass && defineProperty({}, this.contentClass, true)), {}, {
          'vd-menu__content--active': this.isActive,
          'vd-menu__content--fixed': this.activatorFixed,
          'vd-menu__content--bottomsheet': this.bottomSheet
        }),
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content',
        on: {
          click: function click(event) {
            return event.stopPropagation();
          }
        }
      };
      return this.$createElement('div', options, [this.hasContent && this.getContentSlot()]);
    }
  },
  render: function render(h) {
    var _this2 = this;
    return h('div', {
      staticClass: 'vd-menu',
      class: {
        'menu--attached': this.isAttached
      },
      directives: [{
        arg: '500',
        name: 'resize',
        value: this.onResize
      }]
    }, [!this.activator && this.genActivator(), this.showLazyContent(function () {
      return [_this2.genTransition()];
    })]);
  }
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$2(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function isCssColor(color) {
  return Boolean(color) && Boolean(color.match(/^(#|(rgb|hsl)a?\()/));
}
var colorable = {
  props: {
    color: {
      type: String
    }
  },
  methods: {
    setBackgroundColor: function setBackgroundColor(color, data) {
      if (!isCssColor(color)) { return data; }
      if (data) {
        return _objectSpread$2(_objectSpread$2({}, data), {}, {
          style: _objectSpread$2(_objectSpread$2({}, data.style), {}, {
            'background-color': "".concat(color),
            'border-color': "".concat(color)
          })
        });
      }
      return {
        'background-color': "".concat(color),
        'border-color': "".concat(color)
      };
    },
    setTextColor: function setTextColor(color, data) {
      if (!isCssColor(color)) { return data; }
      if (data) {
        return _objectSpread$2(_objectSpread$2({}, data), {}, {
          style: _objectSpread$2(_objectSpread$2({}, data.style), {}, {
            color: "".concat(color)
          })
        });
      }
      return {
        'color': "".concat(color)
      };
    }
  }
};

var ICONS = {
  close: {
    path: 'M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z',
    viewBox: '0 0 320 512'
  },
  calendarAlt: {
    path: 'M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z',
    viewBox: '0 0 448 512'
  },
  chevronLeft: {
    path: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
    viewBox: '0 0 24 24'
  },
  chevronRight: {
    path: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
    viewBox: '0 0 24 24'
  }
};

function mixins() {
  var arguments$1 = arguments;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments$1[_key];
  }
  return Vue.extend({
    mixins: args
  });
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$3(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var baseMixins = mixins(colorable);
var VDIcon = baseMixins.extend({
  name: 'VDIcon',
  inheritAttrs: false,
  props: {
    size: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasClickListener: function hasClickListener() {
      return Boolean(this.$listeners.click);
    }
  },
  methods: {
    getIconName: function getIconName() {
      if (!this.$slots.default) { return ''; }
      return this.$slots.default[0].text && this.$slots.default[0].text.trim();
    },
    getIcon: function getIcon() {
      var iconName = this.getIconName();
      return ICONS[iconName] || iconName;
    },
    getDefaultData: function getDefaultData() {
      return {
        staticClass: 'vd-icon',
        class: {
          'vd-icon--disabled': this.disabled,
          'vd-icon--link': this.hasClickListener
        },
        attrs: _objectSpread$3({
          'aria-hidden': !this.hasClickListener,
          disabled: this.hasClickListener && this.disabled,
          type: this.hasClickListener ? 'button' : undefined
        }, this.$attrs),
        on: this.$listeners
      };
    },
    renderSvgIcon: function renderSvgIcon(icon, h) {
      var tag = this.hasClickListener ? 'button' : 'span';
      var fontSize = convertToUnit(this.size);
      var wrapperData = _objectSpread$3(_objectSpread$3({}, this.getDefaultData()), {}, {
        style: _objectSpread$3({}, fontSize && {
          fontSize: fontSize,
          height: fontSize,
          width: fontSize
        })
      });
      var svgData = {
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: icon.viewBox,
          height: this.size || 16,
          width: this.size || 16,
          role: 'img',
          'aria-hidden': true,
          'data-icon': this.getIconName()
        }
      };
      return h(tag, this.setTextColor(this.color, wrapperData), [h('svg', svgData, [h('path', {
        attrs: {
          fill: 'currentColor',
          d: icon.path
        }
      })])]);
    }
  },
  render: function render(h) {
    var icon = this.getIcon();
    return this.renderSvgIcon(icon, h);
  }
});

var baseMixins$1 = mixins(colorable);
var VDPickerCustomInput = baseMixins$1.extend({
  name: 'VDPickerCustomInput',
  inject: ['VDPicker'],
  props: {
    clearable: {
      type: Boolean
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true
    },
    color: {
      type: String
    },
    date: {
      type: [Object, Date, String]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String
    },
    isDateDefined: {
      type: Boolean,
      default: false
    },
    isMenuActive: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    noCalendarIcon: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    tabindex: {
      type: [String, Number]
    }
  },
  computed: {
    classes: function classes() {
      return {
        'vd-picker__input--disabled': this.disabled,
        'vd-picker__input--is-active': this.isMenuActive,
        'vd-picker__input--no-date': !this.isDateDefined
      };
    },
    computedColor: function computedColor() {
      if (this.disabled) { return ''; }
      return this.isMenuActive ? this.color : '';
    },
    isDirty: function isDirty() {
      return this.isDateDefined;
    }
  },
  methods: {
    onKeyDown: function onKeyDown(event) {
      this.$emit('keydown', event);
    },
    clearableCallback: function clearableCallback() {
      this.$emit('clearDate');
    },
    genCalendarIcon: function genCalendarIcon() {
      var children = [];
      if (this.VDPicker.$slots['input-icon']) {
        children.push(this.VDPicker.$slots['input-icon']);
      } else {
        children.push(this.$createElement(VDIcon, {
          props: {
            disabled: this.disabled
          }
        }, ['calendarAlt']));
      }
      var iconWrapper = this.$createElement('div', {
        staticClass: 'vd-picker__input-icon__wrapper'
      }, children);
      return this.$createElement('div', {
        staticClass: 'vd-picker__input-icon'
      }, [iconWrapper]);
    },
    genInput: function genInput() {
      return this.$createElement('input', {
        attrs: {
          id: this.id,
          name: this.name,
          disabled: this.disabled,
          'aria-disabled': this.disabled,
          placeholder: this.placeholder,
          tabindex: this.tabindex,
          role: 'text',
          type: 'text',
          readonly: true,
          'aria-readonly': true
        },
        domProps: {
          value: this.date
        },
        on: {
          keydown: this.onKeyDown
        },
        ref: 'input'
      });
    },
    genClearIcon: function genClearIcon() {
      var _this = this;
      var iconName = this.isDirty ? 'close' : '';
      var data = {
        attrs: {
          'aria-label': 'clearable icon',
          color: this.color,
          disabled: this.disabled
        },
        on: {
          click: function click(event) {
            event.preventDefault();
            event.stopPropagation();
            _this.clearableCallback();
          },
          mouseup: function mouseup(event) {
            event.preventDefault();
            event.stopPropagation();
          }
        }
      };
      var iconElement = this.$createElement('div', {
        staticClass: 'vd-picker__input-clear__icon'
      }, [this.$createElement(VDIcon, data, iconName)]);
      return this.$createElement('div', {
        staticClass: "vd-picker__input-clear"
      }, [iconElement]);
    }
  },
  render: function render(h) {
    return h('div', this.setTextColor(this.computedColor, {
      staticClass: 'vd-picker__input',
      class: this.classes
    }), [!this.noCalendarIcon && this.genCalendarIcon(), this.genInput(), this.clearable && this.genClearIcon()]);
  }
});

var baseMixins$2 = mixins(colorable, toggleable);
var VDOverlay = baseMixins$2.extend({
  name: 'VDOverlay',
  props: {
    absolute: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'rgba(93, 106, 137)'
    },
    opacity: {
      type: [Number, String],
      default: 0.84
    },
    value: {
      default: true
    },
    zIndex: {
      type: [Number, String],
      default: undefined
    }
  },
  computed: {
    classes: function classes() {
      return {
        'vd-overlay--absolute': this.absolute,
        'vd-overlay--active': this.isActive
      };
    },
    styles: function styles() {
      return {
        zIndex: this.zIndex
      };
    },
    computedOpacity: function computedOpacity() {
      return Number(this.isActive ? this.opacity : 0);
    },
    overlayInner: function overlayInner() {
      var data = this.setBackgroundColor(this.color, {
        staticClass: 'vd-overlay__inner',
        style: {
          opacity: this.computedOpacity
        }
      });
      return this.$createElement('div', data);
    }
  },
  methods: {
    genContent: function genContent() {
      return this.$createElement('div', {
        staticClass: 'vd-overlay__content'
      }, this.$slots.default);
    }
  },
  render: function render(h) {
    var children = [this.overlayInner];
    if (this.isActive) { children.push(this.genContent()); }
    return h('div', {
      staticClass: 'vd-overlay',
      class: this.classes,
      style: this.styles
    }, children);
  }
});

var VDOverlayConstructor = Vue.extend(VDOverlay);
var Overlayable = Vue.extend({
  name: 'Overlayable',
  props: {
    overlayColor: {
      type: String,
      default: undefined
    },
    overlayOpacity: {
      type: [Number, String],
      default: undefined
    }
  },
  data: function data() {
    return {
      overlay: undefined
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.removeOverlay();
  },
  methods: {
    scrollListener: function scrollListener(event) {
      if (event.type === 'keydown') {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName) || event.target.isContentEditable) { return; }
        var up = [KEYCODES.up, KEYCODES.pageup];
        var down = [KEYCODES.down, KEYCODES.pagedown];
        if (up.includes(event.keyCode)) {
          event.deltaY = -1;
        } else if (down.includes(event.keyCode)) {
          event.deltaY = 1;
        } else {
          return;
        }
      }
      if (event.target === this.overlay || event.type !== 'keydown' && event.target === document.body || this.checkPath(event)) { event.preventDefault(); }
    },
    hasScrollbar: function hasScrollbar(el) {
      if (!el || el.nodeType !== Node.ELEMENT_NODE) { return false; }
      var style = window.getComputedStyle(el);
      return ['auto', 'scroll'].includes(style.overflowY) && el.scrollHeight > el.clientHeight;
    },
    shouldScroll: function shouldScroll(el, delta) {
      if (el.scrollTop === 0 && delta < 0) { return true; }
      return el.scrollTop + el.clientHeight === el.scrollHeight && delta > 0;
    },
    isInside: function isInside(el, parent) {
      if (el === parent) {
        return true;
      } else if (el === null || el === document.body) {
        return false;
      } else {
        return this.isInside(el.parentNode, parent);
      }
    },
    checkPath: function checkPath(event) {
      var path = event.path || this.composedPath(event);
      var delta = event.deltaY;
      if (event.type === 'keydown' && path[0] === document.body) {
        var dialog = this.$refs.dialog;
        var selected = window.getSelection() && window.getSelection().anchorNode;
        if (dialog && this.hasScrollbar(dialog) && this.isInside(selected, dialog)) {
          return this.shouldScroll(dialog, delta);
        }
        return true;
      }
      for (var index = 0; index < path.length; index++) {
        var el = path[index];
        if (el === document) { return true; }
        if (el === document.documentElement) { return true; }
        if (el === this.$refs.content) { return true; }
        if (this.hasScrollbar(el)) { return this.shouldScroll(el, delta); }
      }
      return true;
    },
    composedPath: function composedPath(event) {
      if (event.composedPath) { return event.composedPath(); }
      var path = [];
      var el = event.target;
      while (el) {
        path.push(el);
        if (el.tagName === 'HTML') {
          path.push(document);
          path.push(window);
          return path;
        }
        el = el.parentElement;
      }
      return path;
    },
    hideScroll: function hideScroll() {
      window.addEventListener('wheel', this.scrollListener, {
        passive: false
      });
      window.addEventListener('keydown', this.scrollListener);
    },
    showScroll: function showScroll() {
      document.documentElement.classList.remove('overflow-y-hidden');
      window.removeEventListener('wheel', this.scrollListener);
      window.removeEventListener('keydown', this.scrollListener);
    },
    createOverlay: function createOverlay() {
      var overlay = new VDOverlayConstructor({
        propsData: {
          absolute: this.absolute,
          value: false,
          color: this.overlayColor,
          opacity: this.overlayOpacity
        }
      });
      overlay.$mount();
      var defaultTarget = document.querySelector('#app') || document.querySelector('body');
      var parent = this.absolute ? this.$el.parentNode : defaultTarget;
      parent && parent.insertBefore(overlay.$el, parent.firstChild);
      this.overlay = overlay;
    },
    genOverlay: function genOverlay() {
      var _this = this;
      this.hideScroll();
      if (!this.overlay) { this.createOverlay(); }
      requestAnimationFrame(function () {
        if (!_this.overlay) { return; }
        if (_this.activeZIndex !== undefined) {
          _this.overlay.zIndex = String(_this.activeZIndex - 1);
        } else if (_this.$el) {
          _this.overlay.zIndex = getZIndex(_this.$el);
        }
        _this.overlay.value = true;
      });
      return true;
    },
    removeOverlay: function removeOverlay() {
      var _this2 = this;
      var showScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.overlay) {
        addOnceEventListener(this.overlay.$el, 'transitionend', function () {
          if (!_this2.overlay || !_this2.overlay.$el || !_this2.overlay.$el.parentNode || _this2.overlay.value) { return; }
          _this2.overlay.$el.parentNode.removeChild(_this2.overlay.$el);
          _this2.overlay.$destroy();
          _this2.overlay = null;
        });
        this.overlay.value = false;
      }
      showScroll && this.showScroll();
    }
  }
});

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
var slicedToArray = _slicedToArray;

var advancedFormat = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e,t,r){var n=t.prototype,o=n.format;r.en.ordinal=function(e){var t=["th","st","nd","rd"],r=e%100;return "["+e+(t[(r-20)%10]||t[r]||t[0])+"]"},n.format=function(e){var t=this,r=this.$locale(),n=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|gggg|Do|X|x|k{1,2}|S/g,function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return n.s(t.week(),"w"===e?1:2,"0");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();default:return e}});return o.bind(this)(a)};}});
});

var isSameOrAfter = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)};}});
});

var isSameOrBefore = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)};}});
});

var isToday = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t,e,o){e.prototype.isToday=function(){var t=o();return this.format("YYYY-MM-DD")===t.format("YYYY-MM-DD")};}});
});

var quarterOfYear = createCommonjsModule(function (module, exports) {
!function(t,n){module.exports=n();}(commonjsGlobal,function(){var t="month",n="quarter";return function(r,i){var e=i.prototype;e.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var u=e.add;e.add=function(r,i){return r=Number(r),this.$utils().p(i)===n?this.add(3*r,t):u.bind(this)(r,i)};var s=e.startOf;e.startOf=function(r,i){var e=this.$utils(),u=!!e.u(i)||i;if(e.p(r)===n){var a=this.quarter()-1;return u?this.month(3*a).startOf(t).startOf("day"):this.month(3*a+2).endOf(t).endOf("day")}return s.bind(this)(r,i)};}});
});

var utc = createCommonjsModule(function (module, exports) {
!function(t,i){module.exports=i();}(commonjsGlobal,function(){return function(t,i,e){var s=(new Date).getTimezoneOffset(),n=i.prototype;e.utc=function(t,e){return new i({date:t,utc:!0,format:e})},n.utc=function(){return e(this.toDate(),{locale:this.$L,utc:!0})},n.local=function(){return e(this.toDate(),{locale:this.$L,utc:!1})};var u=n.parse;n.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),u.call(this,t);};var o=n.init;n.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds();}else { o.call(this); }};var f=n.utcOffset;n.utcOffset=function(t){var i=this.$utils().u;if(i(t)){ return this.$u?0:i(this.$offset)?f.call(this):this.$offset; }var e,n=Math.abs(t)<=16?60*t:t;return 0!==t?(e=this.local().add(n+s,"minute")).$offset=n:e=this.utc(),e};var r=n.format;n.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return r.call(this,i)},n.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+s;return this.$d.valueOf()-6e4*t},n.isUTC=function(){return !!this.$u},n.toISOString=function(){return this.toDate().toISOString()},n.toString=function(){return this.toDate().toUTCString()};}});
});

var weekday = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e,t){t.prototype.weekday=function(e){var t=this.$locale().weekStart||0,n=this.$W,i=(n<t?n+7:n)-t;return this.$utils().u(e)?i:this.subtract(i,"day").add(e,"day")};}});
});

var weekOfYear = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){var e="week",t="year";return function(i,n){var r=n.prototype;r.week=function(i){if(void 0===i&&(i=null),null!==i){ return this.add(7*(i-this.week()),"day"); }var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var r=this.startOf(t).add(1,t).date(n),f=this.endOf(e);if(r.isBefore(f)){ return 1 }}var s=this.startOf(t).date(n).startOf(e).subtract(1,"millisecond"),a=this.diff(s,e,!0);return a<0?this.startOf("week").week():Math.ceil(a)},r.weeks=function(e){return void 0===e&&(e=null),this.week(e)};}});
});

dayjs.extend(advancedFormat);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isToday);
dayjs.extend(quarterOfYear);
dayjs.extend(utc);
dayjs.extend(weekday);
dayjs.extend(weekOfYear);

function getDefaultInputFormat() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'date';
  return DEFAULT_INPUT_DATE_FORMAT[type];
}
function getDefaultHeaderFormat() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'date';
  return DEFAULT_HEADER_DATE_FORMAT[type];
}
function getDefaultOutputFormat() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'date';
  return DEFAULT_OUTPUT_DATE_FORMAT[type];
}
function replaceRegexWithDates(_ref, split) {
  var regexText = _ref.regexText,
      startDate = _ref.startDate,
      endDate = _ref.endDate;
  var text = regexText.replace(DATE_HEADER_REGEX, "".concat(startDate).concat(split ? '|' : '')).replace(DATE_HEADER_REGEX, "".concat(endDate).concat(split ? '|' : ''));
  if (!split) { return text; }
  return text.split('|');
}

function convertQuarterToMonth(quarter) {
  return quarter * 3;
}

function initDate(date, _ref) {
  var range = _ref.range,
      locale = _ref.locale,
      type = _ref.type;
  if (range) {
    return {
      start: date && date.start != null ? generateDate({
        date: date.start,
        locale: locale
      }) : undefined,
      end: date && date.end != null ? generateDate({
        date: date.end,
        locale: locale
      }) : undefined
    };
  }
  return date != null ? generateDate({
    date: date,
    locale: locale,
    type: type
  }) : undefined;
}
function generateDates(_ref2) {
  var headerFormat = _ref2.headerFormat,
      locale = _ref2.locale,
      maxDate = _ref2.maxDate,
      minDate = _ref2.minDate,
      mutableDate = _ref2.mutableDate,
      range = _ref2.range,
      rangeHeaderText = _ref2.rangeHeaderText;
  return {
    formattedHeaderYear: generateDateFormatted({
      date: mutableDate,
      locale: locale,
      format: 'YYYY'
    }),
    formattedHeaderDate: genFormattedHeaderDate({
      date: mutableDate,
      headerFormat: headerFormat,
      locale: locale,
      range: range,
      rangeHeaderText: rangeHeaderText
    }),
    minDate: minDate,
    maxDate: maxDate,
    minMonth: genMinMaxFormatted({
      date: minDate,
      type: 'month',
      locale: locale
    }),
    maxMonth: genMinMaxFormatted({
      date: maxDate,
      type: 'month',
      locale: locale
    }),
    minYear: genMinMaxFormatted({
      date: minDate,
      type: 'year',
      locale: locale
    }),
    maxYear: genMinMaxFormatted({
      date: maxDate,
      type: 'year',
      locale: locale
    })
  };
}
function transformDateForModel(date, format, range) {
  if (range) {
    return {
      start: date.start.format(format),
      end: date.end && date.end.format(format)
    };
  }
  return date.format(format);
}
function isDateAllowed(_ref3) {
  var date = _ref3.date,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? 'date' : _ref3$type,
      allowedFn = _ref3.allowedFn;
  var formattedDate = date.format(getDefaultOutputFormat(type));
  return (!allowedFn || allowedFn(formattedDate)) && (!min || areSameDates(formattedDate, min, type) || isAfterDate(formattedDate, min, type)) && (!max || areSameDates(formattedDate, max, type) || isBeforeDate(formattedDate, max, type));
}
function isCurrent(_ref4) {
  var date = _ref4.date,
      _ref4$type = _ref4.type,
      type = _ref4$type === void 0 ? 'date' : _ref4$type,
      locale = _ref4.locale;
  var formattedDate = generateDateFormatted({
    date: date,
    locale: locale,
    format: getDefaultOutputFormat(type)
  });
  var todaysDateFormatted = generateDateFormatted({
    date: undefined,
    locale: locale,
    format: getDefaultOutputFormat(type)
  });
  return areSameDates(formattedDate, todaysDateFormatted, type === 'quarter' ? 'month' : type);
}
function areSameDates(date, dateSelected) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'date';
  return dayjs(date, getDefaultOutputFormat(type)).isSame(dayjs(dateSelected, getDefaultOutputFormat(type)), type);
}
function isBeforeDate(date, beforeDate) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
  if (type === 'year') {
    return Boolean(beforeDate) && date < dayjs(beforeDate, 'YYYY-MM-DD').get(type);
  }
  var selectedDate = dayjs.isDayjs(date) ? date : dayjs(date).startOf('day');
  return Boolean(beforeDate) && selectedDate.isBefore(dayjs(beforeDate).startOf('day'), type);
}
function isAfterDate(date, afterDate) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
  if (type === 'year') {
    return Boolean(afterDate) && date > dayjs(afterDate, 'YYYY-MM-DD').get(type);
  }
  var selectedDate = dayjs.isDayjs(date) ? date : dayjs(date).startOf('day');
  return Boolean(afterDate) && selectedDate.isAfter(dayjs(afterDate).startOf('day'), type);
}
function isBetweenDates(date, startDate, maxDate) {
  return isAfterDate(date, startDate) && isBeforeDate(date, maxDate);
}
function isDateAfter(newDate, oldDate) {
  return dayjs(newDate).isAfter(dayjs(oldDate));
}
function generateDate(_ref5) {
  var date = _ref5.date,
      _ref5$locale = _ref5.locale,
      locale = _ref5$locale === void 0 ? {
    lang: localeObject
  } : _ref5$locale,
      _ref5$type = _ref5.type,
      type = _ref5$type === void 0 ? 'date' : _ref5$type;
  if (type === 'year') { return dayjs(date).utc(); }
  return dayjs(date).locale(locale.lang);
}
function generateDateFormatted(_ref6) {
  var date = _ref6.date,
      locale = _ref6.locale,
      format = _ref6.format;
  return generateDate({
    date: date,
    locale: locale
  }).format(format);
}
function generateDateWithYearAndMonth(_ref7) {
  var year = _ref7.year,
      month = _ref7.month,
      locale = _ref7.locale;
  return generateDate({
    locale: locale
  }).year(year).month(month).startOf('month');
}
function generateMonthAndYear(value, pickerDate, mode) {
  if (mode === 'year') { return {
    year: value,
    month: pickerDate.month
  }; }
  if (mode === 'quarter') { return {
    year: pickerDate.year,
    month: convertQuarterToMonth(value)
  }; }
  return {
    year: pickerDate.year,
    month: value
  };
}
function generateDateRange(_ref8) {
  var startDate = _ref8.startDate,
      endDate = _ref8.endDate,
      locale = _ref8.locale,
      _ref8$interval = _ref8.interval,
      interval = _ref8$interval === void 0 ? 'day' : _ref8$interval;
  var start = generateDate({
    date: startDate,
    locale: locale
  });
  var end = generateDate({
    date: endDate,
    locale: locale
  });
  var diffBetweenDates = end.diff(start, interval);
  return toConsumableArray(Array(diffBetweenDates + 1).keys()).map(function (i) {
    return start.add(i, interval);
  });
}
function generateDateRangeWithoutDisabled(_ref9) {
  var _ref9$dates = _ref9.dates,
      dates = _ref9$dates === void 0 ? {} : _ref9$dates,
      minDate = _ref9.minDate,
      maxDate = _ref9.maxDate,
      locale = _ref9.locale;
  var start = dates.start,
      end = dates.end;
  var validMinDate = minDate || generateDate({
    locale: locale
  }).year(AVAILABLE_YEARS.min);
  var validMaxDate = maxDate || generateDate({
    locale: locale
  }).year(AVAILABLE_YEARS.max);
  return generateDateRange({
    startDate: start,
    endDate: end,
    locale: locale
  }).filter(function (date) {
    return date.isSameOrAfter(validMinDate, 'day') && date.isSameOrBefore(dayjs(validMaxDate, 'day'));
  });
}
function genFormattedInputDate(_ref10) {
  var inputFormat = _ref10.inputFormat,
      internalDate = _ref10.internalDate,
      isDateDefined = _ref10.isDateDefined,
      locale = _ref10.locale,
      range = _ref10.range,
      rangeInputText = _ref10.rangeInputText,
      type = _ref10.type;
  if (!isDateDefined) { return; }
  if (range && rangeInputText) {
    var _getRangeDatesFormatt = getRangeDatesFormatted({
      dates: internalDate,
      locale: locale,
      format: inputFormat
    }).split(' ~ '),
        _getRangeDatesFormatt2 = slicedToArray(_getRangeDatesFormatt, 2),
        startDate = _getRangeDatesFormatt2[0],
        endDate = _getRangeDatesFormatt2[1];
    return replaceRegexWithDates({
      regexText: rangeInputText,
      startDate: startDate,
      endDate: endDate
    });
  }
  var currentMonth = internalDate.month();
  var newMonth = type === 'quarter' ? convertQuarterToMonth(currentMonth) : currentMonth;
  return generateDateFormatted({
    date: internalDate.set('month', newMonth),
    locale: locale,
    format: inputFormat
  });
}
function genFormattedHeaderDate(_ref11) {
  var headerFormat = _ref11.headerFormat,
      locale = _ref11.locale,
      date = _ref11.date,
      range = _ref11.range,
      rangeHeaderText = _ref11.rangeHeaderText;
  if (range && rangeHeaderText) {
    var _getRangeDatesFormatt3 = getRangeDatesFormatted({
      dates: date,
      locale: locale,
      format: headerFormat
    }).split(' ~ '),
        _getRangeDatesFormatt4 = slicedToArray(_getRangeDatesFormatt3, 2),
        startDate = _getRangeDatesFormatt4[0],
        endDate = _getRangeDatesFormatt4[1];
    var _replaceRegexWithDate = replaceRegexWithDates({
      regexText: rangeHeaderText,
      startDate: startDate,
      endDate: endDate
    }, true),
        _replaceRegexWithDate2 = slicedToArray(_replaceRegexWithDate, 2),
        fromText = _replaceRegexWithDate2[0],
        toText = _replaceRegexWithDate2[1];
    return [fromText.trim(), toText.trim()];
  }
  if (!date) { return '--'; }
  return generateDateFormatted({
    date: date,
    locale: locale,
    format: headerFormat
  });
}
function genMinMaxFormatted(_ref12) {
  var date = _ref12.date,
      type = _ref12.type,
      locale = _ref12.locale;
  if (!date) { return; }
  return generateDateFormatted({
    date: date,
    locale: locale,
    format: getDefaultOutputFormat(type)
  });
}
function getRangeDatesFormatted(_ref13) {
  var _ref13$dates = _ref13.dates,
      dates = _ref13$dates === void 0 ? {} : _ref13$dates,
      locale = _ref13.locale,
      format = _ref13.format;
  var start = dates.start,
      end = dates.end;
  if (!start && !end) { return "__ ~ __"; }
  if (!start && end) { return "__ ~ ".concat(generateDate({
    date: end,
    locale: locale
  }).startOf('day').format(format)); }
  if (start && !end) { return "".concat(generateDate({
    date: start,
    locale: locale
  }).startOf('day').format(format), " ~ __"); }
  return "".concat(generateDate({
    date: start,
    locale: locale
  }).startOf('day').format(format), " ~ ").concat(generateDate({
    date: end,
    locale: locale
  }).startOf('day').format(format));
}

var baseMixins$3 = mixins(colorable);
var VDPickerControls = baseMixins$3.extend({
  name: 'VDPickerControls',
  props: {
    pickerDate: {
      type: Object,
      required: true
    },
    transitionName: {
      type: String
    },
    color: {
      type: String
    },
    mode: {
      type: String,
      default: 'date'
    },
    min: {
      type: [String, Number, Date]
    },
    max: {
      type: [String, Number, Date]
    }
  },
  computed: {
    monthFormatted: function monthFormatted() {
      return this.pickerDate.getMonthFormatted();
    },
    yearFormatted: function yearFormatted() {
      return this.pickerDate.getYearFormatted();
    },
    isPreviousDateDisabled: function isPreviousDateDisabled() {
      var compareYears = ['month', 'quarter'].includes(this.mode);
      var previousYear = parseInt(this.yearFormatted, 10) - 1;
      var previousDate = compareYears ? previousYear : "".concat(this.yearFormatted, "-").concat(this.pickerDate.month);
      return isBeforeDate(previousDate, this.min, compareYears ? 'year' : 'month');
    },
    isNextDateDisabled: function isNextDateDisabled() {
      var compareYears = ['month', 'quarter'].includes(this.mode);
      var nextYear = parseInt(this.yearFormatted, 10) + 1;
      var nextDate = compareYears ? nextYear : "".concat(this.yearFormatted, "-").concat(this.pickerDate.month + 2);
      return isAfterDate(nextDate, this.max, compareYears ? 'year' : 'month');
    }
  },
  methods: {
    onNavigationClick: function onNavigationClick(direction) {
      this.$emit('on-navigation-click', direction);
    },
    genPrevButton: function genPrevButton() {
      var _this = this;
      var icon = this.$createElement(VDIcon, 'chevronLeft');
      return this.$createElement('button', {
        staticClass: 'vd-picker__controls-prev',
        attrs: {
          disabled: this.isPreviousDateDisabled,
          type: 'button'
        },
        on: {
          click: function click() {
            return _this.onNavigationClick('prev');
          }
        }
      }, [icon]);
    },
    genNextButton: function genNextButton() {
      var _this2 = this;
      var icon = this.$createElement(VDIcon, 'chevronRight');
      return this.$createElement('button', {
        staticClass: 'vd-picker__controls-next',
        attrs: {
          disabled: this.isNextDateDisabled,
          type: 'button'
        },
        on: {
          click: function click() {
            return _this2.onNavigationClick('next');
          }
        }
      }, [icon]);
    },
    genSelectors: function genSelectors() {
      return this.$createElement('div', {
        staticClass: 'vd-picker__controls-wrapper'
      }, [this.mode === 'date' && this.genMonthSelector(), this.genYearSelector()]);
    },
    genChildrenSelectors: function genChildrenSelectors(_ref) {
      var _this3 = this;
      var value = _ref.value,
          key = _ref.key,
          type = _ref.type;
      return this.$createElement('div', this.setTextColor(this.color, {
        key: key,
        staticClass: 'vd-picker__controls-label'
      }), [this.$createElement('button', {
        attrs: {
          type: 'button'
        },
        on: {
          click: function click() {
            return _this3.$emit('update-mode', type);
          }
        }
      }, [value])]);
    },
    genMonthSelector: function genMonthSelector() {
      var _this4 = this;
      return this.$createElement('transition-group', {
        staticClass: 'vd-picker__controls-month',
        props: {
          name: this.transitionName,
          tag: 'span'
        }
      }, [this.pickerDate.month].map(function (key) {
        return _this4.genChildrenSelectors({
          value: _this4.monthFormatted,
          key: key,
          type: 'month'
        });
      }));
    },
    genYearSelector: function genYearSelector() {
      var _this5 = this;
      return this.$createElement('transition-group', {
        staticClass: 'vd-picker__controls-year',
        class: {
          'vd-picker__controls-year--center': ['month', 'quarter'].includes(this.mode)
        },
        props: {
          name: this.transitionName,
          tag: 'span'
        }
      }, [this.pickerDate.year].map(function (key) {
        return _this5.genChildrenSelectors({
          value: _this5.yearFormatted,
          key: key,
          type: 'year'
        });
      }));
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vd-picker__controls'
    }, [this.genPrevButton(), this.genSelectors(), this.genNextButton()]);
  }
});

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$4(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var baseMixins$4 = mixins(colorable);
var VDPickerHeader = baseMixins$4.extend({
  name: 'VDPickerHeader',
  props: {
    formattedHeaderYear: {
      type: String
    },
    formattedHeaderDate: {
      type: [Array, String]
    },
    color: {
      type: String
    },
    mode: {
      type: String
    },
    mutableDate: {
      type: [String, Object]
    },
    range: {
      type: Boolean
    },
    transitionName: {
      type: String
    },
    type: {
      tpye: Boolean
    }
  },
  computed: {
    classes: function classes() {
      return defineProperty({
        'vd-picker-header--range': this.range
      }, "vd-picker-header--".concat(this.type), this.type);
    },
    year: function year() {
      if (!this.mutableDate) { return '-'; }
      return this.formattedHeaderYear;
    },
    dateFormatted: function dateFormatted() {
      return this.formattedHeaderDate;
    },
    isDateVisible: function isDateVisible() {
      return !this.range && this.type !== 'year';
    }
  },
  methods: {
    genYear: function genYear() {
      var _this = this;
      var children = this.$createElement('span', {
        staticClass: 'vd-picker-header__year-button',
        on: {
          click: function click() {
            return _this.$emit('update-mode', 'year');
          }
        }
      }, [this.year]);
      var data = {
        staticClass: 'vd-picker-header__year',
        class: {
          'vd-picker-header__year--active': this.mode === 'year'
        }
      };
      return this.$createElement('div', data, [children]);
    },
    genDate: function genDate() {
      var _this2 = this;
      var transitionGroup = this.genTransitionGroup({
        date: this.dateFormatted,
        isActive: this.mode !== 'year',
        onClick: function onClick() {
          return _this2.$emit('update-mode', 'date');
        }
      });
      return this.$createElement('div', {
        staticClass: 'vd-picker-header__wrap'
      }, [transitionGroup]);
    },
    genRangeDate: function genRangeDate() {
      var transitionGroupStart = this.genTransitionGroup({
        date: this.dateFormatted[0],
        isActive: Boolean(this.mutableDate.start)
      });
      var transitionGroupEnd = this.genTransitionGroup({
        date: this.dateFormatted[1],
        isActive: Boolean(this.mutableDate.end)
      });
      return this.$createElement('div', {
        staticClass: 'vd-picker-header__wrap'
      }, [transitionGroupStart, transitionGroupEnd]);
    },
    genTransitionGroup: function genTransitionGroup(_ref2) {
      var _this3 = this;
      var date = _ref2.date,
          isActive = _ref2.isActive,
          onClick = _ref2.onClick;
      var children = function children(date) {
        return _this3.$createElement('span', {
          staticClass: 'vd-picker-header__wrap-button',
          key: date,
          on: _objectSpread$4({}, onClick && {
            click: onClick
          })
        }, [date]);
      };
      return this.$createElement('transition-group', {
        staticClass: 'vd-picker-header__date',
        class: {
          'vd-picker-header__date--active': isActive
        },
        props: {
          name: this.transitionName,
          tag: 'div'
        }
      }, [date].map(function (key) {
        return children(key);
      }));
    }
  },
  render: function render(h) {
    return h('div', this.setBackgroundColor(this.color, {
      staticClass: 'vd-picker-header',
      class: this.classes
    }), [!this.range && this.genYear(), this.isDateVisible && this.genDate(), this.range && this.genRangeDate()]);
  }
});

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$5(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var baseMixins$5 = mixins(colorable, Localable);
var VDPickerPresets = baseMixins$5.extend({
  name: 'VDPickerPresets',
  props: {
    rangePresets: {
      type: Array
    },
    mutableDate: {
      type: Object
    },
    minDate: {
      type: [String, Number, Date]
    },
    maxDate: {
      type: [String, Number, Date]
    },
    color: {
      type: String
    }
  },
  computed: {
    presetsFormatted: function presetsFormatted() {
      var _this = this;
      if (!this.rangePresets) { return; }
      return this.rangePresets.map(function (preset) {
        return _objectSpread$5(_objectSpread$5({}, preset), {}, {
          availableDates: generateDateRangeWithoutDisabled({
            dates: preset.dates,
            minDate: _this.minDate,
            maxDate: _this.maxDate,
            locale: _this.currentLocale
          })
        });
      }).splice(0, MAX_PRESETS_NUMBER);
    }
  },
  methods: {
    isPresetSelected: function isPresetSelected() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$availableDates = _ref.availableDates,
          availableDates = _ref$availableDates === void 0 ? [] : _ref$availableDates;
      if (availableDates.length === 0 || !this.mutableDate) { return false; }
      return areSameDates(availableDates[0], this.mutableDate.start) && areSameDates(availableDates[availableDates.length - 1], this.mutableDate.end);
    },
    isPresetValid: function isPresetValid() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$availableDates = _ref2.availableDates,
          availableDates = _ref2$availableDates === void 0 ? [] : _ref2$availableDates;
      if (!this.mutableDate) { return false; }
      return availableDates.length > 0;
    },
    setPresetDates: function setPresetDates(_ref3) {
      var availableDates = _ref3.availableDates;
      if (this.isPresetSelected({
        availableDates: availableDates
      })) { return; }
      this.$emit('update-range', {
        start: availableDates[0],
        end: availableDates[availableDates.length - 1]
      });
    },
    genWrapper: function genWrapper() {
      return this.$createElement('div', {
        staticClass: 'vd-picker-presets__wrapper'
      }, this.presetsFormatted.map(this.genButton));
    },
    genButton: function genButton(preset, key) {
      var _this2 = this;
      var effect = this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'vd-picker-preset__effect'
      }));
      var text = this.$createElement('div', {
        staticClass: 'vd-picker-preset__name',
        domProps: {
          innerHTML: preset.name
        }
      });
      return this.$createElement('button', {
        key: key,
        staticClass: 'vd-picker-preset',
        class: {
          'vd-picker-preset--selected': this.isPresetSelected(preset),
          'vd-picker-preset--disabled': !this.isPresetValid(preset)
        },
        attrs: {
          type: 'button'
        },
        on: {
          click: function click() {
            return _this2.setPresetDates(preset);
          }
        }
      }, [effect, text]);
    }
  },
  render: function render(h) {
    if (!this.presetsFormatted) { return; }
    return h('div', {
      staticClass: 'vd-picker-presets'
    }, [this.genWrapper()]);
  }
});

var handleGesture = function handleGesture(wrapper) {
  var touchstartX = wrapper.touchstartX,
      touchendX = wrapper.touchendX,
      touchstartY = wrapper.touchstartY,
      touchendY = wrapper.touchendY;
  var dirRatio = 0.5;
  var minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function _touchstart(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  wrapper.start && wrapper.start(Object.assign(event, wrapper));
}
function _touchend(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  wrapper.end && wrapper.end(Object.assign(event, wrapper));
  handleGesture(wrapper);
}
function _touchmove(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  wrapper.move && wrapper.move(Object.assign(event, wrapper));
}
function createHandlers(value) {
  var wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: function touchstart(event) {
      return _touchstart(event, wrapper);
    },
    touchend: function touchend(event) {
      return _touchend(event, wrapper);
    },
    touchmove: function touchmove(event) {
      return _touchmove(event, wrapper);
    }
  };
}
function inserted$1(el, binding, vnode) {
  var value = binding.value;
  var target = value.parent ? el.parentElement : el;
  var options = value.options || {
    passive: true
  };
  if (!target) { return; }
  var handlers = createHandlers(binding.value);
  target._touchHandlers = Object(target._touchHandlers);
  target._touchHandlers[vnode.context._uid] = handlers;
  Object.keys(handlers).forEach(function (eventName) {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unbind$2(el, binding, vnode) {
  var target = binding.value.parent ? el.parentElement : el;
  if (!target || !target._touchHandlers) { return; }
  var handlers = target._touchHandlers[vnode.context._uid];
  Object.keys(handlers).forEach(function (eventName) {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[vnode.context._uid];
}
var Touch = {
  inserted: inserted$1,
  unbind: unbind$2
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$6(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var baseMixins$6 = mixins(colorable, Localable);
var VDPickerTableDay = baseMixins$6.extend({
  name: 'VDPickerTableDay',
  inject: ['VDPicker'],
  props: {
    allowedDates: {
      type: Function
    },
    color: {
      type: String
    },
    day: {
      type: Object,
      required: true
    },
    maxDate: {
      type: [String, Number, Date]
    },
    minDate: {
      type: [String, Number, Date]
    },
    mutableDate: {
      type: [String, Object]
    },
    range: {
      type: Boolean
    },
    rangeCurrentHoveredDay: {
      type: String,
      default: undefined
    }
  },
  computed: {
    classes: function classes() {
      return {
        'vd-picker__table-day--selected': this.isSelected && !this.isDisabled,
        'vd-picker__table-day--between': this.range && this.isBetween,
        'vd-picker__table-day--in-range': this.range && this.isInRange,
        'vd-picker__table-day--first': this.range && this.firstInRange,
        'vd-picker__table-day--last': this.range && this.lastInRange && Boolean(this.mutableDate.end),
        'vd-picker__table-day--select-start': this.range && !this.mutableDate.start,
        'vd-picker__table-day--select-end': this.range && this.mutableDate.start && !this.mutableDate.end,
        'vd-picker__table-day--disabled': this.isDisabled
      };
    },
    formattedDay: function formattedDay() {
      return this.day.format('D');
    },
    isCurrent: function isCurrent$1() {
      return isCurrent({
        date: this.day,
        type: 'date',
        locale: this.currentLocale
      });
    },
    isSelected: function isSelected() {
      if (this.range) {
        var date = [].concat(toConsumableArray(this.mutableDate.start ? [this.mutableDate.start.startOf('day').unix()] : []), toConsumableArray(this.mutableDate.end ? [this.mutableDate.end.startOf('day').unix()] : []));
        return date.includes(this.day.unix());
      }
      return this.mutableDate && this.mutableDate.startOf('day').unix() === this.day.unix();
    },
    isBetween: function isBetween() {
      if (!this.mutableDate.start && !this.mutableDate.end) { return false; }
      return isBetweenDates(this.day, this.mutableDate.start, this.mutableDate.end);
    },
    isInRange: function isInRange() {
      if (!this.rangeCurrentHoveredDay) { return false; }
      if (isBeforeDate(this.rangeCurrentHoveredDay, this.mutableDate.end)) {
        return isBetweenDates(this.day, this.rangeCurrentHoveredDay, this.mutableDate.end);
      }
      return isBetweenDates(this.day, this.mutableDate.start, this.rangeCurrentHoveredDay);
    },
    firstInRange: function firstInRange() {
      return this.mutableDate.start && this.mutableDate.start.startOf('day').unix() === this.day.unix();
    },
    lastInRange: function lastInRange() {
      return this.mutableDate.end && this.mutableDate.end.startOf('day').unix() === this.day.unix();
    },
    isDateAllowed: function isDateAllowed$1() {
      return isDateAllowed({
        date: this.day,
        min: this.minDate,
        max: this.maxDate,
        allowedFn: this.allowedDates
      });
    },
    isDisabled: function isDisabled() {
      return !this.isDateAllowed;
    },
    scopedSlotDay: function scopedSlotDay() {
      return getSlot(this.VDPicker, 'day');
    }
  },
  methods: {
    onDayClick: function onDayClick(day) {
      this.$emit('select-day', day);
    },
    genWrapper: function genWrapper() {
      return this.$createElement('div', {
        staticClass: 'vd-picker__table-day__wrapper',
        attrs: {
          'data-date': this.day.format('YYYY-MM-DD')
        }
      }, [this.isCurrent && this.genDayCurrent(), this.genDayEffect(), this.genDayText()]);
    },
    genDayCurrent: function genDayCurrent() {
      return this.$createElement('span', {
        staticClass: 'vd-picker__table-day__current'
      });
    },
    genDayEffect: function genDayEffect() {
      return this.$createElement('span', {
        staticClass: 'vd-picker__table-day__effect'
      });
    },
    genDayText: function genDayText() {
      if (!this.scopedSlotDay) {
        return this.$createElement('span', {
          staticClass: 'vd-picker__table-day__text'
        }, [this.formattedDay]);
      }
      var helpers = {
        formattedDay: this.formattedDay,
        isCurrent: this.isToday,
        isSelected: this.isSelected && !this.isDisabled,
        isBetween: this.range && this.isBetween,
        isInRange: this.range && this.isInRange,
        isFirstRangeDay: this.range && this.firstInRange,
        isLastRangeDay: this.range && this.lastInRange && Boolean(this.mutableDate.end),
        isFirstSelectedDay: this.range && !this.mutableDate.start,
        isLastSelectedDay: this.range && this.mutableDate.start && !this.mutableDate.end,
        isDisabled: this.isDisabled
      };
      var scopedSlot = this.VDPicker.$scopedSlots.day(_objectSpread$6({
        day: this.formattedDay
      }, helpers));
      return this.$createElement('span', {
        staticClass: 'vd-picker__table-day__text'
      }, [scopedSlot]);
    }
  },
  render: function render(h) {
    var _this = this;
    var data = {
      staticClass: 'vd-picker__table-day',
      class: this.classes,
      attrs: {
        type: 'button',
        disabled: this.isDisabled,
        'data-date': this.day.format('YYYY-MM-DD')
      },
      on: {
        click: function click() {
          return _this.onDayClick(_this.day);
        }
      }
    };
    return h('button', this.setTextColor(this.color, data), [this.genWrapper()]);
  }
});

var baseMixins$7 = mixins(colorable);
var VDPickerTableDate = baseMixins$7.extend({
  name: 'VDPickerTableDate',
  directives: {
    Touch: Touch
  },
  props: {
    allowedDates: {
      type: Function
    },
    color: {
      type: String
    },
    pickerDate: {
      type: [String, Object]
    },
    isRangeSelected: {
      type: Boolean
    },
    maxDate: {
      type: [String, Number, Date]
    },
    minDate: {
      type: [String, Number, Date]
    },
    mutableDate: {
      type: [String, Object]
    },
    range: {
      type: Boolean
    },
    transitionName: {
      type: String
    }
  },
  data: function data() {
    return {
      rangeCurrentHoveredDay: undefined
    };
  },
  computed: {
    weekDays: function weekDays() {
      return this.pickerDate.getWeekDays();
    },
    spaceBeforeFirstDay: function spaceBeforeFirstDay() {
      return toConsumableArray(Array(this.pickerDate.getWeekStart()).keys());
    }
  },
  watch: {
    rangeCurrentHoveredDay: function rangeCurrentHoveredDay(newHoveredDay) {
      if (!newHoveredDay) { return; }
      this.$emit('update-hovered-day', newHoveredDay);
    }
  },
  methods: {
    onDayClick: function onDayClick(day) {
      this.rangeCurrentHoveredDay = undefined;
      this.$emit('select-date', day);
    },
    handleMouseMove: function handleMouseMove(event) {
      var target = event.target;
      var isTableDays = typeof target.className === 'string' && target.className.split(' ')[0] === 'vd-picker__table-days';
      if (!this.range || this.isRangeSelected || isTableDays) { return; }
      var dateSetDate = target.dataset.date;
      if (!dateSetDate) { return this.handleMouseMove({
        target: target.parentNode
      }); }
      var isCurrentHoveredDay = dateSetDate === this.rangeCurrentHoveredDay;
      if (!dateSetDate || isCurrentHoveredDay) { return; }
      this.rangeCurrentHoveredDay = target.dataset.date;
    },
    genWeek: function genWeek() {
      var _this = this;
      var weekDay = function weekDay(day, key) {
        return _this.$createElement('div', {
          key: key,
          domProps: {
            innerHTML: day
          },
          staticClass: 'vd-picker__table-weekday'
        });
      };
      return this.$createElement('div', {
        staticClass: 'vd-picker__table-week'
      }, this.weekDays.map(weekDay));
    },
    genDaysWrapper: function genDaysWrapper() {
      return this.$createElement('transition-group', {
        staticClass: 'vd-picker__table-days__wrapper',
        props: {
          name: this.transitionName,
          tag: 'div'
        }
      }, [this.pickerDate].map(this.genDays));
    },
    genDays: function genDays(dates) {
      var _this2 = this;
      var blankDay = function blankDay(day) {
        return _this2.$createElement('div', {
          staticClass: 'vd-picker__table-day',
          key: "space-".concat(day)
        });
      };
      return this.$createElement('div', {
        staticClass: 'vd-picker__table-days',
        key: dates.month,
        on: {
          mousemove: this.handleMouseMove
        }
      }, [
      this.spaceBeforeFirstDay.map(blankDay),
      this.pickerDate.getDays().map(this.genDay)]);
    },
    genDay: function genDay(day, key) {
      return this.$createElement(VDPickerTableDay, {
        key: key,
        props: {
          allowedDates: this.allowedDates,
          color: this.color,
          day: day,
          maxDate: this.maxDate,
          minDate: this.minDate,
          mutableDate: this.mutableDate,
          range: this.range,
          rangeCurrentHoveredDay: this.rangeCurrentHoveredDay,
          locale: this.currentLocale
        },
        on: {
          'select-day': this.onDayClick
        }
      });
    }
  },
  render: function render(h) {
    var _this3 = this;
    return h('div', {
      staticClass: 'vd-picker__table',
      directives: [{
        name: 'touch',
        value: {
          left: function left() {
            return _this3.$emit('update-month', 'next');
          },
          right: function right() {
            return _this3.$emit('update-month', 'prev');
          }
        }
      }],
      on: {
        touchstart: function touchstart(event) {
          return event.stopPropagation();
        }
      }
    }, [this.genWeek(), this.genDaysWrapper()]);
  }
});

var VDPickerValidate = {
  name: 'VDPickerValidate',
  mixins: [colorable],
  props: {
    buttonValidate: {
      type: String
    },
    buttonCancel: {
      type: String
    },
    color: {
      type: String
    },
    range: {
      type: Boolean
    },
    mutableDate: {
      type: Object
    }
  },
  computed: {
    isDisabledValidation: function isDisabledValidation() {
      if (!this.range) { return false; }
      return _typeof_1(this.mutableDate) !== 'object' || !Object.values(this.mutableDate).every(function (date) {
        return Boolean(date);
      });
    }
  },
  methods: {
    genButtonCancel: function genButtonCancel() {
      var _this = this;
      return this.$createElement('button', {
        staticClass: 'vd-picker-validate__button vd-picker-validate__button-cancel',
        attrs: {
          type: 'button'
        },
        on: {
          click: function click() {
            return _this.$emit('cancel');
          }
        }
      }, [this.genButtonEffect(), this.genButtonText(this.buttonCancel)]);
    },
    genButtonValidate: function genButtonValidate() {
      var _this2 = this;
      return this.$createElement('button', this.setTextColor(this.color, {
        staticClass: 'vd-picker-validate__button vd-picker-validate__button-validate',
        attrs: {
          type: 'button',
          disabled: this.isDisabledValidation
        },
        on: {
          click: function click() {
            return _this2.$emit('validate');
          }
        }
      }), [this.genButtonEffect(), this.genButtonText(this.buttonValidate)]);
    },
    genButtonEffect: function genButtonEffect() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'vd-picker-validate__effect'
      }));
    },
    genButtonText: function genButtonText(text) {
      return this.$createElement('div', {
        staticClass: 'vd-picker-validate__name',
        domProps: {
          innerHTML: text
        }
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vd-picker-validate'
    }, [this.genButtonCancel(), this.genButtonValidate()]);
  }
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$7(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var baseMixins$8 = mixins(colorable, Localable);
var VDPickerMonths = baseMixins$8.extend({
  name: 'VDPickerMonths',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    allowedDates: {
      type: Function
    },
    color: {
      type: String,
      default: String
    },
    pickerDate: {
      type: Object,
      default: Object
    },
    max: {
      type: [String, Number, Date]
    },
    min: {
      type: [String, Number, Date]
    },
    mutableDate: {
      type: Object,
      default: undefined
    },
    range: {
      type: Boolean,
      default: false
    },
    transitionName: {
      type: String,
      default: String
    },
    type: {
      type: String
    },
    visibleYearsNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    yearFormatted: function yearFormatted() {
      return this.pickerDate.getYearFormatted();
    },
    getMonths: function getMonths() {
      return this.pickerDate.getMonths();
    }
  },
  methods: {
    isCurrent: function isCurrent$1(monthIndex) {
      var selectedDate = generateDateWithYearAndMonth({
        year: this.pickerDate.year,
        month: monthIndex,
        locale: this.currentLocale
      });
      return isCurrent({
        date: selectedDate,
        type: 'month',
        locale: this.currentLocale
      });
    },
    isSelected: function isSelected(monthIndex) {
      if (this.range || !this.mutableDate) { return false; }
      var selectedDate = generateDateWithYearAndMonth({
        year: this.pickerDate.year,
        month: monthIndex,
        locale: this.currentLocale
      });
      return areSameDates(this.mutableDate.format('YYYY-MM'), selectedDate.format('YYYY-MM'), 'month');
    },
    isAllowed: function isAllowed(monthIndex) {
      var date = generateDateWithYearAndMonth({
        year: this.yearFormatted,
        month: monthIndex,
        locale: this.currentLocale
      });
      return isDateAllowed({
        date: date,
        min: this.min,
        max: this.max,
        type: 'month',
        allowedFn: this.allowedDates
      });
    },
    genTransition: function genTransition() {
      return this.$createElement('transition-group', {
        staticClass: 'vd-picker__months-inner',
        props: {
          tag: 'div',
          name: this.transitionName
        }
      }, [this.pickerDate.year].map(this.genMonthList));
    },
    genMonthList: function genMonthList(key) {
      return this.$createElement('div', {
        staticClass: 'vd-picker__months-list',
        key: key
      }, [this.getMonths.map(this.genMonthButton)]);
    },
    genMonthButton: function genMonthButton(value, index) {
      var _this = this;
      var isCurrent = this.isCurrent(index) && !this.isSelected(index);
      var isSelected = this.isSelected(index);
      var button = this.$createElement('button', {
        key: index,
        staticClass: 'vd-picker__months-button',
        style: _objectSpread$7(_objectSpread$7({}, isCurrent && {
          'border-color': this.color
        }), isSelected && _objectSpread$7(_objectSpread$7({}, this.setTextColor('#fff')), this.setBackgroundColor(this.color))),
        attrs: {
          type: 'button',
          disabled: !this.isAllowed(index)
        },
        on: {
          click: function click() {
            return _this.$emit('input', index, 'month');
          }
        }
      }, [value]);
      return this.$createElement('div', {
        staticClass: 'vd-picker__months-button__wrapper'
      }, [button]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vd-picker__months'
    }, [this.genTransition()]);
  }
});

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$8(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var baseMixins$9 = mixins(colorable, Localable);
var VDPickerQuarters = baseMixins$9.extend({
  name: 'VDPickerQuarters',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    allowedDates: {
      type: Function
    },
    color: {
      type: String,
      default: String
    },
    pickerDate: {
      type: Object,
      default: Object
    },
    max: {
      type: [String, Number, Date]
    },
    min: {
      type: [String, Number, Date]
    },
    mutableDate: {
      type: Object,
      default: undefined
    },
    transitionName: {
      type: String,
      default: String
    }
  },
  computed: {
    getQuarters: function getQuarters() {
      return this.pickerDate.getQuarters();
    }
  },
  methods: {
    isCurrent: function isCurrent$1(monthIndex) {
      var selectedDate = generateDateWithYearAndMonth({
        year: this.pickerDate.year,
        month: monthIndex,
        locale: this.currentLocale
      });
      return isCurrent({
        date: selectedDate,
        type: 'quarter',
        locale: this.currentLocale
      });
    },
    isSelected: function isSelected(monthIndex) {
      if (!this.mutableDate) { return false; }
      var selectedDate = generateDateWithYearAndMonth({
        year: this.pickerDate.year,
        month: monthIndex,
        locale: this.currentLocale
      });
      return areSameDates(this.mutableDate.format('YYYY-MM'), selectedDate.format('YYYY-MM'), 'month');
    },
    isAllowed: function isAllowed(monthIndex) {
      var date = generateDateWithYearAndMonth({
        year: this.pickerDate.year,
        month: monthIndex,
        locale: this.currentLocale
      });
      return isDateAllowed({
        date: date,
        min: this.min,
        max: this.max,
        type: 'month',
        allowedFn: this.allowedDates
      });
    },
    genTransition: function genTransition() {
      return this.$createElement('transition-group', {
        staticClass: 'vd-picker__quarters-inner',
        props: {
          tag: 'div',
          name: this.transitionName
        }
      }, [this.pickerDate.year].map(this.genQuarterList));
    },
    genQuarterList: function genQuarterList(key) {
      return this.$createElement('div', {
        staticClass: 'vd-picker__quarters-list',
        key: key
      }, [this.getQuarters.map(this.genQuarterButton)]);
    },
    genQuarterButton: function genQuarterButton(value, index) {
      var _this = this;
      var selectedIndex = convertQuarterToMonth(index);
      var isCurrent = this.isCurrent(selectedIndex) && !this.isSelected(selectedIndex);
      var isSelected = this.isSelected(selectedIndex);
      var button = this.$createElement('button', {
        key: index,
        staticClass: 'vd-picker__quarters-button',
        style: _objectSpread$8(_objectSpread$8({}, isCurrent && {
          'border-color': this.color
        }), isSelected && _objectSpread$8(_objectSpread$8({}, this.setTextColor('#fff')), this.setBackgroundColor(this.color))),
        attrs: {
          type: 'button',
          disabled: !this.isAllowed(index)
        },
        on: {
          click: function click() {
            return _this.$emit('input', index, 'quarter');
          }
        }
      }, [value]);
      return this.$createElement('div', {
        staticClass: 'vd-picker__quarters-button__wrapper'
      }, [button]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vd-picker__quarters'
    }, [this.genTransition()]);
  }
});

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$9(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var baseMixins$a = mixins(colorable);
var VDPickerYears = baseMixins$a.extend({
  name: 'VDPickerYears',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    allowedDates: {
      type: Function
    },
    color: {
      type: String,
      default: String
    },
    mutableDate: {
      type: Object,
      default: undefined
    },
    pickerDate: {
      type: Object,
      default: Object
    },
    max: {
      type: [String, Number, Date]
    },
    min: {
      type: [String, Number, Date]
    },
    visibleYearsNumber: {
      type: Number,
      default: 10
    },
    range: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    yearFormatted: function yearFormatted() {
      return this.pickerDate.getYearFormatted();
    },
    activeYear: function activeYear() {
      if (this.range) { return; }
      return this.mutableDate && this.mutableDate.format('YYYY');
    },
    getYears: function getYears() {
      return this.pickerDate.generateYearsRange({
        activeYear: this.activeYear,
        visibleYearsNumber: this.visibleYearsNumber,
        min: this.min,
        max: this.max
      });
    }
  },
  watch: {
    active: {
      handler: function handler(value) {
        if (!value || this.range) { return; }
        setTimeout(this.computeScrollPosition);
      },
      immediate: true
    }
  },
  methods: {
    isCurrent: function isCurrent$1(year) {
      var selectedDate = generateDateWithYearAndMonth({
        year: year,
        month: 0,
        locale: this.currentLocale
      });
      return isCurrent({
        date: selectedDate,
        type: 'year',
        locale: this.currentLocale
      });
    },
    isSelected: function isSelected(year) {
      return this.activeYear === String(year);
    },
    isAllowed: function isAllowed(year) {
      var date = generateDateWithYearAndMonth({
        year: year,
        month: 0,
        locale: this.currentLocale
      });
      return isDateAllowed({
        date: date,
        min: this.min,
        max: this.max,
        type: 'year',
        allowedFn: this.allowedDates
      });
    },
    computeScrollPosition: function computeScrollPosition() {
      var activeItem = this.$el.getElementsByClassName('active')[0];
      this.$el.scrollTop = computeYearsScrollPosition({
        activeItem: activeItem,
        container: this.$el,
        min: this.min,
        max: this.max
      });
    },
    genYearButton: function genYearButton(year) {
      var _this = this;
      var isCurrent = this.isCurrent(year) && !this.isSelected(year);
      var isSelected = this.isSelected(year);
      return this.$createElement('li', {
        key: year,
        staticClass: 'vd-picker__years-button',
        class: {
          'active': this.isSelected(year)
        },
        style: _objectSpread$9(_objectSpread$9({}, isCurrent && {
          'border-color': this.color
        }), isSelected && _objectSpread$9(_objectSpread$9({}, this.setTextColor('#fff')), this.setBackgroundColor(this.color))),
        attrs: {
          disabled: !this.isAllowed(year)
        },
        on: {
          click: function click() {
            return _this.$emit('input', year, 'year');
          }
        }
      }, [year]);
    }
  },
  render: function render(h) {
    var _this2 = this;
    return h('ul', {
      staticClass: 'vd-picker__years'
    }, this.getYears.map(function (year) {
      return _this2.genYearButton(year);
    }));
  }
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) { descriptor.writable = true; }
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) { _defineProperties(Constructor.prototype, protoProps); }
  if (staticProps) { _defineProperties(Constructor, staticProps); }
  return Constructor;
}
var createClass = _createClass;

var PickerDate = function () {
  function PickerDate(month, year) {
    var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      lang: localeObject
    };
    classCallCheck(this, PickerDate);
    dayjs.locale(locale.lang);
    this.locale = locale;
    this.start = dayjs().year(year).month(month).startOf('month');
    this.end = this.start.endOf('month');
    this.month = month;
    this.year = year;
  }
  createClass(PickerDate, [{
    key: "getWeekStart",
    value: function getWeekStart() {
      return this.start.weekday();
    }
  }, {
    key: "getDays",
    value: function getDays() {
      return Array.from(generateDateRange({
        startDate: this.start,
        endDate: this.end,
        locale: this.locale
      }));
    }
  }, {
    key: "getWeekDays",
    value: function getWeekDays() {
      var _this$locale = this.locale,
          lang = _this$locale.lang,
          weekDays = _this$locale.weekDays;
      var weekDaysShort = toConsumableArray(lang.weekdaysShort);
      if (lang.weekStart && lang.weekStart === 1) {
        weekDaysShort.push(weekDaysShort.shift());
      }
      return weekDays || weekDaysShort;
    }
  }, {
    key: "getMonths",
    value: function getMonths() {
      return Array.apply(0, Array(12)).map(function (_, i) {
        return dayjs().month(i).format('MMM');
      });
    }
  }, {
    key: "getQuarters",
    value: function getQuarters() {
      return Array.apply(0, Array(4)).map(function (_, i) {
        var quarterMonthStart = dayjs().quarter(i + 1).startOf('quarter').format('MMMM');
        var quarterMonthEnd = dayjs().quarter(i + 1).endOf('quarter').format('MMMM');
        return "".concat(quarterMonthStart, " - ").concat(quarterMonthEnd);
      });
    }
  }, {
    key: "getMonthFormatted",
    value: function getMonthFormatted() {
      return this.start.format('MMMM');
    }
  }, {
    key: "getYearFormatted",
    value: function getYearFormatted() {
      return this.start.format('YYYY');
    }
  }, {
    key: "generateYearsRange",
    value: function generateYearsRange(_ref) {
      var activeYear = _ref.activeYear,
          visibleYearsNumber = _ref.visibleYearsNumber,
          min = _ref.min,
          max = _ref.max;
      var selectedYear = parseInt(activeYear, 10) || parseInt(dayjs().format('YYYY'), 10);
      var maxYear = max ? parseInt(max, 10) : selectedYear + visibleYearsNumber;
      var minYear = Math.min(maxYear, min ? parseInt(min, 10) : selectedYear - visibleYearsNumber);
      return toConsumableArray(Array(maxYear - minYear + 1).keys()).map(function (i) {
        return maxYear - i;
      });
    }
  }]);
  return PickerDate;
}();

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$a(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var baseMixins$b = mixins(colorable, Overlayable, Localable);
var VDPickerAgenda = baseMixins$b.extend({
  name: 'VDPickerAgenda',
  props: {
    allowedDates: {
      type: Function
    },
    buttonCancel: {
      type: String
    },
    buttonValidate: {
      type: String
    },
    color: {
      type: String
    },
    date: {
      type: [Date, Object]
    },
    headerFormat: {
      type: String
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    maxDate: {
      type: [String, Number, Date]
    },
    minDate: {
      type: [String, Number, Date]
    },
    name: {
      type: String
    },
    noHeader: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    rangeHeaderText: {
      type: String,
      default: String
    },
    rangePresets: {
      type: Array,
      default: undefined
    },
    rtl: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'date'
    },
    validate: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    visibleYearsNumber: {
      type: Number
    }
  },
  data: function data() {
    return {
      height: 'auto',
      pickerDate: undefined,
      mutableDate: undefined,
      mode: DATEPICKER_MODES.date,
      transitionDaysName: 'slide-h-next',
      transitionLabelName: 'slide-v-next'
    };
  },
  computed: {
    classes: function classes() {
      return {
        'vd-picker--rtl': this.rtl,
        'vd-picker--bottomsheet': this.fullscreen,
        'vd-picker--no-header': this.noHeader,
        'vd-picker--validate': this.validate,
        'vd-picker--range': this.range,
        'vd-picker--range-selecting': this.range && !this.isRangeSelected
      };
    },
    isRangeSelected: function isRangeSelected() {
      if (!this.range) { return false; }
      return _typeof_1(this.mutableDate) === 'object' && Object.values(this.mutableDate).every(function (date) {
        return Boolean(date);
      });
    },
    formatters: function formatters() {
      return generateDates({
        headerFormat: this.headerFormat,
        locale: this.locale,
        maxDate: this.maxDate,
        minDate: this.minDate,
        mutableDate: this.mutableDate,
        range: this.range,
        rangeHeaderText: this.rangeHeaderText
      });
    }
  },
  created: function created() {
    this.initAgenda();
  },
  beforeDestroy: function beforeDestroy() {
    clearAllBodyScrollLocks();
  },
  watch: {
    value: 'initAgenda',
    date: 'initDatesForPicker',
    type: 'updateMode',
    fullscreen: {
      handler: function handler(show) {
        var _this = this;
        this.$nextTick(function () {
          var targetElement = _this.$refs.body;
          if (show) {
            disableBodyScroll(targetElement);
            _this.genOverlay();
          } else {
            _this.removeOverlay(false);
            enableBodyScroll(targetElement);
          }
        });
      },
      immediate: true
    },
    mode: function mode(_mode) {
      var _this2 = this;
      if (_mode !== 'year' || !this.fullscreen) { return; }
      enableBodyScroll(this.$refs.body);
      this.$nextTick(function () {
        disableBodyScroll(_this2.$el.querySelector('.vd-picker__years'));
      });
    }
  },
  methods: {
    initAgenda: function initAgenda() {
      this.initDatesForPicker(this.date);
      this.updateMode(this.type);
    },
    updateTransitions: function updateTransitions(direction) {
      this.transitionDaysName = "slide-h-".concat(direction);
      this.transitionLabelName = "slide-v-".concat(direction);
    },
    reOrderSelectedDate: function reOrderSelectedDate(newDate) {
      if (!this.mutableDate) { return; }
      if (isBeforeDate(newDate, this.mutableDate.start)) {
        this.mutableDate = {
          start: undefined,
          end: this.mutableDate.start
        };
      } else if (isAfterDate(newDate, this.mutableDate.end)) {
        this.mutableDate = {
          start: this.mutableDate.end,
          end: undefined
        };
      }
    },
    selectDate: function selectDate(day) {
      if (this.range) {
        if (this.isRangeSelected || !this.mutableDate.start && !this.mutableDate.end) {
          this.mutableDate = {
            start: day.clone(),
            end: undefined
          };
          return;
        }
        this.reOrderSelectedDate(day);
        this.emitSelectedDate(_objectSpread$a(_objectSpread$a(_objectSpread$a({}, this.mutableDate), this.mutableDate.start && {
          end: day.clone()
        }), this.mutableDate.end && {
          start: day.clone()
        }));
        return;
      }
      var direction = isDateAfter(day, this.mutableDate) ? 'next' : 'prev';
      this.updateTransitions(direction);
      this.emitSelectedDate(day.clone());
    },
    emitSelectedDate: function emitSelectedDate(date) {
      if (this.range) {
        this.pickerDate = new PickerDate(date.end.month(), date.end.year(), this.currentLocale);
      }
      this.mutableDate = date;
      this.$emit('selectDate', this.mutableDate);
    },
    initDatesForPicker: function initDatesForPicker(date) {
      var newDate = generateDate({
        date: this.range ? date.end || date.start : date,
        locale: this.currentLocale
      });
      if (isAfterDate(newDate, this.maxDate)) {
        newDate = generateDate({
          date: this.maxDate,
          locale: this.currentLocale
        });
      }
      if (this.range) {
        this.pickerDate = new PickerDate(newDate.month(), newDate.year(), this.currentLocale);
        this.mutableDate = date;
        return;
      }
      if (date == null && this.type === 'quarter') {
        newDate = newDate.month(newDate.quarter());
      }
      if (date != null && this.type === 'quarter') {
        newDate = newDate.month(convertQuarterToMonth(newDate.month()));
      }
      this.pickerDate = new PickerDate(newDate.month(), newDate.year(), this.currentLocale);
      this.mutableDate = date && date.month(newDate.month()).clone();
    },
    changeMonth: function changeMonth(direction) {
      var month = this.pickerDate.month + (direction === 'prev' ? -1 : +1);
      var year = this.pickerDate.year;
      if (month > 11 || month < 0) {
        year += direction === 'prev' ? -1 : +1;
        month = direction === 'prev' ? 11 : 0;
      }
      this.updateTransitions(direction);
      this.pickerDate = new PickerDate(month, year, this.currentLocale);
    },
    changeYear: function changeYear(direction) {
      var year = this.pickerDate.year + (direction === 'prev' ? -1 : +1);
      var month = this.pickerDate.month;
      this.updateTransitions(direction);
      this.pickerDate = new PickerDate(month, year, this.currentLocale);
    },
    updateMode: function updateMode(mode) {
      this.mode = mode;
    },
    updateSelectedYearMonth: function updateSelectedYearMonth(value, mode) {
      var _generateMonthAndYear = generateMonthAndYear(value, this.pickerDate, mode),
          year = _generateMonthAndYear.year,
          month = _generateMonthAndYear.month;
      this.pickerDate = new PickerDate(month, year, this.currentLocale);
      if (mode === DATEPICKER_MODES.year && this.type !== 'year') {
        var nextActiveMode = this.type === 'quarter' ? 'quarter' : 'month';
        return this.updateMode(nextActiveMode);
      }
      if (this.type !== 'date') {
        var newDate = generateDateWithYearAndMonth({
          year: this.pickerDate.year,
          month: this.pickerDate.month,
          locale: this.currentLocale
        });
        this.selectDate(newDate);
        return;
      }
      this.updateMode('date');
    },
    genTitle: function genTitle() {
      var _this3 = this;
      var title = this.$createElement('p', this.name);
      var icon = this.$createElement(VDIcon, {
        on: {
          click: function click() {
            return _this3.$emit('close');
          }
        }
      }, ['close']);
      return this.$createElement('div', {
        staticClass: 'vd-picker__title'
      }, [title, this.$createElement('div', {
        staticClass: 'vd-picker__title-close'
      }, [icon])]);
    },
    genHeader: function genHeader() {
      return this.$createElement(VDPickerHeader, {
        props: _objectSpread$a(_objectSpread$a({}, this.formatters), {}, {
          color: this.color,
          mode: this.yearMonthMode,
          mutableDate: this.mutableDate,
          range: this.range,
          transitionName: this.transitionLabelName,
          type: this.type
        }),
        on: {
          'update-mode': this.updateMode
        }
      });
    },
    genPresets: function genPresets() {
      return this.$createElement(VDPickerPresets, {
        props: {
          rangePresets: this.rangePresets,
          mutableDate: this.mutableDate,
          minDate: this.minDate,
          maxDate: this.maxDate,
          color: this.color,
          locale: this.locale
        },
        on: {
          'update-range': this.emitSelectedDate
        }
      });
    },
    genBody: function genBody() {
      var children = [this.mode !== DATEPICKER_MODES.year && this.genControls(), this.mode === DATEPICKER_MODES.date && this.genTableDate(), this.mode === DATEPICKER_MODES.month && this.genMonths(), this.mode === DATEPICKER_MODES.quarter && this.genQuarters(), this.mode === DATEPICKER_MODES.year && this.genYears()];
      return this.$createElement('div', {
        staticClass: 'vd-picker__body',
        ref: 'body'
      }, children);
    },
    genControls: function genControls() {
      return this.$createElement(VDPickerControls, {
        props: {
          pickerDate: this.pickerDate,
          transitionName: this.transitionLabelName,
          color: this.color,
          min: this.minDate,
          max: this.maxDate,
          mode: this.mode
        },
        on: {
          'on-navigation-click': this.mode === DATEPICKER_MODES.date ? this.changeMonth : this.changeYear,
          'update-mode': this.updateMode
        }
      });
    },
    genTableDate: function genTableDate() {
      return this.$createElement(VDPickerTableDate, {
        props: {
          allowedDates: this.allowedDates,
          color: this.color,
          pickerDate: this.pickerDate,
          isRangeSelected: this.isRangeSelected,
          locale: this.currentLocale,
          maxDate: this.maxDate,
          minDate: this.minDate,
          mutableDate: this.mutableDate,
          range: this.range,
          transitionName: this.transitionDaysName
        },
        on: {
          'update-month': this.changeMonth,
          'update-hovered-day': this.reOrderSelectedDate,
          'select-date': this.selectDate
        }
      });
    },
    genMonths: function genMonths() {
      var _this$formatters = this.formatters,
          minMonth = _this$formatters.minMonth,
          maxMonth = _this$formatters.maxMonth;
      return this.$createElement(VDPickerMonths, {
        props: {
          active: this.mode === DATEPICKER_MODES.month,
          allowedDates: this.type === DATEPICKER_MODES.month ? this.allowedDates : undefined,
          color: this.color,
          locale: this.currentLocale,
          max: maxMonth,
          min: minMonth,
          mutableDate: this.mutableDate,
          pickerDate: this.pickerDate,
          range: this.range,
          transitionName: this.transitionDaysName
        },
        on: {
          input: this.updateSelectedYearMonth
        }
      });
    },
    genQuarters: function genQuarters() {
      var _this$formatters2 = this.formatters,
          minMonth = _this$formatters2.minMonth,
          maxMonth = _this$formatters2.maxMonth;
      return this.$createElement(VDPickerQuarters, {
        props: {
          active: this.mode === DATEPICKER_MODES.quarter,
          allowedDates: this.type === DATEPICKER_MODES.quarter ? this.allowedDates : undefined,
          color: this.color,
          locale: this.currentLocale,
          max: maxMonth,
          min: minMonth,
          mutableDate: this.mutableDate,
          pickerDate: this.pickerDate,
          transitionName: this.transitionDaysName
        },
        on: {
          input: this.updateSelectedYearMonth
        }
      });
    },
    genYears: function genYears() {
      var _this$formatters3 = this.formatters,
          minYear = _this$formatters3.minYear,
          maxYear = _this$formatters3.maxYear;
      return this.$createElement(VDPickerYears, {
        props: {
          active: this.mode === DATEPICKER_MODES.year,
          allowedDates: this.type === DATEPICKER_MODES.year ? this.allowedDates : undefined,
          color: this.color,
          max: maxYear,
          min: minYear,
          mutableDate: this.mutableDate,
          pickerDate: this.pickerDate,
          range: this.range,
          visibleYearsNumber: this.visibleYearsNumber
        },
        on: {
          input: this.updateSelectedYearMonth
        }
      });
    },
    genValidate: function genValidate() {
      var _this4 = this;
      return this.$createElement(VDPickerValidate, {
        props: {
          buttonValidate: this.buttonValidate,
          buttonCancel: this.buttonCancel,
          color: this.color,
          mutableDate: this.mutableDate,
          range: this.range
        },
        on: {
          cancel: function cancel() {
            return _this4.$emit('close');
          },
          validate: function validate() {
            return _this4.$emit('validateDate');
          }
        }
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vd-picker',
      class: this.classes,
      ref: 'datepicker'
    }, [
    this.fullscreen && this.genTitle(),
    !this.noHeader && this.genHeader(),
    this.range && this.genPresets(),
    this.genBody(),
    this.validate && this.genValidate()]);
  }
});

function deprecate(_ref) {
  var original = _ref.original,
      replacement = _ref.replacement,
      vm = _ref.vm;
  consoleWarn("[UPGRADE] '".concat(original, "' is deprecated, use '").concat(replacement, "' instead."), vm);
}
function removed(_ref3) {
  var original = _ref3.original,
      vm = _ref3.vm;
  consoleWarn("[REMOVED] '".concat(original, "' has been removed. You can safely omit it."), vm);
}
function createMessage(_ref4) {
  var message = _ref4.message,
      vm = _ref4.vm;
  if (vm) {
    vm.$_alreadyWarned = vm.$_alreadyWarned || [];
    if (vm.$_alreadyWarned.includes(message)) { return; }
    vm.$_alreadyWarned.push(message);
  }
  return "[VueDatePicker] ".concat(message) + (vm ? generateComponentTrace(vm) : '');
}
function consoleWarn(message, vm) {
  var newMessage = createMessage({
    message: message,
    vm: vm
  });
  if (newMessage == null) { return; }
  console.warn(newMessage);
}
var classifyRE = /(?:^|[-_])(\w)/g;
var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};
function formatComponentName(vm, includeFile) {
  if (vm.$root === vm) {
    return '<Root>';
  }
  var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
  var name = options.name || options._componentTag;
  var file = options.__file;
  if (!name && file) {
    var match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }
  return (name ? "<".concat(classify(name), ">") : "<Anonymous>") + (file && includeFile !== false ? " at ".concat(file) : '');
}
function generateComponentTrace(vm) {
  if (vm._isVue && vm.$parent) {
    var tree = [];
    var currentRecursiveSequence = 0;
    while (vm) {
      if (tree.length > 0) {
        var last = tree[tree.length - 1];
        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }
      tree.push(vm);
      vm = vm.$parent;
    }
    return '\n\nfound in\n\n' + tree.map(function (vm, i) {
      return "".concat(i === 0 ? '---> ' : ' '.repeat(5 + i * 2)).concat(Array.isArray(vm) ? "".concat(formatComponentName(vm[0]), "... (").concat(vm[1], " recursive calls)") : formatComponentName(vm));
    }).join('\n');
  } else {
    return "\n\n(found in ".concat(formatComponentName(vm), ")");
  }
}

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$b(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultMenuProps = {
  minWidth: '290px',
  maxWidth: '315px'
};
var baseMixins$c = mixins(Localable, Mobile);
var VDPicker = baseMixins$c.extend({
  name: 'VDPicker',
  provide: function provide() {
    return {
      VDPicker: this
    };
  },
  directives: {
    ClickOutside: ClickOutside
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      default: 'datepicker'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    validate: {
      type: Boolean,
      default: false
    },
    buttonValidate: {
      type: String,
      default: undefined
    },
    buttonCancel: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: 'date'
    },
    range: {
      type: Boolean,
      default: false
    },
    rangeInputText: {
      type: String,
      default: '%d ~ %d'
    },
    rangeHeaderText: {
      type: String,
      default: undefined
    },
    rangePresets: {
      type: Array,
      default: undefined
    },
    value: {
      type: [String, Object, Number, Date]
    },
    format: {
      type: String,
      default: undefined
    },
    formatHeader: {
      type: String,
      default: undefined
    },
    visible: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    color: {
      type: String,
      default: '#4f88ff'
    },
    contentClass: {
      type: String,
      default: ''
    },
    allowedDates: {
      type: Function
    },
    minDate: {
      type: [String, Number, Date]
    },
    maxDate: {
      type: [String, Number, Date]
    },
    visibleYearsNumber: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    noHeader: {
      type: Boolean,
      default: false
    },
    noCalendarIcon: {
      type: Boolean,
      default: false
    },
    fullscreenMobile: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: [String, Number],
      default: '0'
    },
    rtl: {
      type: Boolean,
      default: false
    },
    origin: {
      type: String,
      default: undefined
    },
    allowOverflow: {
      type: Boolean,
      default: true
    },
    attach: {
      validator: validateAttachTarget,
      default: false
    },
    zIndex: {
      type: Number,
      default: Z_INDEX_LIST.datepicker
    }
  },
  data: function data() {
    return {
      date: undefined,
      isMenuActive: false,
      isBooted: false,
      activator: undefined
    };
  },
  computed: {
    classes: function classes() {
      return {
        'vd-wrapper--inline': this.inline,
        'vd-wrapper--disabled': this.disabled,
        'vd-wrapper--rtl': this.rtl
      };
    },
    componentId: function componentId() {
      return this.id || "datepicker_".concat(generateRandomId());
    },
    inputFormat: function inputFormat() {
      if (!this.format) { return getDefaultInputFormat(this.range ? 'range' : this.type); }
      return this.format;
    },
    headerFormat: function headerFormat() {
      if (!this.formatHeader) { return getDefaultHeaderFormat(this.range ? 'range' : this.type); }
      return this.formatHeader;
    },
    outputFormat: function outputFormat() {
      return getDefaultOutputFormat(this.range ? 'range' : this.type);
    },
    textsFormat: function textsFormat() {
      var _this$currentLocale$l = this.currentLocale.lang,
          buttonValidate = _this$currentLocale$l.buttonValidate,
          buttonCancel = _this$currentLocale$l.buttonCancel,
          rangeHeaderText = _this$currentLocale$l.rangeHeaderText;
      return {
        buttonValidate: this.buttonValidate || buttonValidate,
        buttonCancel: this.buttonCancel || buttonCancel,
        rangeHeaderText: this.rangeHeaderText || rangeHeaderText
      };
    },
    internalDate: {
      get: function get() {
        return initDate(this.value, {
          range: this.range,
          locale: this.currentLocale,
          type: this.type
        });
      },
      set: function set(date) {
        this.date = date;
      }
    },
    isDateDefined: function isDateDefined() {
      var isDateDefined = !this.range && this.internalDate;
      var isDateRangeDefined = this.range && this.internalDate && this.internalDate.start && this.internalDate.end;
      return Boolean(isDateDefined) || Boolean(isDateRangeDefined);
    },
    formattedInputDate: function formattedInputDate() {
      return genFormattedInputDate({
        inputFormat: this.inputFormat,
        internalDate: this.internalDate,
        isDateDefined: this.isDateDefined,
        locale: this.currentLocale,
        range: this.range,
        rangeInputText: this.rangeInputText,
        type: this.type
      });
    },
    isFullScreenMode: function isFullScreenMode() {
      return this.fullscreenMobile && this.isMobile;
    }
  },
  watch: {
    visible: {
      handler: function handler(isMenuActive) {
        this.isMenuActive = isMenuActive;
      },
      immediate: true
    },
    isFullScreenMode: function isFullScreenMode() {
      var _this = this;
      if (!this.isMenuActive) { return; }
      this.hideDatePicker();
      setTimeout(function () {
        _this.showDatePicker();
      }, 200);
    }
  },
  created: function created() {
    var _this2 = this;
    ['no-input'].forEach(function (prop) {
      if (_this2.$attrs.hasOwnProperty(prop)) { removed({
        original: prop,
        vm: _this2
      }); }
    });
    if (this.$attrs.hasOwnProperty('fullscreen-breakpoint')) {
      deprecate({
        original: 'fullscreen-mobile',
        replacement: 'mobile-breakpoint',
        vm: this
      });
    }
  },
  mounted: function mounted() {
    this.activator = this.$refs.activator;
  },
  beforeDestroy: function beforeDestroy() {
    this.hideDatePicker();
    this.$emit('onDestroy');
  },
  methods: {
    showDatePicker: function showDatePicker() {
      if (this.disabled) { return; }
      this.isMenuActive = true;
      this.$emit('onOpen');
    },
    hideDatePicker: function hideDatePicker() {
      if (!this.isMenuActive) { return; }
      this.isMenuActive = false;
      this.isBooted = false;
      clearAllBodyScrollLocks();
      this.$emit('onClose');
    },
    changeDate: function changeDate(date) {
      this.internalDate = date;
      if (this.validate) { return; }
      this.validateDate();
    },
    validateDate: function validateDate() {
      if (!this.date) {
        this.hideDatePicker();
        return;
      }
      this.$emit('input', transformDateForModel(this.date, this.outputFormat, this.range));
      this.$emit('onChange');
      this.hideDatePicker();
    },
    onKeyDown: function onKeyDown(event) {
      var keyCode = event.keyCode;
      var menu = this.$refs.menu;
      if (!menu) { return; }
      if ([KEYCODES.esc, KEYCODES.tab].includes(keyCode)) { return this.hideDatePicker(event); }
    },
    onClearDate: function onClearDate() {
      this.$emit('input', undefined);
      this.$emit('onChange');
    },
    genContent: function genContent() {
      if (this.inline) { return [this.genAgenda()]; }
      return [this.$scopedSlots.activator ? this.genActivator() : this.genCustomInput(), this.genMenuWithContent()];
    },
    genActivator: function genActivator() {
      return this.$createElement('div', {
        staticClass: 'vd-activator',
        directives: [{
          name: 'click-outside',
          value: {
            isActive: this.isMenuActive && !this.isFullScreenMode,
            handler: this.hideDatePicker
          }
        }],
        on: {
          click: this.showDatePicker,
          keydown: this.onKeyDown
        },
        ref: 'activator'
      }, [this.$scopedSlots.activator({
        date: this.formattedInputDate
      })]);
    },
    genCustomInput: function genCustomInput() {
      return this.$createElement(VDPickerCustomInput, {
        props: {
          clearable: this.clearable,
          color: this.color,
          date: this.formattedInputDate,
          disabled: this.disabled,
          id: this.componentId,
          isDateDefined: this.isDateDefined,
          isMenuActive: this.isMenuActive,
          name: this.name,
          noCalendarIcon: this.noCalendarIcon,
          placeholder: this.placeholder,
          tabindex: this.tabindex
        },
        directives: [{
          name: 'click-outside',
          value: {
            isActive: this.isMenuActive && !this.isFullScreenMode,
            handler: this.hideDatePicker
          }
        }],
        nativeOn: {
          click: this.showDatePicker
        },
        on: {
          keydown: this.onKeyDown,
          clearDate: this.onClearDate
        },
        ref: 'activator'
      });
    },
    genMenuWithContent: function genMenuWithContent() {
      var _this3 = this;
      var shouldShowBottomSheet = this.isFullScreenMode;
      var menuProps = _objectSpread$b(_objectSpread$b({}, defaultMenuProps), {}, {
        value: this.isMenuActive,
        origin: this.origin,
        allowOverflow: this.allowOverflow,
        attach: !shouldShowBottomSheet ? this.attach : false,
        transition: shouldShowBottomSheet ? 'slide-in-out-transition' : 'scale-transition',
        bottomSheet: shouldShowBottomSheet
      });
      var activator = this.activator;
      return this.$createElement(VDMenu, {
        attrs: {
          role: 'menu'
        },
        props: _objectSpread$b(_objectSpread$b({}, menuProps), {}, {
          activator: activator
        }),
        on: {
          transitionEnd: function transitionEnd() {
            _this3.isBooted = true;
          }
        },
        ref: 'menu'
      }, [this.genAgenda()]);
    },
    genAgenda: function genAgenda() {
      return this.$createElement(VDPickerAgenda, {
        props: {
          allowedDates: this.allowedDates,
          buttonCancel: this.textsFormat.buttonCancel,
          buttonValidate: this.textsFormat.buttonValidate,
          color: this.color,
          date: this.internalDate,
          fullscreen: this.isBooted && this.isMenuActive && this.isFullScreenMode,
          headerFormat: this.headerFormat,
          locale: this.currentLocale,
          maxDate: this.maxDate,
          minDate: this.minDate,
          name: this.name,
          noHeader: this.noHeader,
          range: this.range,
          rangeHeaderText: this.textsFormat.rangeHeaderText,
          rangePresets: this.rangePresets,
          rtl: this.rtl,
          type: this.type,
          validate: this.validate,
          value: this.isMenuActive,
          visibleYearsNumber: this.visibleYearsNumber
        },
        on: {
          selectDate: this.changeDate,
          validateDate: this.validateDate,
          close: this.hideDatePicker
        },
        directives: [{
          name: 'click-outside',
          value: {
            isActive: this.isBooted && this.isMenuActive,
            handler: this.hideDatePicker
          }
        }],
        ref: 'agenda'
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vd-wrapper',
      class: this.classes
    }, this.genContent());
  }
});

export default VDPicker;
