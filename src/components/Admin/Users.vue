<template>
  <div class="mostra">
    <h1>USUARIOS</h1>
  </div>
</template>

<script>
export default {
  name: "UsersPage",
  components: {},
  data() {
    return {
      pageTitle: "Usuários | Pick ",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style>
.mostra {
  width: 100vw;
  height: 100vh;
  background-color: blue;
}
</style>
