<style>


</style>
<template>
  <div id="aap">
    <div class="box" @touchstart="cao">
      <wc-keyboard @input="keyInput" :data="keyboardConfig"/>
    </div>
    
  </div>
</template>
<script>
  export default {
    data () {
      return {
        keyboardConfig: {
          inter: 3,
          // placeholder: ''
        }
      }
    },
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