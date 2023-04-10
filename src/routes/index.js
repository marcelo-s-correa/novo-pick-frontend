import * as VueRouter from "vue-router";
import LandingPage from "../views/Landing.vue";
import Aboutpage from "../views/About.vue";
import UpdatePage from "../views/Updates.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/about", component: Aboutpage },
  { path: "/updates", component: UpdatePage },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
