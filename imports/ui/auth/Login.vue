<template>
  <v-card class="pa-3">
    <form @submit.prevent="submitForm">
      <v-text-field id="login-user-name"
                    v-model="formData.username"
                    name="username"
                    label="User name"></v-text-field>
      <v-text-field id="login-password"
                    v-model="formData.password"
                    name="password"
                    label="Enter your password"
                    type="password"></v-text-field>
      <v-btn type="submit">Login</v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('submitLoginForm', this.formData)
    }
  }
}
</script>
