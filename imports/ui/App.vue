<template>
  <v-app dark>
    <toolbar></toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Auth from '/imports/ui/auth/Auth.vue'
import Toolbar from '/imports/ui/Toolbar.vue'

export default {
  components: {
    Auth,
    Toolbar
  },
  created() {
    this.$store.dispatch('LOAD_USER')
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