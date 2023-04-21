<template>
  <div class="content">
    <AppHeader />
    <router-view class="router-view" />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/Main/Footer.vue.js";
import AppHeader from "@/components/Main/Header.vue.js";

export default {
  name: "AppAdmin",
  components: { AppHeader, AppFooter },
};
</script>
