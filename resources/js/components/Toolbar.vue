<template>
    <v-toolbar height="30">
      <v-toolbar-title class="pr-5">
        <v-icon>mdi-folder-multiple</v-icon>WEB FILE MANAGER
      </v-toolbar-title>
      <v-btn outlined class="mr-1" height="100%" :to="{ name: 'home' }">home</v-btn>
      <v-btn outlined class="mr-1" height="100%">akula</v-btn>
      <v-btn outlined class="mr-1" height="100%" :to="{ name: 'hello' }">hello</v-btn>
      <v-menu top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn height="100%" outlined v-bind="attrs" v-on="on">Dropdown</v-btn>
        </template>
        <v-list dense>
          <v-list-item @click>
            <v-list-item-title>Item 1</v-list-item-title>
          </v-list-item>
          <v-list-item @click>
            <v-list-item-title>Item 2</v-list-item-title>
          </v-list-item>
          <v-list-item @click>
            <v-list-item-title>Item 3</v-list-item-title>
          </v-list-item>
          <v-list-item @click>
            <v-list-item-title>Item 4</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />
      <v-btn-toggle class="mr-1">
        <v-btn outlined height="100%">
          <v-icon>mdi-table</v-icon>
        </v-btn>
        <v-btn outlined height="100%">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-switch v-model="$vuetify.theme.dark" hide-details label="Theme Dark"></v-switch>
    </v-toolbar>

</template>
<script>
export default {

};
</script>


