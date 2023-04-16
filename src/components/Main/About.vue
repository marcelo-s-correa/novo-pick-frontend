<template>
  <h3>About Page</h3>
</template>

<script>
export default {
  name: "AboutPage",
  components: {},
  data() {
    return {
      pageTitle: "Sobre | Pick ",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style></style>
