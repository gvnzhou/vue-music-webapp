<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/mixin.scss';
.slider {
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

  }
}
</style>


<script>
import { addClass } from '@/common/dom'
export default {
  data () {
    return {

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
      default: 4000
    }
  },
  mounted () {
    this._initStyle()
  },
  methods: {
    _initStyle() {
      this.children = this.$refs.sliderGroup.children

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      
      Array.prototype.forEach.call(this.children, (item => {
        addClass(item, 'slider-item')
        item.style.width = sliderWidth + 'px'
        width += sliderWidth
      }))

      // if (this.autoPlay) {
      //   width += 2 * sliderWidth
      // }

      this.$refs.sliderGroup.style.width = width + 'px'
    }
  },
  _initSlider() {
    
  }
}
</script>
