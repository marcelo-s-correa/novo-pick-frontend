//MAIN COMPONENTES
import Aboutpage from "@/components/Main/About.vue";
import LandingPage from "@/components/Main/Landing.vue";
import UpdatePage from "@/components/Main/Updates.vue";
import LoginPage from "@/views/Login.vue";
import RegisterPage from "@/views/Register.vue";

import AppMain from "@/views/Main.vue";
import AppAdmin from "@/views/Admin.vue";
import AppGame from "@/views/Game.vue";

import * as VueRouter from "vue-router";
import store from "../store";

//ADMIN COMPONENTES

import DashboardPage from "@/components/Admin/Dashboard.vue";
import UsersPage from "@/components/Admin/Users.vue";
import ThemesPage from "@/components/Admin/Themes.vue";
import QuestionsPage from "@/components/Admin/Questions.vue";
import QuestionForm from "@/components/Admin/forms/Question.vue";
import ThemeForm from "@/components/Admin/forms/Theme.vue";

//GAME COMPONENTES

import GameMap from "@/components/Game/GameMap.vue";

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
      { path: "question", component: QuestionForm },
      { path: "theme", component: ThemeForm },
    ],
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem("auth"));

      const isAdmin = user ? user.userData.isAdmin : false;
      console.log("isAdmin", isAdmin);

      if (isAdmin) {
        next();
      } else if (user) {
        next("/game");
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/game",
    component: AppGame,
    children: [{ path: "", component: GameMap }],
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem("auth"));

      if (user) {
        next();
      } else {
        next("/login");
      }
    },
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
