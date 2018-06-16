<template>
  <div>
    <h1>{{ greeting }}!</h1>

    <v-btn @click="count()">Click me!</v-btn>

    <p>
      You've clicked: {{ counter }} times.
    </p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello Meteor-Vue World',
      counter: 0
    }
  },
  methods: {
    count() {
      this.counter++
    }
  }
}
</script>


