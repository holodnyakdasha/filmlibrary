export default {
  state:{
    tags: [
      {
        title: 'Comedy',
        use: false

      },
      {
        title: 'Drama',
        use: false
      },
      {
        title: 'Adventures',
        use: false
      }
    ]
  },
  mutations:{
      newTag(state, payload){
        state.tags.push(payload)
      }
  },
  actions:{
    newTag({commit}, payload){
      commit('newTag', payload)
    }
  },
  getters:{

    tags(state){
      return state.tags
    }
  }

}
