<template>
  <v-app>
    <v-container fluid class="pa-0 ma-0">
      <v-row>
        <toolbar></toolbar>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <router-view></router-view>
          </v-row>
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

