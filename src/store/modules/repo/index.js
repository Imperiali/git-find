import {searchUserRepo} from "../../../services/repos";

export const state = {
  repos: ''
}

export const getters = {
  getRepos: state => {
    return [...state.repos].sort((repo1, repo2) => {
      // Verify which repository has more stars
      if (repo1.stargazers_count > repo2.stargazers_count) {
        return -1
      }
      if (repo1.stargazers_count < repo2.stargazers_count) {
        return 1
      }
      return 0
    })
  }
}

export const mutations = {
  FETCH_REPOS(state, payload) {
    // Call service, return empty if something goes wrong, otherwise return the response data
    payload.rootData.loading = true
    payload.data.then(response => {
      payload.rootData.loading = false
      if (response.status === 200) {
        state.repos = response.data
      } else {
        state.repos = ''
      }
    })
  }
}

export const actions = {
  fetchRepos({commit, rootState}, login) {
    const repos = searchUserRepo(login)
    commit('FETCH_REPOS', {data: repos, rootData: rootState})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
