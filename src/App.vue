<template>
  <div id="app">
    <m-header/>
    <tab/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>
import MHeader from '@/components/MHeader'
import Tab from '@/components/Tab'
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

