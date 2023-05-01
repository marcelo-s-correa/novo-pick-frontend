<template>
  <section class="carrossel">
    <v-carousel>
      <v-carousel-item
        v-for="imageUrl in images"
        v-bind:key="imageUrl"
        :src="imageUrl"
        cover
      ></v-carousel-item>
    </v-carousel>
  </section>

  <section class="about">
    <h2>Um pouco sobre nosso game</h2>
    <div class="cards">
      <div class="card-container">
        <div v-for="card in cards" :key="card.title" class="card">
          <div class="icon-container">
            <img :src="card.icon" :alt="card.title" />
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>
  <div class="general-content">
    <section class="frequent-questions">
      <h3>Perguntas frequentes</h3>
      <p>
        Abaixo estão algumas perguntas que são feita frequentemente pelos
        usuários
      </p>

      <v-expansion-panels>
        <v-expansion-panel
          v-for="question in questions"
          v-bind:key="question"
          :title="question.title"
          :text="question.text"
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </section>

    <section class="partners">
      <h2>Patrocinadores</h2>
      <div class="partner-logos">
        <img
          v-for="partner in partners"
          :key="partner.company"
          :src="partner.logoUrl"
          :alt="partner.company"
        />
      </div>
    </section>
  </div>
  <section class="register-now">
    <h3>Registre-se agora mesmo e comece a jogar</h3>
    <p>É gratuito e sempre será ! inicie suar joranada agora mesmo !</p>
    <v-btn color="primary" @click="register"> Criar conta </v-btn>
  </section>
</template>

<script>
export default {
  name: "LandingPage",
  components: {},
  data() {
    return {
      pageTitle: "Ínicio | Pick ",
      images: [
        "https://i0.wp.com/oedital.com.br/wp-content/uploads/2021/01/6-Historia-do-Brasil.png?ssl=1",
        "https://emaklabin.org.br/site/wp-content/uploads/2021/04/210307_site_1920_1080px_curso_hist_arte.jpg ",
      ],
      questions: [
        {
          title: "Como me cadastrar",
          text: "Para se cadastrar baste acessar no menu superior a tela de cadastro",
        },
        {
          title: "Como funciona o game",
          text: "O game funciona na modalidade 2D onde você ao ir até o templo histórico seleciona um tema e inicia um questionário de acordo com o tema escolhido",
        },
        {
          title: "Como o jogo pode me ajudar a melhorar em história ?",
          text: "Para se cadastrar baste acessar no menu superior a tela de cadastro",
        },
        {
          title: "Como jogar",
          text: "O game funciona na modalidade 2D onde você ao ir até o templo histórico seleciona um tema e inicia um questionário de acordo com o tema escolhido",
        },
        {
          title: "Como recuperar minha conta",
          text: "Para se cadastrar baste acessar no menu superior a tela de cadastro",
        },
        {
          title: "Como funciona a pontuação",
          text: "O game funciona na modalidade 2D onde você ao ir até o templo histórico seleciona um tema e inicia um questionário de acordo com o tema escolhido",
        },
      ],
      cards: [
        {
          icon: "path/to/icon1.svg",
          title: "Game 2D & Quiz Game",
          text: "Nosso game possui a perspectiva 2D e o formato de Quiz games com perguntas e respostas",
        },
        {
          icon: "path/to/icon2.svg",
          title: "Cadastro simples",
          text: "Para fazer parte de nosso game é muito simples, basta entrar com seus dados básicos e realizar seu cadastro",
        },
        {
          icon: "path/to/icon3.svg",
          title: "Pontuanção e Rankeamento",
          text: "Ao pontuar os jogadores são rankeados de acordo com seus acertos",
        },
      ],
      partners: [
        {
          company: "UGB",
          logoUrl: require("@/assets/images/partners/ugb.png"),
        },
        {
          company: "CONIC",
          logoUrl: require("@/assets/images/partners/conic.png"),
        },
        {
          company: "JORNIC",
          logoUrl: require("@/assets/images/partners/jornic.png"),
        },
      ],
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style scoped src="@/styles/main/landing.css"></style>
