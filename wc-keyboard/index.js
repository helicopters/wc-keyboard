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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  "data-v-dac2f228",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keyboard__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keyboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__keyboard__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'KeyboardInput',
	components: {
		keyboard: __WEBPACK_IMPORTED_MODULE_0__keyboard___default.a
	},
	created: function created() {
		var _this = this;

		document.addEventListener('touchstart', function () {
			_this.blur();
		});
	},

	props: {
		value: '',
		inter: {
			default: 5
		},
		decimal: {
			default: 2
		},
		label: {
			default: '消费金额'
		},
		placeholder: {
			default: '询问服务员后输入'
		}
	},
	data: function data() {
		return {
			cursor: false,
			keyboard: false,
			/*value 在组件中的值*/
			val: '',
			aIllegal: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0..', '.'],
			cursorDuration: 600,
			bodyHeight: '',
			bodyOverflow: ''
		};
	},

	methods: {
		/*focus*/
		focus: function focus() {
			/*显示键盘*/
			this.showKeyboard();
			/*显示光标*/
			this.showCursor();
			/*闪烁光标*/
			this.blinkCursor();
		},
		blinkCursor: function blinkCursor() {
			var _this2 = this;

			clearInterval(this.intervalID);
			this.intervalID = setInterval(function () {
				_this2.cursor = !_this2.cursor;
			}, this.cursorDuration);
		},
		unblinkCursor: function unblinkCursor() {
			clearInterval(this.intervalID);
		},

		/*blur*/
		blur: function blur() {
			/*隐藏光标*/
			this.hideCursor();
			/*停止光标闪烁*/
			this.unblinkCursor();
			/*隐藏键盘*/
			this.hideKeyboard();
			/*
   	附加 00, 如果用户输入了一个以 . 结尾的值就点完成了, 
   	那么这个时候就在后面加上00
   */
			this.toCompletion();
			/*通知父组件, 老子值出来了*/
			/*
   	校验用户输入的金额是不是为 0, 如果是的话, 直接重置
   */
			this.checkValue();
			this.notify();
		},
		showKeyboard: function showKeyboard() {
			this.keyboard = true;
		},
		hideKeyboard: function hideKeyboard() {
			this.keyboard = false;
		},
		showCursor: function showCursor() {
			this.cursor = true;
		},
		hideCursor: function hideCursor() {
			this.cursor = false;
		},
		checkValue: function checkValue() {
			if (parseFloat(this.val) === 0) {
				this.val = '';
			}
		},

		/*判读是否需要加0*/
		toCompletion: function toCompletion() {
			var list = this.value.split('.');
			if (typeof list[1] === 'undefined') {
				if (this.val !== '') {
					this.val = this.val + '.';
					this.completion(this.decimal);
				}
			} else {
				if (list[1].length < this.decimal) {
					this.completion(this.decimal - list[1].length);
				}
			}
		},
		completion: function completion(len) {
			var v = '';
			for (var i = 0; i < len; i++) {
				v = v + '0';
			}
			this.val = this.val + v;
		},
		notify: function notify() {
			this.$emit('input', this.val);
		},
		del: function del() {
			/*删除值并不会触发值的校验, 所以需要手动再触发一次*/
			this.val = this.val.slice(0, -1);
			this.notify();
		},

		/*输入*/
		typing: function typing(value) {
			/*如果是点击删除*/
			if (value === '') {
				this.del();
			}
			/*保存旧的值*/
			var oldValue = this.val;
			/*获取新的值*/
			this.val = this.val + value;
			/*检验新值, 如果没有通过检测, 恢复值*/
			if (!this.passCheck(this.val)) {
				this.val = oldValue;
				return;
			}
			/*为了让外界同步输入, 需要发送事件*/
			this.notify();
		},
		passCheck: function passCheck(val) {
			/*验证规则*/
			var aRules = [this.illegalInput, this.illegalValue, this.accuracy];
			return aRules.every(function (item) {
				return item(val);
			});
		},
		illegalInput: function illegalInput(val) {
			if (this.aIllegal.indexOf(val) > -1) {
				return false;
			}
			return true;
		},

		/*非法值*/
		illegalValue: function illegalValue(val) {
			if (parseFloat(val) != val) {
				return false;
			}
			return true;
		},

		/*验证精度*/
		accuracy: function accuracy(val) {
			var v = val.split('.');
			if (v[0].length > this.inter) {
				return false;
			}
			if (v[1] && v[1].length > this.decimal) {
				return false;
			}
			return true;
		}
	}
});

/***/ }),
/* 5 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['show'],
	methods: {
		/*防止点击完成按钮左边的空白区域收起键盘*/
		fn: function fn() {},

		/*输入*/
		typing: function typing(val) {
			this.$emit('typing', val);
		},

		/*点击完成*/
		complete: function complete() {
			this.$emit('complete');
		}
	}
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KeyboardInput__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KeyboardInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__KeyboardInput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fonts_iconfont_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fonts_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fonts_iconfont_css__);






/* harmony default export */ __webpack_exports__["default"] = ({
	install: function install(Vue) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Vue.component('wcKeyboard', Vue.extend(__WEBPACK_IMPORTED_MODULE_1__KeyboardInput___default.a));
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(7)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  "data-v-45362a8e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "keyboard animated",
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.fn($event)
      }
    }
  }, [_c('div', {
    staticClass: "done"
  }, [_c('p', {
    staticClass: "text",
    on: {
      "touchstart": _vm.complete
    }
  }, [_vm._v("完成")])]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('1')
      }
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('2')
      }
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('3')
      }
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('4')
      }
    }
  }, [_vm._v("4")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('5')
      }
    }
  }, [_vm._v("5")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('6')
      }
    }
  }, [_vm._v("6")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('7')
      }
    }
  }, [_vm._v("7")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('8')
      }
    }
  }, [_vm._v("8")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('9')
      }
    }
  }, [_vm._v("9")]), _vm._v(" "), _c('div', {
    staticClass: "key dot",
    on: {
      "touchstart": function($event) {
        _vm.typing('.')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-dot"
  })]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('0')
      }
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('div', {
    staticClass: "key",
    on: {
      "touchstart": function($event) {
        _vm.typing('')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-keyboard-delete del"
  })])])])])
},staticRenderFns: []}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "keyboard"
  }, [_c('div', {
    staticClass: "input-box",
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        _vm.focus($event)
      }
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
  }, [_vm._v("¥")]), _vm._v("\n\t\t\t\t" + _vm._s(_vm.val) + "\n\t\t\t")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.val.length === 0),
      expression: "val.length === 0"
    }],
    staticClass: "placeholder"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.placeholder) + "\n\t\t\t")]), _vm._v(" "), _c('p', {
    staticClass: "cursor",
    style: ({
      visibility: _vm.cursor ? 'visible' : 'hidden'
    })
  })])]), _vm._v(" "), _c('keyboard', {
    attrs: {
      "show": _vm.keyboard
    },
    on: {
      "typing": _vm.typing,
      "complete": _vm.blur
    }
  })], 1)
},staticRenderFns: []}

/***/ })
/******/ ]);