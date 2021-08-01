import 'regenerator-runtime'
import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/routes'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})