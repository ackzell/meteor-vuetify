import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import authModule from '/imports/auth/auth.js'

const store = new Vuex.Store({
  modules: {
    auth: authModule
  },
  state: {
    users: []
  },
  mutations: {
    updateUsers(state, value) {
      console.log('users state mutated')
      state.users = value
    }
  }
})

export default store
