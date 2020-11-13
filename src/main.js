import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import { io } from 'socket.io-client'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(new VueSocketIO({
  debug: true,
  connection: io('http://localhost:3000', {
    withCredentials: true,
    extraHeaders: {
      'my-custom-header': 'abcd'
    }
  }),
  vuex: {
    store,
    mutationPrefix: 'SOCKET_',
    actionPrefix: 'SOCKET_'
  }
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
