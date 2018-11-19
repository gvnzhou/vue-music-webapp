<template>
  <div class="nav">
    <router-link tag="div" :to="{ name: 'recommend'}" :class="{active: $route.name === 'recommend'}">
      <em>推荐</em>
    </router-link>
    <router-link tag="div" :to="{ name: 'singer'}" :class="{active: $route.name === 'singer'}">
      <em>歌手</em>
    </router-link>
    <router-link tag="div" :to="{ name: 'rank'}" :class="{active: $route.name === 'rank'}">
      <em>排行</em>
    </router-link>
    <router-link tag="div" :to="{ name: 'search'}" :class="{active: $route.name === 'search'}">
      <em>搜索</em>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/variable.scss';
.nav {
  // position: fixed;
  // top: 45px;
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  background: $color-theme;
  font-size: $font-size-medium;
  color: #ffffff;
  border-bottom: 1px solid #a40011;
  z-index: 99;
  div {
    em {
      padding: 3px 15px;
      font-style: initial;
    }
  }
  .active {
    em {
      background: rgba(0, 0, 0, .3);
      border-radius: 12px;
    }
  }
}

</style>

<script>
export default {
  
}
</script>