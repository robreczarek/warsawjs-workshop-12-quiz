<template>
  <section v-if="questions">
    <QuestionListElement v-for="question in questions" :question="question" :key="question.title"></QuestionListElement>
  </section>
</template>

<script>
  import QuestionListElement from './question-list-element.vue';

  export default {
    name: 'QuestionList',
    components: {
      QuestionListElement
    },
    props: {
      questions: Array
    }
  }
</script>

<style scoped>

</style>
