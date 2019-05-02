import Vue from 'vue'
import Router from 'vue-router'
import store from'../store'
import Home from '../components/Home/Home.vue'
import Login from '../components/Login/Login.vue'
import Registration from '../components/Registration/Registration.vue'
import Error404 from '../components/Errors/Error404.vue'
import Task from "../components/Task/Task.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter(to, from, next){
        store.getters.checkUser ? next() : next('/login')
      }
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
    },
    {
      path:'/404',
      name:'Error404',
      component: Error404
    },
    {
      path:'/tasks',
      name:'Task',
      component:Task,
      beforeEnter(to, from, next){
        store.getters.checkUser ? next() : next('/login')
      }
    }
  ]
})
