import auth from "./modules/auth";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    auth,
  },
  plugins: [
    createPersistedState({
      key: "auth",
      storage: window.localStorage,
      paths: ["auth"],
    }),
  ],
});

export default store;
