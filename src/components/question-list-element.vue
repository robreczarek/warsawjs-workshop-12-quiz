<template>
  <div class="card" v-if="question">
    <div class="card-header">
      <div class="card-header-title">{{ question.title }}</div>
    </div>
    <div class="card-content">
      <ul>
        <li v-for="answer in question.answers">{{ answer }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import QuestionListElement from './question-list-element.vue';

  export default {
    name: 'QuestionListElement',
    props: {
      question: Object
    }
  }
</script>

<style scoped>

</style>
