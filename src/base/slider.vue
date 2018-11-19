<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <div :class="['dot', currentPageIndex === index ? 'active':'']" v-for="(item,index) in dots" :key="index"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/mixin.scss';
@import '@/sass/variable.scss';
.slider {
  position: relative;
  overflow: hidden;
  .slider-group {
    position: relative;
    @include clearfix;
    .slider-item {
      float: left;
      font-size: 0;
      a {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
  .dots {
    position: absolute; 
    display: flex;
    justify-content: center;
    bottom: 10px;
    width: 100%;
    .dot {
      margin: 0 5px;
      width: 10px;
      height: 10px;
      background: rgba(255, 255, 255, .3);
      border-radius: 50%;
    }
    .active {
      background: $color-theme;
    }
  }
}
</style>


<script>
import { addClass } from '@/common/dom'
import BScroll from 'better-scroll'
export default {
  name: 'slider',
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  props: {
    'loop': {
      type: Boolean,
      default: true
    },
    'autoPlay': {
      type: Boolean,
      default: true
    },
    'interval': {
      type: Number,
      default: 3000
    }
  },
  mounted () {
    setTimeout(() => {
      this._initStyle()
      this._initDots()
      this._initSlider()
      if (this.autoPlay) {
        this._play()
      }
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._initStyle(true)
        this.slider.refresh()
      })
    }, 20)
    
  },
  destroyed () {
    console.log(111)
    clearTimeout(this.timer)
  },
  methods: {
    _initStyle(isResize) {
      this.children = this.$refs.sliderGroup.children

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      
      Array.prototype.forEach.call(this.children, (item => {
        addClass(item, 'slider-item')
        item.style.width = sliderWidth + 'px'
        width += sliderWidth
      }))

      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }

      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.3,
          snapSpeed: 400
      })

      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        // console.log(this.slider.getCurrentPage().pageX)

        if (this.loop) {
          pageIndex -= 1
        }
        this.currentPageIndex = pageIndex

        if (this.autoPlay) {
          clearTimeout(this.timer)
          this._play()
        }
      })
    },
    _play() {
      let pageIndex = this.currentPageIndex + 1

      if (this.loop) {
        pageIndex += 1
      }

      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400)
      }, this.interval)
    }
  }
}
</script>
