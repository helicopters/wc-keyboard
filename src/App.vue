<style>


</style>
<template>
  <div id="aap">
    <div class="box" @touchstart="cao">
      <wc-keyboard @wcinput="keyInput" :data="keyboardConfig"/>
      <input type="number" v-model="v">
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
        },
        v: 0
      }
    },
  	methods: {
  		keyInput (v) {
  			console.log(v);
        this.v = v;
  		},
      cao () {
        console.log('我')
      }
  	}
  }
</script>