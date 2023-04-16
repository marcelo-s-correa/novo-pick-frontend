import { createApp } from "vue";
import "@/styles/global.css";
import store from "@/store";
import App from "./App.vue";
import { router } from "./routes";
import { VIcon } from "vue-icons";

const pickApp = createApp(App);

pickApp.use(store);
pickApp.use(router);
pickApp.mount("#app");
pickApp.component("VIcon", VIcon);
