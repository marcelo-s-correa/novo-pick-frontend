import { createApp } from "vue";
import "@/styles/global.css";
import store from "@/store";
import App from "./App.vue";
import { router } from "./routes";
import { VIcon } from "vue-icons";
import "vuetify/dist/vuetify.min.css";
import "toastify-js/src/toastify.css";
import "@mdi/font/css/materialdesignicons.css";

const pickApp = createApp(App);

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

pickApp.use(store);
pickApp.use(router);
pickApp.use(vuetify);
pickApp.component("VIcon", VIcon);
pickApp.mount("#app");
