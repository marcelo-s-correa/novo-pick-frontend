export default {
  state: {
    token: null,
    user: null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    LOGOUT(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    login({ commit }, { token, user }) {
      commit("SET_TOKEN", token);
      commit("SET_USER", user);
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
};
