import user from "./modules/user";
import repo from "./modules/repo";

export default {
  modules: {
    user,
    repo
  },

  state: {
    loading: false
  },
  getters: {
    getLoading: state => {
      return state.loading
    }
  },

}
