import Vue from 'vue'

import KeyBoard from './KeyBoard'

export default {
	install (Vue, options = {}) {
		Vue.component('KeyBoard', Vue.extend(KeyBoard));
	}
}