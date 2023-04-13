import auth from "./modules/auth";
import { createStore } from "vuex";

const store = new createStore({
  modules: {
    auth, // Registre o módulo de store de autenticação
  },
});

export default store;
