<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <p>{{users[0]}}</p> -->
    <div
      v-for="user in users"
      :key="user.id"
    >{{ user.name }}</div>
    <b-button @click="start">countdown</b-button>
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
