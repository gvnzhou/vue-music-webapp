<template>
  <div id="app">
    <m-header/>
    <m-nav/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
</style>

<script>
import MHeader from '@/components/MHeader'
import MNav from '@/components/MNav'
export default {
  components: {
    MHeader,
    MNav
  }
}
</script>

