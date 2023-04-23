<template>
  <div class="list-content">
    <QuestionList v-bind:data="questionsList" />
  </div>
</template>

<script>
import QuestionList from "@/components/DataTables/QuestionList.vue";

export default {
  name: "QuestionsPage",
  components: {
    QuestionList,
  },
  data() {
    return {
      pageTitle: "Perguntas | Pick ",
      questionsList: [
        {
          id: 1,
          titulo: "Qual é o nome da sua empresa?",
          dificuldade: "Fácil",
          alternativas: [
            {
              id: 1,
              texto: "Pick",
              isCorrect: true,
            },
            {
              id: 2,
              texto: "Result",
              isCorrect: false,
            },
            {
              id: 1,
              texto: "tres",
              isCorrect: false,
            },
          ],
        },
        {
          id: 2,
          titulo: "Teste da empresa",
          dificuldade: "Médio",
          alternativas: [
            {
              id: 1,
              texto: "Pick",
              isCorrect: true,
            },
            {
              id: 2,
              texto: "Result",
              isCorrect: false,
            },
            {
              id: 1,
              texto: "tres",
              isCorrect: false,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style>
.list-content {
  padding: 64px;
}
</style>
