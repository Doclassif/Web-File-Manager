<template>
  <v-app>
    <v-container fluid class="pa-0 ma-0">
      <v-row>
        <toolbar />
      </v-row>
      <v-row class="ma-2">
        <v-col justify="right" cols="3">
          <usercard class="mb-4" />
          <v-card outlined class="mb-4">
            <list />
          </v-card>
          <v-card outlined>
            <treeview />
          </v-card>
        </v-col>
        <v-col cols="7" align="center" justify="center">
            Test: <router-view></router-view>
          <pathbread />

          <tableview />
        </v-col>
        <v-col cols="2">
            <infocard/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
</style>
<script>
export default {};
</script>

