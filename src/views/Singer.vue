<template>
  <div class="singer">
    <ul class="singer-list">
      <li class="singer-group">
        <h2 class="title">热</h2>
        <ul class="">
          <li>XXX</li>
          <li>XXX</li>
          <li>XXX</li>
        </ul>
      </li>
    </ul>
    <div class="letter-search">
      <div>热</div>
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.singer-list {
  border: 1px solid red;
  .singer-group {
    color: #ffffff;
    .title {
      font-size: 18px;
      font-weight: 100;
      background: #999999;
    }
  }
}
</style>

<script>
import { getSinger } from '@/api/singer'
export default {
  data () {
    return {
      singers: []
    }
  },
  created () {
    this._getSinger()
  },
  methods: {
    _getSinger() {
      getSinger().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>