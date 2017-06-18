<style>

.box{

  height: 100%;
  border:1px solid #ccc;
  height: 45px;
  padding:10px;
  margin:10px;


}
</style>
<template>
  <div id="aap">
    <div class="box">
       <wc-keyboard 
        placeholder="询问服务员后输入"
        inter="5"
        decimal="2"

        v-model="val"/>    


    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        val: ''
      }
    }
  }
</script>