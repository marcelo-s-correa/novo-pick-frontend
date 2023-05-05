<template>
  <div>
    <div v-if="currentQuestion">
      <h2>{{ currentQuestion.question }}</h2>
      <ul>
        <li v-for="(answer, index) in currentQuestion.answers" :key="index">
          <label>
            <input type="radio" :value="answer" v-model="selectedAnswer" />
            {{ answer }}
          </label>
        </li>
      </ul>
      <button @click="submitAnswer()">Submit</button>
    </div>
    <div v-else>
      <h2>Quiz complete!</h2>
      <p>
        You got {{ score }} out of {{ questions.length }} questions correct.
      </p>
    </div>
    <div v-if="showTimer">
      <p>Time remaining: {{ timeRemaining }} seconds</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "GameQuiz",
      questions: null,
      currentQuestionIndex: 0,
      selectedAnswer: "",
      score: 0,
      showTimer: true,
      timeRemaining: 10,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
  },
  methods: {
    submitAnswer() {
      if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
        this.score++;
      }
      this.selectedAnswer = "";
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex >= this.questions.length) {
        this.showTimer = false;
        return;
      }
    },
    startTimer() {
      setInterval(() => {
        this.timeRemaining--;
        if (this.timeRemaining <= 0) {
          this.submitAnswer();
        }
      }, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style></style>
