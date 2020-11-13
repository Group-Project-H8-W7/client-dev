<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="name">
      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    login () {
      localStorage.setItem('user', this.name)
      this.$socket.emit('login', this.name)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
