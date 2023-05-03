<template>
  <div class="dashcontent">
    <div class="card-deck">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total de perguntas</h5>
          <p class="card-text">{{ totalQuestions }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total de temas</h5>
          <p class="card-text">{{ totalTopics }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total de usuários</h5>
          <p class="card-text">{{ totalUsers }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total de Quizes respondidos</h5>
          <p class="card-text">{{ totalQuizzesTaken }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",
  components: {},
  data() {
    return {
      pageTitle: "Painel | Pick ",
      totalQuestions: 100,
      totalTopics: 8,
      totalUsers: 250,
      totalQuizzesTaken: 500,
    };
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>

<style>
.dashcontent {
  padding: 64px;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(25% - 30px);
  height: 100px;
  margin: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 60px;
}
.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0;
}
.card-text {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 0;
}
</style>
