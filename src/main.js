import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router/index'
import store from './store/index'
import Uimini from 'uimini/dist/css/uimini.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'


Vue.use(Uimini)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    var config = {
      apiKey: 'AIzaSyD1ETic7SJiUnwtZ07JzNB4rEDUc8OjA8Q',
      authDomain: 'film-library-f3da3.firebaseapp.com',
      databaseURL: 'https://film-library-f3da3.firebaseio.com',
      projectId: 'film-library-f3da3',
      storageBucket: 'film-library-f3da3.appspot.com',
      messagingSenderId: '469621284452'
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.$store.dispatch('loggedUser', user)
      }

      this.$store.dispatch('loadTasks')
    })
  }
})
