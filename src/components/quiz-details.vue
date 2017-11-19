<template>
  <section v-if="quiz">
    <h2>{{ quiz.name }}</h2>
    <p>{{ quiz.categoryName}}</p>
    <img :src="quiz.promo" alt="" />
  </section>
</template>

<script>
  export default {
    name: 'QuizDetails',
    props: {
      quiz: Object
    }
  }
</script>

<style scoped>

</style>
