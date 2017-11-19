<template>
  <div>
    <AnswerListElement v-for="question in questions" :question="question" :key="question.title"></AnswerListElement>
  </div>


</template>

<script>
  import AnswerListElement from './answer-list-element.vue';

  export default {
    name: 'AnswerList',
    components: {
      AnswerListElement,
    },
    props: {
      questions: Array,
    }
  }
</script>
