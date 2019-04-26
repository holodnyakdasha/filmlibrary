import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Login from '../components/Login/Login.vue'
import Registration from '../components/Registration/Registration.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})
