<template>
  <footer class="footer">
    <nav class="nav-links">
      <router-link v-for="link in navLinks" :key="link.url" :to="link.url">{{
        link.label
      }}</router-link>
    </nav>
    <p class="copyright">
      © 2023 Nome da Empresa. Todos os direitos reservados.
    </p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      navLinks: [
        {
          label: "Ínicio",
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
};
</script>

<style scoped src="@/styles/footer.css" />
