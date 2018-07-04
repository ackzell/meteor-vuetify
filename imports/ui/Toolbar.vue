<template>
  <v-toolbar color="primary"
             app>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <span v-if="user">
      Welcome {{ user.username }}!
    </span>
    <v-menu v-if="!user"
            :close-on-content-click="false"
            :nudge-bottom="15"
            lazy
            origin="top right"
            offset-y>
      <v-btn slot="activator"
             icon
             large>
        <v-avatar size="32px"
                  tile>
          <i class="material-icons">
            account_circle
          </i>
        </v-avatar>
      </v-btn>
      <v-card>
        <v-tabs v-model="activeTab"
                dark
                slider-color="primary"
                fixed-tabs>
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
    </v-menu>

    <v-menu v-else
            :nudge-bottom="15"
            :value="false"
            lazy
            origin="top right"
            offset-y>
      <v-btn slot="activator"
             icon
             large>
        <v-avatar size="32px"
                  tile>
          <img src="https://vuetifyjs.com/static/doc-images/logo.svg"
               alt="Vuetify">
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile @click="logout">
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>


<script>
import Login from '/imports/ui/auth/Login'
import Register from '/imports/ui/auth/Register'

export default {
  components: {
    Login,
    Register
  },
  data() {
    return {
      activeTab: null
    }
  },
  computed: {
    user: function() {
      return this.$store.getters.currentUser
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT')
    }
  }
}
</script>

