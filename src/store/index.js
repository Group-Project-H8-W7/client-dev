import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {},
    questions: false
  },
  mutations: {
    SOCKET_LOGIN (state, username) {
      console.log(username)
      console.log(state.users)
      state.users[username] = 0
      // this.$socket.emit('login', data)
    },
    SOCKET_REFRESH (state, data) {
      state.users = data
    },
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
