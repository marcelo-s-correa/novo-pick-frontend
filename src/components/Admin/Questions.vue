<template>
  <div class="list-content">
    <QuestionList v-bind:data="questionsList" />
  </div>
</template>

<script>
import QuestionList from "@/components/DataTables/QuestionList.vue";
import api from "@/services/api";

export default {
  name: "QuestionsPage",
  components: {
    QuestionList,
  },
  data() {
    return {
      pageTitle: "Perguntas | Pick ",
      questionsList: null,
    };
  },
  methods: {
    async getQuestions() {
      const response = await api.get("/questions");
      console.log("response", response.data);
      this.questionsList = response.data;
    },
  },
  mounted() {
    this.getQuestions();
    document.title = this.pageTitle;
  },
};
</script>

<style>
.list-content {
  padding: 64px;
}
</style>
