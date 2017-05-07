<style>
/*	body{
		padding: 10px;
	}
*/</style>
<template>
  <div id="aap">
    <key-board @input="keyInput"/>
  </div>
</template>
<script>
  export default {
  	methods: {
  		keyInput (v) {
  			console.log(v);
  		}
  	}
  }
</script>