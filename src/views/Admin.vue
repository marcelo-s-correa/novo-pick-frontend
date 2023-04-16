<template>
  <div class="content">
    <AppHeader />
    <router-view class="router-view" />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/Footer.vue";
import AppHeader from "@/components/Header.vue";

export default {
  name: "AppAdmin",
  components: { AppHeader, AppFooter },
};
</script>
