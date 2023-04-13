<template>
  <div class="footer-container">
    <div class="content">
      <div class="conteudo-esquerdo">
        <h1>Pick</h1>
        <div class="links"></div>
      </div>
      <img class="ugb-logo" src="../assets/ugb-logo.png" alt="UGB-FERP" />
    </div>
    <div class="sub-footer">
      <strong>Copyright 2023 | S.I UGB FERP</strong>
    </div>
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

<style>
div.footer-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  height: 250px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
}

div.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
  background-color: blue;
}

img.ugb-logo {
  max-width: 115px;
  max-height: 135px;
}

div.conteudo-esquerdo {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 110px;
  background-color: yellow;
}

div.sub-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #fafafa;
  position: relative;
  bottom: 0;
}
</style>
