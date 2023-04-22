<template>
  <h3>Painel</h3>
</template>

<script>
export default {
  name: "DashboardPage",
  components: {},
  data() {
    return {
      pageTitle: "Painel | Pick ",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style></style>
