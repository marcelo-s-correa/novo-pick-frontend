<template>
  <div class="login-page">
    <div class="login-form">
      <h1>Entrar</h1>
      <input v-model="email" type="email" :placeholder="placeholder" />
      <input v-model="password" type="password" placeholder="Senha" />
      <button @click="loginUser">Entrar</button>
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
        if (response.token) {
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

.selection-login {
  display: flex;
}

.selection-login label {
  color: #3333;
}

.login-form {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 450px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 64px;
}

.login-form h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form input {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.login-form button {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #409d46;
}
</style>
