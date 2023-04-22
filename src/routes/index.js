//MAIN COMPONENTES
import Aboutpage from "@/components/Main/About.vue";
import LandingPage from "@/components/Main/Landing.vue";
import UpdatePage from "@/components/Main/Updates.vue";
import LoginPage from "@/views/Login.vue";
import RegisterPage from "@/views/Register.vue";

import AppMain from "@/views/Main.vue";
import AppAdmin from "@/views/Admin.vue";

import * as VueRouter from "vue-router";
import store from "../store";

//ADMIN COMPONENTES

import DashboardPage from "@/components/Admin/Dashboard.vue";
import UsersPage from "@/components/Admin/Users.vue";
import ThemesPage from "@/components/Admin/Themes.vue";
import QuestionsPage from "@/components/Admin/Questions.vue";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  {
    path: "/",
    component: AppMain,
    children: [
      { path: "/", component: LandingPage },
      { path: "/about", component: Aboutpage },
      { path: "/updates", component: UpdatePage },
    ],
  },
  {
    path: "/admin",
    component: AppAdmin,
    children: [
      { path: "", component: DashboardPage },
      { path: "users", component: UsersPage },
      { path: "themes", component: ThemesPage },
      { path: "questions", component: QuestionsPage },
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
