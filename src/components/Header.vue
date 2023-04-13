<template>
  <div class="header-container">
    <h1>Pick</h1>
    <nav class="links-container"></nav>
    <section class="action-buttons">
      <button class="signin">Entrar</button>
      <button class="signup">Cadastro</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
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

<style>
div.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  gap: 32px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
}
</style>
