<template>
  <div class="singer" @scroll="_onScroll" ref="singer">
    <ul class="singer-list" ref="singerList">
      <li class="singer-group" v-for="(item,index) in singers" :key="index" :data-scrollIndex="index" >
        <h2 :class="['title', { 'fixed-top': index === 0 }]">{{ item.index }}</h2>
        <ul class="son-list">
          <li v-for="i in item.data" :key="i.singer_id">
            <img :src="i.singer_pic">
            <span>{{ i.singer_name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="letter-search">
      <div :class="{'active': currentIndex === index }" v-for="(item, index) in firstLetter" :key="index" @click="_scrollTo(index)">{{ item }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/variable.scss';
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  overflow: auto;
  width: 100%;
  .singer-list {
    .singer-group {
      color: #ffffff;
      .title {
        padding-left: 20px;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        font-weight: 500;
        background: #999999;
      }
      .fixed-top {
        position: fixed;
      }
      .son-list {
        padding: 20px 0 20px 20px;
        li {
          & + li {
            margin-top: 20px;
          }
          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            vertical-align: middle;
          }
          span {
            margin-left: 15px;
            font-size: 14px;
          }
        }
      }
    }
  }
  .letter-search {
    position: fixed;
    top: 150px;
    right: 0;
    padding: 5px 3px;
    background: #999999;
    font-size: 12px;
    text-align: center;
    border-radius: 10px 0 0 10px;
    color: #ffffff;
    > div {
      margin: 3px 0;
    }
    .active {
      color: $color-theme;
    }
  }
}

</style>

<script>
import { getSinger } from '@/api/singer'
import { ERR_OK } from '@/api/config'
import '@/lib/pinyinUtil.js'
export default {
  data () {
    return {
      singers: [],
      currentIndex: 0
    }
  },
  created () {
    this._getSinger()
  },
  mounted () {
    this.singerList = this.$refs['singerList'].children
  },
  computed: {
    firstLetter() {
      return this.singers.map((item) => item.index.slice(0, 1))
    }
  },
  methods: {
    _getSinger() {
      getSinger().then((res) => {
        if (res.data.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.singerList.data.singerlist)
        }
      })
    },
    _normalizeSinger(data) {
      // console.log(data)
      let arr = [{
        index: '热门',
        data: data.slice(0, 10)
      }]
      let arr2 = []
      let obj = Object.create(null)

      // 根据首字母分类
      for (let i = 0; i < data.length; i++) {
        let firstLetter
        // 判断是不是汉字
        if (data[i].singer_name.charCodeAt(0) > 255) {
          firstLetter = window.pinyinUtil.getFirstLetter(data[i].singer_name).slice(0, 1)
        } else {
          firstLetter = data[i].singer_name.slice(0, 1)
        }
        if (!(firstLetter in obj)) {
          obj[firstLetter] = [data[i]]
        } else {
          obj[firstLetter].push(data[i])
        }
      }

      for (const key in obj) {
        arr2.push({
          index: key,
          data: obj[key]
        })
      }
      // 排序
      arr2.sort((a, b) => {
        return a.index.charCodeAt(0) - b.index.charCodeAt(0)
      })

      return arr.concat(arr2)
    },
    _onScroll(e) {
      // 判断当前滚动位置, 设置fixed-title
      Array.prototype.forEach.call(this.singerList, (element, index) => {
        if (element.offsetTop < this.$refs['singer'].scrollTop + this.$refs['singer'].offsetHeight / 2) {
          this.currentIndex = index
          // todo: title fixed
        }
      });
    },
    _scrollTo(index) {
      Array.prototype.forEach.call(this.singerList, (element) => {
        if (+element.getAttribute('data-scrollIndex') === index) {
          this.currentIndex = index
          this.$refs['singer'].scrollTop = element.offsetTop
        }
      });
    }
  }
}
</script>