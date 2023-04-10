<template>
  <div class="header-container">
    <h1>Footer</h1>
    <nav class="links-container"></nav>
    <section class="action-buttons">
      <button class="signin">Entrar</button>
      <button class="signup">Cadastro</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  components: {},
  data: () => {
    return {
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
};
</script>

<style></style>
