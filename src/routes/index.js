import * as VueRouter from "vue-router";
import LandingPage from "../views/Landing.vue";

const routes = [{ path: "/", component: LandingPage }];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
