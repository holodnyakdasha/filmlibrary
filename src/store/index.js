import Vue from 'vue'
import Vuex from 'vuex'

import task from './modules/task'
import tag from './modules/tag'
import user from './modules/user'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    common,
    user,
    task,
    tag
  }
})
