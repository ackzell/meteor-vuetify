<template>
  <v-container>
    <v-layout>
      <v-card v-if="user">
        <p>Hello {{ user.username }}</p>
        <logout v-if="user"></logout>
      </v-card>
      <v-card v-else
              class="auth">
        <v-tabs v-model="activeTab"
                dark
                slider-color="primary"
                fixed-tabs
                grow>
          <v-tab>
            Login
          </v-tab>
          <v-tab>
            Register
          </v-tab>

          <v-tab-item>
            <login></login>
          </v-tab-item>
          <v-tab-item>
            <register></register>
          </v-tab-item>

        </v-tabs>
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
