import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import store from './stores/index'

new Vue({
  el: '#app',
  store,
  render: h => h(App),
})
