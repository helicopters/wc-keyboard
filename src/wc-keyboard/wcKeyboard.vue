<template>
	<div>
		<!-- 输入框 -->
		<keyboard-input ref="KeyboardInput"
			:inter="data.inter"
			:decimal="data.decimal"
			:label="data.label"
			:placeholder="data.placeholder"
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
		}
	}
</script>