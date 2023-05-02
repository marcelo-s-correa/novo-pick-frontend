<template>
  <div class="form-content">
    <v-card-title>Pergunta</v-card-title>
    <v-form @submit.prevent="newQuestion">
      <v-text-field
        v-model="title"
        label="Titulo"
        type="text"
        required
      ></v-text-field>
      <v-select
        v-model="difficulty"
        :items="difficulties"
        label="Selecione uma dificuldade"
        item-value="value"
        item-title="title"
      ></v-select>
      <v-select
        v-model="themeId"
        :items="themes"
        label="Selecione um tema"
        item-value="value"
        item-title="title"
      ></v-select>
      <div class="alternatives">
        <h4>Alternativas</h4>
        <v-text-field
          v-model="alternatives.a"
          label="Alternativa A"
          type="text"
          required
        ></v-text-field>
        <v-text-field
          v-model="alternatives.b"
          label="Alternativa B"
          type="text"
          required
        ></v-text-field>
        <v-text-field
          v-model="alternatives.c"
          label="Alternativa C"
          type="text"
          required
        ></v-text-field>
        <v-text-field
          v-model="alternatives.d"
          label="Alternativa D"
          type="text"
          required
        ></v-text-field>
        <v-select
          v-model="alternatives.correctOption"
          :items="alternativesType"
          label="Selecione a correta"
        ></v-select>
      </div>

      <v-btn type="submit" color="primary">Salvar</v-btn>
    </v-form>
  </div>
</template>

<script>
import api from "@/services/api";
import { showToast } from "@/utils/toastfy";

export default {
  name: "QuestionForm",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pageTitle: "Pergunta | Pick ",
      themes: [],
      alternativesType: ["a", "b", "c", "d"],
      difficulties: [
        {
          value: "easy",
          title: "Fácil",
        },
        {
          value: "medium",
          title: "Médio",
        },
        {
          value: "hard",
          title: "Difícil",
        },
        {
          value: "very hard",
          title: "Muito Difícil",
        },
      ],
      title: null,
      difficulty: null,
      alternatives: [
        { a: null },
        { b: null },
        { c: null },
        { d: null },
        { correctOption: null },
      ],
      themeId: null,
    };
  },
  methods: {
    newQuestion() {
      const QuestionData = {
        title: this.title,
        difficulty: this.difficulty,
        alternatives: [
          { a: this.alternatives.a },
          { b: this.alternatives.c },
          { c: this.alternatives.d },
          { d: this.alternatives.e },
          { correctOption: this.correctOption },
        ],
        themeId: this.themeId,
      };

      QuestionData.alternatives = JSON.stringify(this.alternatives);

      try {
        const response = api.post("/questions", QuestionData);
        showToast(
          "Pergunta cadastrada com sucesso !",
          3000,
          "right",
          "top",
          "green"
        );
        if (response) {
          this.$router.push("/admin/questions	");
        }
      } catch (err) {
        showToast("Falha ao cadastrar pergunta", 3000, "left", "top", "red");
        console.log("Error", err);
      }
    },
    async getThemes() {
      const response = await api.get("/themes");

      response.data.forEach((theme) => {
        const themeData = {
          title: theme.title,
          value: theme.id,
        };
        this.themes.push(themeData);
      });
    },
  },
  mounted() {
    this.getThemes();
    document.title = this.pageTitle;
  },
};
</script>

<style>
h4 {
  margin: 12px;
}
.form-content {
  padding: 32px 64px;
}

.alternatives {
  background-color: aliceblue;
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 32px;
}
</style>
