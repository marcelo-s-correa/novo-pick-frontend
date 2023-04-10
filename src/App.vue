<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  box-sizing: border-box;
  font-size: 14px;
  color: #000;
}
</style>
