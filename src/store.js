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
      return [...state.repos].sort((repo1, repo2) => {
        // Verify which repository has more stars
        if (repo1.stargazers_count > repo2.stargazers_count){return -1}
        if (repo1.stargazers_count < repo2.stargazers_count){return 1}
        return 0
      })
    },
    getLoading: state => {
      return state.loading
    }
  },
  mutations: {
    FETCH_REPOS(state, payload){
      // Call service, return empty if something goes wrong, otherwise return the response data
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
      // Call service, return empty if something goes wrong, otherwise return the response data
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
    fetchUser({commit}, login) {
      const user = searchUser(login)
      commit('FETCH_USER', user)
    },
    fetchRepos({commit}, login) {
      const repos = searchUserRepo(login)
      commit('FETCH_REPOS', repos)
    }
  }
})
