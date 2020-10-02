<template>
  <div class="artist-concerts-list">
    <concert
      v-for="(concert, i) in concerts"
      :key="i"
      :venue="concert.venue"
      :place="concert.place"
      :date="concert.date"
      compact
    >
      <nuxt-link
        v-for="artist in concert.artists"
        :key="artist"
        :to="`/artists/${artist}`"
      >
        {{ artists[artist].name }}
      </nuxt-link>
    </concert>
  </div>
</template>

<script>
import Concert from './Concert'

export default {
  name: 'ArtistConcerts',

  components: {
    Concert
  },

  props: {
    concerts: {
      type: Array,
      required: true
    },
    artists: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
