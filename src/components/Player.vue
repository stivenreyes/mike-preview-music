<template>
  <v-row>
    <v-col>
      <audio class="pa-3" controls autoplay :src="track.preview_url"></audio>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    track: {}
  }),
  created() {
    this.$bus.$on("set-track", track => {
      this.track = track;
    });
  }
};
</script>