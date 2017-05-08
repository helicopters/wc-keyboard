module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(5)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  "data-v-7318c2e4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 光标闪烁间隔
var CURSOR_DURATION = 600;
/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'keyboard',
	props: {
		// 整数精度
		inter: {
			type: Number,
			default: 5
		},
		// 小数精度
		decimal: {
			type: Number,
			default: 2
		},
		label: {
			type: String,
			default: '消费金额'
		},
		placeholder: {
			type: String,
			default: '询问服务员后输入'
		}
	},
	data: function data() {
		return {
			cursor: false,
			val: '',
			keyboard: false,
			intervalID: -1,
			keyList: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
			isMe: false
		};
	},
	mounted: function mounted() {
		this.init();
	},

	methods: {
		// 监听 touchstart 事件
		// 为的是实现在 点击非输入框区域的时候, 自动隐藏掉键盘, 并且让输入框失去焦点
		init: function init() {
			var _this = this;

			document.addEventListener('touchstart', function (e) {
				// this.complete();
				if (_this.isMe) {
					_this.isMe = false;
				} else {
					_this.complete();
				}
			}, false);
		},

		// 用户输入
		input: function input(val, k, j) {
			// 1 检测用户当前输入 (前置检测)
			var checkedValue = this.preCheck(val);
			// 2 设置新值
			this.setVal(checkedValue);
		},


		// 监听输入框的 touchstart 事件
		who: function who() {
			this.isMe = true;
		},

		// 点击输入框, 唤起键盘, 并且让光标闪烁
		getUp: function getUp() {
			this.showKeyBoard();
			this.focus();
		},
		showKeyBoard: function showKeyBoard() {
			this.keyboard = true;
		},
		hideKeyBoard: function hideKeyBoard() {
			this.keyboard = false;
		},

		// 输入框聚焦
		focus: function focus() {
			var _this2 = this;

			this.showCursor();
			// 防止多次点击的时候, 光标狂闪
			clearInterval(this.intervalID);
			// 让光标动起来
			this.intervalID = setInterval(function () {
				_this2.cursor = !_this2.cursor;
			}, CURSOR_DURATION);
		},

		// 输入框失焦
		blur: function blur() {
			this.hideCursor();
			clearInterval(this.intervalID);
		},
		showCursor: function showCursor() {
			this.cursor = true;
		},
		hideCursor: function hideCursor() {
			this.cursor = false;
		},

		// 点击完成
		complete: function complete() {
			// 1 输入框失焦
			this.blur();

			// 2 隐藏键盘
			this.hideKeyBoard();

			// 3 再次验证当前的值 (后置验证)
			this.nextCheck();

			// 4 发送当前的值 (原样发送, 一丝不动)
			this.$emit('input', this.val);
		},


		// 用户点击删除按钮
		del: function del() {
			this.val = this.val.slice(0, -1);
		},

		// 检测用户的输入
		preCheck: function preCheck(val) {
			var v = val; // 当前输入的值
			var cv = this.val; // 当前已经输入的值

			// 1 禁止输入以 . 开始的值
			v = this.disallowDotStart(v, cv);

			// 2 禁止输入以 0 开始, 多个连续的 0, 比如 000
			v = this.disallowMoreZero(v, cv);

			// 3 输入的值的精度控制, 默认是 整数 5位, 小数两位
			v = this.checkAccuracy(v, cv);

			return v;
		},

		// 后置检查
		nextCheck: function nextCheck() {
			// 如果当前值最后一位是 .
			if (this.val.substr(this.val.length - 1, 1) === '.') {
				this.val = this.val + '00';
			}
			// 如果当前值为 0, 使用 parseFloat, parseInt 对小数变成 0
			if (parseFloat(this.val) === 0) {
				this.val = '';
			}
		},

		// 检测规则集合
		disallowDotStart: function disallowDotStart(v, cv) {
			// 如果输入的是一个点
			if (v === '.') {
				// 当前值又是个空
				if (cv.length === 0) {
					return '';
				} else if (cv.indexOf('.') > -1) {
					// 如果当前值不为空,看看现在的值是不是有 .
					return '';
				}
			}
			return v;
		},
		disallowMoreZero: function disallowMoreZero(v, cv) {
			// 如果当前的值的首位是 0
			if (cv.slice(0, 1) === '0' && cv.length === 1) {
				// 如果你现在输入的值是 . 
				if (v !== '.') {
					v = '';
				}
			}
			return v;
		},
		checkAccuracy: function checkAccuracy(v, cv) {
			// 如果存在小数点, 只用判断小数的个数即可
			var list = cv.split('.');
			if (cv.indexOf('.') > -1) {
				v = this.checkDecimal(v, list[1]);
			} else {
				v = this.checkInteger(v, list[0]);
			}
			return v;
		},
		checkInteger: function checkInteger(v, cv) {
			// 如果当前的位数已经到达限制了
			if (cv.length === this.inter) {
				// 如果输入的是一个 .
				if (v === '.') {
					return v;
				}
				return '';
			}
			return v;
		},
		checkDecimal: function checkDecimal(v, cv) {
			if (cv.length === this.decimal) {
				return '';
			}
			return v;
		},

		// 设置用户输入
		setVal: function setVal(newVal) {
			this.val = this.val + newVal;
		}
	}
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KeyBoard__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KeyBoard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__KeyBoard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fonts_iconfont_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fonts_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fonts_iconfont_css__);






/* harmony default export */ __webpack_exports__["default"] = ({
	install: function install(Vue) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Vue.component('KeyBoard', Vue.extend(__WEBPACK_IMPORTED_MODULE_1__KeyBoard___default.a));
	}
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "keyboard-box",
    on: {
      "touchstart": _vm.who
    }
  }, [_c('div', {
    staticClass: "input-box",
    on: {
      "touchstart": _vm.getUp
    }
  }, [_c('p', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.label) + " : ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "input"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.val),
      expression: "val"
    }],
    staticClass: "currency"
  }, [_vm._v("\n\t\t\t\t\t¥\n\t\t\t\t")]), _vm._v("\n\t\t\t\t" + _vm._s(_vm.val) + "\n\t\t\t")]), _vm._v(" "), (_vm.val.length === 0) ? _c('p', {
    staticClass: "placeholder"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.placeholder) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "cursor",
    style: ({
      visibility: _vm.cursor ? 'visible' : 'hidden'
    })
  })])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [(_vm.keyboard) ? _c('div', {
    staticClass: "keyboard animated"
  }, [_c('div', {
    staticClass: "done"
  }, [_c('p', {
    staticClass: "text",
    on: {
      "touchstart": _vm.complete
    }
  }, [_vm._v("完成")])]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_vm._l((_vm.keyList), function(list, key) {
    return _c('div', {
      key: key,
      staticClass: "item"
    }, _vm._l((list), function(val, iKey) {
      return _c('div', {
        key: iKey,
        staticClass: "key",
        on: {
          "touchstart": function($event) {
            _vm.input(val)
          }
        }
      }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(val) + "\n\t\t\t\t\t")])
    }))
  }), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "key dot",
    on: {
      "touchstart": function($event) {
        _vm.input('.')
      }
    }
  }, [_c('span', {
    attrs: {
      "data-key": "."
    }
  }, [_vm._v(".")])]), _vm._v(" "), _c('div', {
    staticClass: "key",
    attrs: {
      "data-key": "0"
    },
    on: {
      "touchstart": function($event) {
        _vm.input(0)
      }
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": _vm.del
    }
  }, [_c('i', {
    staticClass: "iconfont icon-keyboard-delete del"
  })])])], 2)]) : _vm._e()])], 1)
},staticRenderFns: []}

/***/ })
/******/ ]);