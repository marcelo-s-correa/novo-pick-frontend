import Aboutpage from "@/components/About.vue";
import LandingPage from "@/components/Landing.vue";
import UpdatePage from "@/components/Updates.vue";
import LoginPage from "@/views/Login.vue";
import AppMain from "@/views/Main.vue";
import * as VueRouter from "vue-router";
import store from "../store";

const routes = [
  { path: "/login", component: LoginPage },
  {
    path: "/",
    component: AppMain,
    children: [
      { path: "/", component: LandingPage },
      { path: "/about", component: Aboutpage },
      { path: "/updates", component: UpdatePage },
    ],
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((route) => route.meta.requiresAuth) &&
    !store.getters.isLoggedIn
  ) {
    next("/login");
  } else {
    next();
  }
});
