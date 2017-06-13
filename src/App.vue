<style>


</style>
<template>
  <div id="aap">
     <wc-keyboard 
        placeholder="询问服务员后输入"
        inter="3"

        v-model="val"/>
     {{val}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        // keyboardConfig: {
        //   inter: 5,
        // },
        val: '123'
      }
    },
  	methods: {
  		keyInput (v) {
        this.v = v;
  		}
  	}
  }
</script>