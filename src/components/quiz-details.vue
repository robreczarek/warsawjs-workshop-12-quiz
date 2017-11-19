<template>
  <section v-if="quiz">
    <h2>{{ quiz.name }}</h2>
    <p>{{ quiz.categoryName}}</p>
    <img :src="quiz.promo" alt="" />

    <div>
      <QuestionList :questions="quiz.questions"></QuestionList>
    </div>
  </section>
</template>

<script>
  import QuestionList from './question-list.vue';

  export default {
    name: 'QuizDetails',
    components: {
      QuestionList
    },
    props: {
      quiz: Object
    }
  }
</script>

<style scoped>

</style>
