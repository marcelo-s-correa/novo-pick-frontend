import { createApp } from "vue";
import "@/styles/global.css";

import store from "@/store";
import App from "./App.vue";
import { router } from "./routes";

createApp(App).use(store).use(router).mount("#app");
