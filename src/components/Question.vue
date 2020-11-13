<template>
  <div>
    <h1 v-html='data.question'></h1>

    <div
      v-for="(answer, index) in data.incorrect_answers"
      :key="index"
    >
      <button
        @click="userAnswer(answer)"
        v-html="answer"
        value="answer[index]"></button>

    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    userAnswer (answer) {
      if (this.data.correct_answer === answer) {
        this.$emit('userAnswer', true)
      } else {
        this.$emit('userAnswer', false)
      }
    }
  }
}
</script>

<style>

</style>
