<template>
  <v-row>
    <v-col>
      <audio class="pa-3" controls autoplay :src="track.preview_url"></audio>
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['track'])
  }
};
</script>