<template>
    <v-list dense>

      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</template>
<script>
  export default {
    data: () => ({
      item: 1,
      items: [
        { text: 'My dir', icon: 'mdi-folder-account' },
        { text: 'Recent', icon: 'mdi-clock' },
        { text: 'Favorites', icon: 'mdi-star' },
        { text: 'Shared', icon: 'mdi-share-variant' },
        { text: 'Available to me', icon: 'mdi-account-multiple' },
      ],
    }),
  }
</script>
