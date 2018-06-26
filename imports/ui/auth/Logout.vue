<template>
  <v-btn @click="logout">Logout</v-btn>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
