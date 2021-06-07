import Vue from 'vue'
import App from './App.vue'
import stToast from './plugin/index.js'

Vue.config.productionTip = false
Vue.use(stToast)

new Vue({
  render: h => h(App),
}).$mount('#app')
