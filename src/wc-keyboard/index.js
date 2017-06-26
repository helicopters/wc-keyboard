import Vue from 'vue'

import wcKeyboard from './KeyboardInput'
import {Press} from './wc-directive'
Vue.use(Press)

import './fonts/iconfont.css'

export default {
	install (Vue, options = {}) {
		Vue.component('wcKeyboard', Vue.extend(wcKeyboard));
	}
}