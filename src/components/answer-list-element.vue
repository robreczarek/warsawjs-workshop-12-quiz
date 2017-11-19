<template>
  <div v-if="question">
    <p>Question: {{ question.title }}</p>
    <p>Answer: {{ question.selectUserQuestionAnswer }}</p>
    <hr>
  </div>
</template>

<script>

  export default {
    name: 'AnswerListElement',
    props: {
      question: Object
    },
    watch: {
      question() {
        debugger
      }
    }
  }
</script>
