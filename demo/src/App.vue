<template>
  <div>
    <h1>{{changeStr}}</h1>
    <h2 v-text='str'></h2>
    <input type="text" :value="str">
  </div>
</template>

<script>
export default{
  data (){
    return {
      str:'复习vue'
    }
  },
  computed:{
    changeStr(){
      return this.str.split('').reverse().join('');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
