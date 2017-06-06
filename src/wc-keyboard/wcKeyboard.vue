<template>
	<div>
		<!-- 输入框 -->
		<keyboard-input ref="KeyboardInput"/>
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
		created () {
			document.addEventListener('touchstart', e => {
				this.$refs.KeyboardInput.blur();
			});
		}
	}
</script>