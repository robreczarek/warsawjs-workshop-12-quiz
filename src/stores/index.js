import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: null,
  },
  actions: {
    init({ commit }) {
      fetch('/static/quiz.json')
      .then((res) => res.json() )
      .then((quiz) => {
         commit('init', quiz);
      })
    }
  },
  mutations: {
    init(state, quiz) {
      state.quiz = quiz;
    },
    selectUserQuestionAnswer(state, { selectAnswerIndex, question }) {
      state.quiz.questions.find(q => {
        return q.title === question.title
      }).userAnswerIndex = selectAnswerIndex;
    },
  },
  getters: {
    quiz(state) {
      return state.quiz;
    }
  }
})
