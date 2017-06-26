import Vue from 'vue'

import wcKeyboard from './KeyboardInput'

import './fonts/iconfont.css'

export default {
	install (Vue, options = {}) {
		Vue.component('wcKeyboard', Vue.extend(wcKeyboard));
	}
}