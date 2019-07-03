import Vue from 'vue'
import App from './App.vue'
import VueFlexLayout from './components/index.js'

Vue.use(VueFlexLayout, {
  columns: 24,
  gutter: 16,
  maxWidth: 1420,
  breakpoints: {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
