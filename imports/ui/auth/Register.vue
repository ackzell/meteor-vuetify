<template>
  <v-card class="pa-3">
    <form @submit.prevent="submitForm">
      <v-text-field id="register-user-name"
                    v-model="formData.username"
                    name="username"
                    label="User name"></v-text-field>
      <v-text-field id="e-mail"
                    v-model="formData.email"
                    name="email"
                    label="Email"></v-text-field>
      <v-text-field id="register-password"
                    v-model="formData.password"
                    name="password"
                    label="Enter your password"
                    type="password"></v-text-field>
      <v-btn class="primary"
             type="submit">Register</v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('REGISTER_USER', this.formData)
    }
  }
}
</script>
