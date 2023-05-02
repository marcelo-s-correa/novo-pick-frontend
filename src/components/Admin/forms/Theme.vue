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
import { showToast } from "@/utils/toastfy";

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
      title: null,
      description: null,
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
        showToast(
          "Tema cadastrado com sucesso !",
          3000,
          "right",
          "top",
          "green"
        );
        if (response) {
          this.$router.push("/admin/themes");
        }
      } catch (err) {
        showToast(
          "Falha ao cadastrar novo tema !",
          3000,
          "right",
          "top",
          "green"
        );
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
