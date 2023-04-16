<template>
  <h3>Updates Page</h3>
</template>

<script>
export default {
  name: "UpdatesPage",
  components: {},
  data() {
    return {
      pageTitle: "Atualizações | Pick ",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style></style>
