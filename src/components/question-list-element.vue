<template>
  <div class="card" v-if="question">
    <header class="card-header">
      <p class="card-header-title">{{ question.title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <ul>
          <p
            v-for="(answer, index) in question.answers"
            :key="answer"
            v-on:click="selectAnswer(index)">
              {{ answer }}
          </p>
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
    },
    methods: {
      selectAnswer: function(selectAnswerIndex) {
        console.log(selectAnswerIndex, this.question);
      }
    },
  }
</script>

<style scoped>

</style>
