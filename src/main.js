import Vue from 'vue'
import App from './App.vue'
import VueFlexLayout from './components/index.js'

Vue.use(VueFlexLayout, {
  columns: 12,
  gutter: 16,
  maxWidth: 1420,
  breakpoints: {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  guidesToggleKey: 'g',
  colors: {
    debugBorder: 'rgba(0,100,0,.3)',
    debug: [
      '255, 232, 122',
      '163, 221, 122',
      '242, 103, 48',
      '57, 169, 219'
    ],
    guidesLimits: 'rgba(255, 0, 0, 1)',
    guidesContainer: 'rgba(0, 255, 0, 1)',
    guidesMain: 'rgba(0, 155, 255, 0.8)',
    guidesMainBackground: 'rgba(255, 0, 255, 0.1)'
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
