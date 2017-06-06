<style scoped lang="less">
.keyboard{
	font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
	user-select:none;
	font-size: 16px;
	height: 100%;
	width: 100%;			
}	
</style>
<template>
	<div class="keyboard">
		<!-- 输入框 -->
		<keyboard-input ref="KeyboardInput"
			:inter="data.inter"
			:decimal="data.decimal"
			:label="data.label"
			:placeholder="data.placeholder"
			@wcinput="input"
		/>
		<!-- 键盘部分 -->
		<keyboard/>
	</div>
</template>
<script>

	import KeyboardInput from './components/KeyboardInput'
	import Keyboard from './components/Keyboard'

	export default {
		name: 'wcKeyboard',
		components: {
			Keyboard,
			KeyboardInput
		},
		props: ['data'],
		created () {
			document.addEventListener('touchstart', e => {
				this.$refs.KeyboardInput.blur();
			});
		},
		methods: {
			/*向调用者发送当前值, 当前值是经过 parseFloat 的值*/
			input (val) {
				this.$emit('wcinput', parseFloat(val));
			}
		}
	}
</script>