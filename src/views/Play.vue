<template>
  <div>
    <div v-for="(disini, i) in questions" :key="i">
      <Question :data="disini"/>
    </div>
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
  mounted () {
    // setInterval(() => {
    //   const user = {
    //     nilai: 0,
    //     username: localStorage.getItem('user')
    //   }
    //   const soal = JSON.parse(JSON.stringify(this.$store.state.questions))
    //   if (soal[0].correct_answer === this.jawaban) user.nilai += 10
    //   console.log(JSON.parse(JSON.stringify(this.$store.state.questions)), '========================== pplay')
    //   this.soalKe++
    //   this.$socket.emit('jawab', user)
    // }, 8000)
  },
  components: {
    Question
  },
  computed: mapState(['questions'])
}
</script>

<style>

</style>
