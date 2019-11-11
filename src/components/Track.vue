<template>
  <v-card :loading="loading" class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Canción</div>
        <v-list-item-title class="headline mb-1">{{ track.name }}</v-list-item-title>
        <v-list-item-subtitle>Artista: {{ track.artists[0].name }}</v-list-item-subtitle>
        <v-list-item-subtitle>Duración: {{ track.duration_ms | ms-to-mm }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <img :src="track.album.images[0].url" />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text @click="selectTrack">
        Reproducir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    track: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectTrack(){
      this.$store.commit('setTrack', this.track)
    }
  }
};
</script>