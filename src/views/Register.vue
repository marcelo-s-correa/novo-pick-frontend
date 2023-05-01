<template>
  <div class="register-page">
    <div class="register-content">
      <v-card-title>Cadastro</v-card-title>
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
        <v-date-picker
          v-model="birthdate"
          label="Data de nascimento"
        ></v-date-picker>
        <v-select v-model="city" :items="cities" label="Cidade"></v-select>
        <v-select v-model="state" :items="states" label="Estado"></v-select>
        <v-text-field
          v-model="password"
          label="Senha"
          type="password"
          required
        ></v-text-field>
        <v-text-field
          v-model="confirmPassword"
          label="Confirme a senha"
          type="password"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary">Cadastrar</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerPage",
  data() {
    return {
      pageTitle: "Cadastro | Pick ",
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      birthdate: null,
      city: null,
      state: null,
      cities: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"],
      states: ["SP", "RJ", "MG", "RS"],
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },

  methods: {
    registerUser(userData) {
      console.log("UserData", userData);
    },
  },
};
</script>

<style scoped>
.register-page {
  background-image: url("https://i0.wp.com/oedital.com.br/wp-content/uploads/2021/01/6-Historia-do-Brasil.png?ssl=1");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-content {
  background-color: #fff;
  width: 480px;
  padding: 48px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
}
</style>
