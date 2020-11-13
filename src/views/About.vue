<template>
  <div class="about">
    <h1>Final Score : {{ userScore }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    userScore () {
      return this.$store.state.userScore
    },
    ...mapState(['questions'])

  }
}
</script>
