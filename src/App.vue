<style>

.box{
  border:1px solid #ccc;
  height: 45px;
  padding:10px;
  margin:10px;
}

</style>
<template>
  <div id="aap">
    <div class="box">
      <key-board @input="keyInput"/>
    </div>
    
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