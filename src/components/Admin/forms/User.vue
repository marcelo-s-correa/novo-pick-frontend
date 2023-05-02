<template>
  <div class="form-content">
    <v-card-title>Usuário</v-card-title>
    <v-form @submit.prevent="registerUser">
      <v-text-field v-model="name" label="Nome" required></v-text-field>
      <v-text-field
        v-model="email"
        label="E-mail"
        type="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="username"
        label="Nome de usuário"
        required
      ></v-text-field>
      <input
        placeholder="Data de nascimento"
        class="date-picker"
        type="date"
        v-model="birthdate"
        label="Data de nascimento"
      />
      <v-select
        v-model="isAdmin"
        :items="adminOptions"
        label="Administrador"
        item-value="value"
        item-title="title"
      ></v-select>
      <v-select
        v-model="selectedState"
        :items="states"
        label="Selecione um estado"
        item-value="value"
        item-title="sigla"
        @update:model-value="getCities(selectedState)"
      ></v-select>
      <v-select
        v-model="selectedCity"
        :items="cities"
        label="Selecione uma cidade"
        item-value="value="
        item-title="nome"
      ></v-select>
      <v-text-field
        clearable
        v-model="password"
        label="Senha"
        type="password"
        required
      ></v-text-field>
      <v-text-field
        clearable
        v-model="confirmPassword"
        label="Confirme a senha"
        type="password"
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
  name: "UserForm",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pageTitle: "Pergunta | Pick ",
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      birthdate: null,
      isAdmin: false,
      selectedCity: null,
      selectedState: null,
      cities: [],
      states: [],
      adminOptions: [
        {
          value: true,
          title: "Sim",
        },
        {
          value: false,
          title: "Não",
        },
      ],
    };
  },
  methods: {
    async registerUser() {
      const userData = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        birthdate: this.birthdate,
        city: this.selectedCity,
        state: this.selectedState,
      };

      try {
        const response = await api.post("/users", userData);
        showToast(
          "Cadastro realizado com sucesso ! Faça login para continuar !",
          3000,
          "right",
          "top",
          "green"
        );
        return response;
      } catch (error) {
        showToast(
          "Falha ao realizar cadastro ! Favor tentar novamente.",
          3000,
          "right",
          "top",
          "red"
        );
        console.log(error);
      }
    },
    async getStates() {
      try {
        const response = await api.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        response.data.forEach((state) => {
          const stateData = {
            value: state.sigla,
            sigla: state.sigla,
          };
          this.states.push(stateData);
        });
      } catch (error) {
        console.log("error ao buscar estados");
      }
    },
    async getCities(state) {
      try {
        const response = await api.get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
        );
        response.data.forEach((citie) => {
          const citieData = {
            value: citie.nome,
            nome: citie.nome,
          };
          this.cities.push(citieData);
        });
      } catch (error) {
        console.log("error ao buscar cidades");
      }
    },
  },
  mounted() {
    this.getStates();
    document.title = this.pageTitle;
  },
};
</script>

<style>
.form-content {
  padding: 32px 64px;
}

.date-picker {
  width: 100%;
  height: 48px;
  padding: 12px;
  height: 56px;
  border-radius: 6px 6px 0px 0px;
  background-color: #ececec;
  border-bottom: 1.8px solid #b3b3b3;
  margin-bottom: 24px;
  color: #888888;
}
</style>
