<template>
  <h3>Perguntas</h3>
</template>

<script>
export default {
  name: "QuestionsPage",
  components: {},
  data() {
    return {
      pageTitle: "Perguntas | Pick ",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style></style>
