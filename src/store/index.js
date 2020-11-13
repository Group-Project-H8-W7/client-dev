import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    users: [],
    questions: false,
    userScore: 0
  },
  mutations: {
    incrementScore (state) {
      state.userScore++
    },
    SOCKET_LOGIN (state, users) {
      state.user = localStorage.getItem('user')
      state.users = users
      // this.$socket.emit('login', data)
    },
    SOCKET_REFRESH (state, data) {
      state.users = data
    },
    // SOCKET_INCREMENT_SCORE (state, data) {
    // },
    SOCKET_question (state, data) {
      console.log('sampai question')
      state.questions = data
      router.push('/play')
    }
  },
  actions: {
  },
  modules: {
  }
})
