<template>
  <div>

    <v-list>
      <v-list-tile v-for="item in items"
                   :key="item._id._str">
        <v-list-tile-title>
          {{ item.name }}
        </v-list-tile-title>
        <v-list-tile-action>
          {{ item.price | currency }}
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <div>
      {{ items.length }} items
    </div>

  </div>
</template>

<script>
import { Items } from '../api/items'

export default {
  filters: {
    currency(value) {
      if (!value) {
        return ''
      }

      return `$ ${value}`
    }
  },
  data() {
    return {}
  },
  methods: {},
  meteor: {
    items() {
      return Items.find({}).fetch()
    }
  }
}
</script>


