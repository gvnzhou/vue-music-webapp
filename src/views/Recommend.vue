<template>
  <div class="recommand">
    <div class="slider-container" v-if="recommend.length">
      <slider>
        <div v-for="item in recommend" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </div>
      </slider>
    </div>
    <h2>热门歌单推荐</h2>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import { getRecommend } from '@/api/recommend'
import { ERR_OK } from '@/api/config'
import Slider from '@/base/slider'
export default {
  data () {
    return {
      recommend: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommend = res.data.slider
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>