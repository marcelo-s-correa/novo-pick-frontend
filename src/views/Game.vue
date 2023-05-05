<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-tabs centered color="grey-darken-2">
        <v-tab @click="navToTab(link.to)" v-for="link in links" :key="link">
          {{ link.text }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <strong @click="logout">Sair</strong>
    </v-app-bar>
    <div class="game-container">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "AppGame",
  data: () => ({
    pageTitle: "Game | Pick ",
    links: [
      {
        text: "Game",
        icon: "mdi-home",
        to: "/game",
      },
      {
        text: "Perfil",
        icon: "mdi-home",
        to: "/game/profile",
      },
      {
        text: "Ranking",
        icon: "mdi-home",
        to: "/game/ranking",
      },
    ],
  }),
  mounted() {
    document.title = this.pageTitle;
  },
  methods: {
    navToTab(to) {
      this.$router.push(to);
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.game-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
}
</style>
