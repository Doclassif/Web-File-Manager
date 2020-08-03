<template>
  <v-row>
    <v-col cols="12">
      <v-row align="center">
        <div class="text-left mr-2" style="float: left; display: block;">
          <v-btn text fab small>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn text fab small>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <div style="float: left; display: block;">
          <v-breadcrumbs :items="items" class="pa-0">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: "hello",
        disabled: false,
        to: "hello",
      },
      {
        text: "home",
        disabled: false,
        to: "/",
      },
    ],
  }),
};
</script>
