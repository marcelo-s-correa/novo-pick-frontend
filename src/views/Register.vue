<template>
  <div class="register-page">
    <div class="register-form-container">
      <h1 class="register-title">Cadastro</h1>
      <form class="register-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nomeCompleto" class="form-label">Nome completo</label>
          <input
            id="nomeCompleto"
            v-model="nomeCompleto"
            type="text"
            class="form-input"
            required
          />
        </div>

        <div class="form-group">
          <label for="dataNascimento" class="form-label"
            >Data de Nascimento</label
          >
          <input
            id="dataNascimento"
            v-model="dataNascimento"
            type="date"
            class="form-input"
            required
          />
        </div>

        <div class="form-group">
          <label for="nomeUsuario" class="form-label">Nome de Usuário</label>
          <input
            id="nomeUsuario"
            v-model="nomeUsuario"
            type="text"
            class="form-input"
            required
          />
        </div>

        <div class="form-group">
          <label for="email" class="form-label">E-mail</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-input"
            required
          />
        </div>

        <div class="form-group">
          <label for="senha" class="form-label">Senha</label>
          <input
            id="senha"
            v-model="senha"
            type="password"
            class="form-input"
            required
          />
        </div>

        <div class="form-group">
          <label for="confirmarSenha" class="form-label">Confirmar Senha</label>
          <input
            id="confirmarSenha"
            v-model="confirmarSenha"
            type="password"
            class="form-input"
            required
          />
        </div>

        <button type="submit" class="register-button">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerPage",
  data() {
    return {
      pageTitle: "Cadastro | Pick ",
      nomeCompleto: "",
      dataNascimento: "",
      nomeUsuario: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },

  methods: {
    submitForm() {
      if (this.senha === this.confirmarSenha) {
        const dados = {
          nomeCompleto: this.nomeCompleto,
          dataNascimento: this.dataNascimento,
          nomeUsuario: this.nomeUsuario,
          email: this.email,
          senha: this.senha,
        };
        console.log(dados);
      } else {
        alert("As senhas não coincidem. Por favor, verifique novamente.");
      }
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

.register-form-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 64px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 400px;
}

.register-form input {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.register-button {
  display: block;
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
