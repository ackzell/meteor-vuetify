import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Tracker } from 'meteor/tracker'

export default {
  state: {
    user: null
  },
  getters: {
    currentUser: state => {
      return state.user
    }
  },
  mutations: {
    UPDATE_USER(state, value) {
      state.user = value
    },
    isUsernameValid(state, value) {
      state.isUsernameValid = value
    },
    LOGOUT(state) {
      state.user = null
    }
  },
  actions: {
    REGISTER_USER(_, formData) {
      Accounts.createUser(formData, error => {
        error ? console.log(error.reason) : console.log('user registered')
      })
    },
    LOGIN({ commit }, formData) {
      Meteor.loginWithPassword(formData.username, formData.password, error => {
        error ? console.log(error.reason) : console.log('user logged in')
        commit('UPDATE_USER', Meteor.user())
      })
    },
    LOGOUT({ commit }) {
      Meteor.logout(() => {
        commit('LOGOUT')
        console.log('user logged out')
      })
    },
    LOAD_USER({ commit }) {
      // see https://forums.meteor.com/t/meteor-userid-returns-an-id-but-meteor-user-returns-undefined/18355/5

      //! Meteor.user() will not be ready right away,
      //! it is reactive so we need to wait for it
      Tracker.autorun(() => {
        if (Meteor.user()) {
          console.log('updating user')
          commit('UPDATE_USER', Meteor.user())
        }
      })
    }
  }
}
