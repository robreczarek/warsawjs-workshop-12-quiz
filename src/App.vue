<template>
  <div id="app">
    <the-header></the-header>
    <quiz-details :quiz="quiz"></quiz-details>
  </div>
</template>

<script>
import TheHeader from './components/the-header.vue';
import QuizDetails from './components/quiz-details.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    QuizDetails,
  },
  data() {
    return {
      quiz: null,
    }
  },
  mounted() {
    fetch('/static/quiz.json')
      .then((res) => res.json() )
      .then((quiz) => {
         this.quiz = quiz;
      })
  }
}
</script>
