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
  computed: {

    quiz() {
      return this.$store.getters.quiz;
    }

  },
  mounted() {
    this.$store.dispatch('init');
  }
}
</script>
