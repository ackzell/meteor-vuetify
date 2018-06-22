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
  mutations: {}
})

export default store
