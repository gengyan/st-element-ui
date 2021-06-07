<template>
  <div id="test">
    <img alt="Vue logo" src="./assets/logo.png">
    <stTest msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import stTest from './components/stTest.vue'

export default {
  name: 'App',
  components: {
    stTest
  }
}
</script>

<style>
#test {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: .26rem;
}
*{
  margin: 0;
  padding: 0;
}
</style>
