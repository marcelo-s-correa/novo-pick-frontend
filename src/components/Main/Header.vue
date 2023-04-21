<template>
  <header>
    <h1>Pick</h1>
    <nav class="nav-menu">
      <ul class="nav-links" :class="{ 'nav-active': isNavActive }">
        <li v-for="link in navLinks" :key="link.label">
          <router-link class="link" :to="link.url">
            {{ link.label }}</router-link
          >
        </li>
      </ul>
      <div class="actions">
        <li id="signin">
          <router-link class="action-link" :to="actionLinks[0].url">
            {{ actionLinks[0].label }}</router-link
          >
        </li>
        <li id="signup">
          <router-link class="action-link" :to="actionLinks[1].url">
            {{ actionLinks[1].label }}</router-link
          >
        </li>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isNavActive: false,
      actionLinks: [
        {
          label: "Entrar",
          url: "/login",
        },
        {
          label: "Cadastro",
          url: "/register",
        },
      ],
      navLinks: [
        {
          label: "Ínício",
          url: "/",
        },
        {
          label: "Sobre",
          url: "/about",
        },
        {
          label: "Atualizações",
          url: "/updates",
        },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
  },
};
</script>

<style scoped src="@/styles/header.css"></style>
