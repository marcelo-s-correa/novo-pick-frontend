<template>
  <div class="form-content">
    <v-card-title>Tema</v-card-title>
    <v-form @submit.prevent="newQuestion">
      <v-text-field
        v-model="title"
        label="Titulo"
        type="text"
        required
      ></v-text-field>
      <v-text-field
        v-model="description"
        label="Descrição"
        type="text"
        required
      ></v-text-field>

      <v-btn type="submit" color="primary">Salvar</v-btn>
    </v-form>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "ThemeForm",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pageTitle: "Pergunta | Pick ",
    };
  },
  methods: {
    newQuestion() {
      const ThemeData = {
        title: this.title,
        description: this.description,
      };

      ThemeData.alternatives = JSON.stringify(this.alternatives);

      try {
        const response = api.post("/themes", ThemeData);
        return response;
      } catch (err) {
        console.log("Error", err);
      }
    },
  },
  mounted() {
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
</style>
