<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          label="Buscar Canción"
          v-model="searchSong"
          @keyup.enter="search"
          filled
          rounded
          append-outer-icon="mdi-death-star-variant"
          @click:append-outer="search"
        ></v-text-field>
      </v-col>
    </v-row>
    <transition name="move">
      <v-row v-show="isLoading">
        <v-col offset="6" cols="6">
          <v-progress-circular color="blue" indeterminate></v-progress-circular>
        </v-col>
      </v-row>
    </transition>
    <v-row v-show="!isLoading">
      <v-col v-for="(track, i) in tracks" :key="i">
        <Track :loading="track.id == getTrack.id" :track="track" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { TrackApi } from "./../api/trackApi";

import Track from "./Track.vue";

const Api = new TrackApi();

export default {
  name: "Search",
  components: {
    Track
  },
  computed: {
    ...mapGetters(['getTrack'])
  },
  data: () => ({
    isLoading: null,
    searchSong: "",
    tracks: []
  }),
  methods: {
    search() {
      this.isLoading = true;
      Api.getByNameAndType(this.searchSong, "track").then(response => {
        let tracks = response.data.tracks.items;
        this.tracks = tracks.filter(track => {
          return track.preview_url != null;
        });
        this.isLoading = false;
      });
    }
  }
};
</script>
