import Vue from 'vue'
import App from './App'
import router from './router/index'
import Uimini from 'uimini/dist/css/uimini.css'
Vue.use(Uimini)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
