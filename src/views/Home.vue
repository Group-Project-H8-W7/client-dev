<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="(score, name, i) in users" :key="i">{{ name }}</div>
    <b-button @click="start">countdown</b-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      countdown: false
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    start () {
      this.$socket.emit('start')
    }
  },
  mounted () {
    this.$socket.emit('refresh')
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  }
}
</script>
