<template>
  <section v-if="quiz">
    <h2>{{ quiz.name }}</h2>
    <p>{{ quiz.categoryName}}</p>

    <div>
      <QuestionList :questions="quiz.questions"></QuestionList>
      <AnswerList v-if="showAnswerList === true" :questions="quiz.questions"></AnswerList>
      <button v-on:click="toggleAnswerList(true)">Show Answers</button>
    </div>
  </section>
</template>

<script>
  import QuestionList from './question-list.vue';
  import AnswerList from './answer-list.vue';

  export default {
    name: 'QuizDetails',
    components: {
      QuestionList,
      AnswerList,
    },
    methods: {
      toggleAnswerList: function(act) {
        return this.showAnswerList = act;
      }
    },
    props: {
      quiz: Object,
      showAnswerList: false,
    },
  }
</script>

<style scoped>

</style>
