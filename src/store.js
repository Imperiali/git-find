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

  },
  actions: {

  }
})
