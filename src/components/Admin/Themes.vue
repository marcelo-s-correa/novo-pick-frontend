<template>
  <h3>Temas</h3>
</template>

<script>
export default {
  name: "ThemesPage",
  components: {},
  data() {
    return {
      pageTitle: "Temas | Pick ",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style></style>
