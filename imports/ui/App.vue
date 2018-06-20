<template>
  <v-app dark>
    <auth></auth>
    <users></users>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Auth from '/imports/ui/auth/Auth.vue'
import Users from '/imports/ui/Users.vue'

export default {
  components: {
    Auth,
    Users
  }
}
</script>

<style lang="stylus">
body
  background-color #212121
  color white
  font-family sans-serif

  p
    color white
    padding 20px
</style>