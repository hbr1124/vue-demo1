<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/">首页</router-link>
    <router-link to="/A">A页面</router-link>
    <router-link to="/B">B页面</router-link>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
