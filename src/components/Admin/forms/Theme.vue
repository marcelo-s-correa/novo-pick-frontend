<template>
  <div class="form-content">
    <v-card-title>Tema</v-card-title>
    <v-form
      @submit.prevent="
        {
          {
            this.id ? this.updateTheme(this.id) : this.newTheme();
          }
        }
      "
    >
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
  data() {
    return {
      pageTitle: "Pergunta | Pick ",
      id: this.$route.params.id,
      title: null,
      description: null,
    };
  },
  methods: {
    newTheme() {
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
    async updateTheme(id) {
      const updateData = {
        title: this.title,
        description: this.description,
      };

      try {
        const response = await api.put(`/themes/${id}`, updateData);
        showToast(
          "Tema autalizado com sucesso !",
          3000,
          "right",
          "top",
          "green"
        );
        this.$router.push("/admin/themes");
        return response;
      } catch (error) {
        showToast(
          "Falha ao atualizar Tema ! Favor tentar novamente.",
          3000,
          "right",
          "top",
          "red"
        );
        console.log(error);
      }
    },
    async getThemeData(id) {
      try {
        const response = await api.get(`/themes/${id}`);
        this.title = response.data.title;
        this.description = response.data.description;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    document.title = this.pageTitle;

    if (this.id) {
      this.getThemeData(this.id);
    }
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
