import Vue from 'vue'
import Vuex from 'vuex'
import {searchUser} from './services/user'
import {searchUserRepo} from "./services/repos";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    repos: "",
    loading: false
  },
  getters: {
    getUser: state => {
      return state.user
    },
    getRepos: state => {
      return state.repos
    },
    getLoading: state => {
      return state.loading
    }
  },
  mutations: {
    FETCH_REPOS(state, payload){
      state.loading = true
      payload.then(response => {
        state.loading = false
        if (response.status === 200){
          state.repos = response.data
        } else {
          state.repos = ''
        }
      })
    },
    FETCH_USER(state, payload) {
      state.loading = true
      payload.then(response => {
        state.loading = false
        if (response.status === 200){
          state.user = response.data
        } else {
          state.user = ''
        }
      })
    }
  },
  actions: {

  }
})
