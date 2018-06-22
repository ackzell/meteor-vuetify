<template>
  <v-container>
    <v-layout justify-center>
      <v-card v-if="user"
              d-flex>
        <p>Hello {{ user.username }}</p>
        <logout v-if="user"></logout>
      </v-card>
      <v-card v-else
              class="auth">

      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import Login from '/imports/ui/auth/Login.vue'
import Logout from '/imports/ui/auth/Logout.vue'
import Register from '/imports/ui/auth/Register.vue'

export default {
  components: {
    login: Login,
    logout: Logout,
    register: Register
  },
  data() {
    return {
      activeTab: null
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  }
}
</script>
