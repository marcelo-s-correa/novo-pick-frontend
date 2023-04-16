<template>
  <div>
    <h1>Cadastro</h1>
    <form @submit.prevent="submitForm">
      <label for="nomeCompleto">Nome completo</label>
      <input id="nomeCompleto" v-model="nomeCompleto" type="text" required />
      <br />

      <label for="dataNascimento">Data de Nascimento</label>
      <input
        id="dataNascimento"
        v-model="dataNascimento"
        type="date"
        required
      />
      <br />

      <label for="nomeUsuario">Nome de Usuário</label>
      <input id="nomeUsuario" v-model="nomeUsuario" type="text" required />
      <br />

      <label for="email">E-mail</label>
      <input id="email" v-model="email" type="email" required />
      <br />

      <label for="senha">Senha</label>
      <input id="senha" v-model="senha" type="password" required />
      <br />

      <label for="confirmarSenha">Confirmar Senha</label>
      <input
        id="confirmarSenha"
        v-model="confirmarSenha"
        type="password"
        required
      />
      <br />

      <button type="submit">Cadastrar</button>
    </form>
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
