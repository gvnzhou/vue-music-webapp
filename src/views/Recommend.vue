<template>
  <div class="recommend">
    <div class="slider-container" v-if="recommend.length">
      <slider>
        <div v-for="item in recommend" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </div>
      </slider>
    </div>
    <div class="song-container">
      <h2>热门歌单推荐</h2>
      <ul class="song-list" v-if="musicList.length">
        <li v-for="item in musicList" :key="item.tid">
          <div class="cover">
            <img v-lazy="item.cover_url_small">
          </div>
          <div class="title">
            <h3>{{ item.title }}</h3>
            <div class="access-num">播放量：{{ item.access_num / 10 }} 万</div>
          </div>
        </li>
      </ul>
      <loading v-else></loading>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
}
.song-container {
  h2 {
    margin: 15px 0;
    font-size: 18px; 
    text-align-last: center;
    color: #FFFFFF;
    font-weight: 300;
  }
  .song-list {
    li {
      display: flex;
      & + li {
        margin-top: 14px;
      }
      .cover {
        width: 80px;
        text-align: center;
        img {
          width: 80%;
        }
      }
      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        padding: 0 5px;
        font-size: 14px;
        color: #FFFFFF;
        font-weight: 100;
        h3 {
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 5px;
        }
        .access-num {
          color: #999999;
        }
      }
    }
  }
}
</style>

<script>
import { getRecommend, getMusicList } from '@/api/recommend'
import { ERR_OK } from '@/api/config'
import Slider from '@/base/slider'
import Loading from '@/base/loading'
export default {
  data () {
    return {
      recommend: [],
      musicList: []
    }
  },
  created () {
    this._getRecommend()
    this._getMusicList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.data.code === ERR_OK) {
          this.recommend = res.data.data.slider
        }
      })
    },
    _getMusicList() {
      getMusicList().then((res) => {
        if (res.code === ERR_OK) {
          this.musicList = res.playlist.data.v_playlist
        }
      })
    }
  },
  components: {
    Slider,
    Loading
  }
}
</script>