<template>
  <table>
    <thead>
      <tr>
        <th class="table-header">Id</th>
        <th class="table-header">Titulo</th>
        <th class="table-header">Dificuldade</th>
        <th class="table-header">Alternativas</th>
        <th class="table-header">Editar</th>
        <th class="table-header">Deletar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td class="table-id">{{ item.id }}</td>
        <td class="table-data">{{ item.title }}</td>
        <td class="table-data">
          {{ this.translateDifficulty(item.difficulty) }}
        </td>
        <td class="table-data">Alternativas</td>
        <td class="table-data"><i class="fa fa-pencil table-icon"></i></td>
        <td class="table-data"><i class="fa fa-trash table-icon"></i></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "QuestionList",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    translateDifficulty(difficulty) {
      switch (difficulty) {
        case "easy":
          return "Fácil";
        case "medium":
          return "Medio";
        case "hard":
          return "Dificil";
        case "very hard":
          return "Dificil";
        default:
          return difficulty;
      }
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped src="@/styles/components/DataTable.css"></style>
