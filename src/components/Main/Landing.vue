<template>
  <h3>Landingpage</h3>
</template>

<script>
export default {
  name: "LandingPage",
  components: {},
  data() {
    return {
      pageTitle: "Ínicio | Pick ",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style></style>
