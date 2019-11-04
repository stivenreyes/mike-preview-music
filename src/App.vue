<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span>Mike Preview Music</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <Player />
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Player from "./components/Player.vue";

export default {
  name: "App",
  components: {
    Player
  },
  data: () => ({}),
  methods: {}
};
</script>
