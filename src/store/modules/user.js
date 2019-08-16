import {searchUser} from "../../services/user";

export const state = {
  user: ''
}

export const getters = {
  getUser: state => {
    return state.user
  }
}

export const mutations = {
  FETCH_USER(state, payload) {
    // Call service, return empty if something goes wrong, otherwise return the response data
    payload.rootData.loading = true
    payload.data.then(response => {
      payload.rootData.loading = false
      if (response.status === 200) {
        state.user = response.data
      } else {
        state.user = ''
      }
    })
  }
}

export const actions = {
  fetchUser({commit, rootState}, login) {
    const user = searchUser(login)
    commit('FETCH_USER', {data: user, rootData: rootState})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
