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
        <Track :loading="track.id == selectedTrack" :track="track" @select="setSelectedTrack" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Track from "./Track.vue";
import { TrackApi } from "./../api/trackApi";

const Api = new TrackApi();

export default {
  name: "Search",
  components: {
    Track
  },
  data: () => ({
    isLoading: null,
    searchSong: "",
    selectedTrack: "",
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
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  }
};
</script>
