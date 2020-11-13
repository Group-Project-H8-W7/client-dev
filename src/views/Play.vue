<template>
  <div>
    <div
      v-for="(disini, i) in questions"
      :key="i">
      <div
        v-if="soalKe === i"
      >
        <Question
          :data="disini"
          @userAnswer='userAnswer'
        />
      </div>
    </div>
        <h1>Score : {{ userScore }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Question from '../components/Question.vue'

export default {
  data () {
    return {
      jawaban: '',
      soalKe: 0
    }
  },
  computed: {
    userScore () {
      return this.$store.state.userScore
    },
    ...mapState(['questions'])

  },
  methods: {
    userAnswer (isCorrect) {
      if (isCorrect) {
        // socket tambah nilai user
        this.$store.commit('incrementScore')
        console.log('Bener nih')
      } else {
        console.log('Salah euy')
      }
      if ((this.soalKe + 1) === this.questions.length) {
        this.$socket.emit('setFinalScore', this.userScore)
        this.$router.push({ name: 'Result' })
      }
      this.soalKe++
    }
  },
  mounted () {
  },
  components: {
    Question
  }
}
</script>

<style>

</style>
