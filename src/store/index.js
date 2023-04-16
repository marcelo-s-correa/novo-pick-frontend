import auth from "./modules/auth";
import { createStore } from "vuex";

const store = new createStore({
  modules: {
    auth,
  },
});

export default store;
