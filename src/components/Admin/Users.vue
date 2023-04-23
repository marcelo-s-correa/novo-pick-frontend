<template>
  <h1>Usuários</h1>
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

<style></style>
