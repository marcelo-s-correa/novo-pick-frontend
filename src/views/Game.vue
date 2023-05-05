<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-tabs centered color="grey-darken-2">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
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
    links: ["Game", "Perfil", "Ranking"],
  }),
  mounted() {
    document.title = this.pageTitle;
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
