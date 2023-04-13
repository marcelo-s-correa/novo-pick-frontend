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
      // Lógica de login
      // Aqui você pode chamar as mutações para atualizar o estado do Vuex com o token de autenticação e informações do usuário
      commit("SET_TOKEN", token);
      commit("SET_USER", user);
    },
    logout({ commit }) {
      // Lógica de logout
      // Aqui você pode chamar as mutações para limpar o estado do Vuex
      commit("LOGOUT");
    },
  },
  getters: {
    isLoggedIn(state) {
      // Getter para verificar se o usuário está logado
      return !!state.token;
    },
  },
};
