import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import FastClick from 'fastclick'

import '@/sass/index.scss'

Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
