import Vue from 'vue'

import KeyBoard from './KeyBoard'

import './fonts/iconfont.css'

export default {
	install (Vue, options = {}) {
		Vue.component('KeyBoard', Vue.extend(KeyBoard));
	}
}