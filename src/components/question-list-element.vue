<template>
  <div class="card" v-if="question">
    <header class="card-header">
      <p class="card-header-title">{{ question.title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <ul>
          <li v-for="answer in question.answers" :key="answer">{{ answer }}</li>
        </ul>
      </div>
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
