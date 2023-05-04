<template>
  <div class="login-page">
    <div class="login-content">
      <v-card-title>Entrar</v-card-title>
      <v-form @submit.prevent="loginUser">
        <v-text-field
          v-model="email"
          label="E-mail"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Senha"
          type="password"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary">Entrar</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/services/auth";
import { showToast } from "@/utils/toastfy";

export default {
  name: "LoginPage",
  data() {
    return {
      pageTitle: "Entrar | Pick ",
      email: "",
      password: "",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
  computed: {
    placeholder() {
      return this.loginOption === "username" ? "Nome de usuário" : "Email";
    },
  },
  methods: {
    async loginUser() {
      try {
        const response = await login(this.email, this.password);
        console.log("response", response);
        showToast(
          "Login realizado com sucesso !",
          3000,
          "right",
          "top",
          "green"
        );

        if (this.$store.state.auth.token) {
          this.$router.push("/game");
        }
      } catch (err) {
        showToast("Falha ao realizar login", 3000, "right", "top", "red");
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  background-image: url("https://i0.wp.com/oedital.com.br/wp-content/uploads/2021/01/6-Historia-do-Brasil.png?ssl=1");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-content {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 480px;
  padding: 48px;
  border-radius: 24px;
}
</style>
