<style>


</style>
<template>
  <div id="aap">
    <div class="box" @touchstart="cao">
      <wc-keyboard @input="keyInput"/>
    </div>
    
  </div>
</template>
<script>
  export default {
  	methods: {
  		keyInput (v) {
  			console.log(v);
  		},
      cao () {
        console.log('我')
      }
  	}
  }
</script>