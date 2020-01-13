<template>
  <div class="artist-concerts">
    <concert
      v-for="(concert, i) in fullConcerts"
      :key="i"
      :venue="concert.venue"
      :place="concert.place"
      :date="concert.date"
      :utc="concert.utc"
      compact
    >
      <nuxt-link
        v-for="concertArtist in concert.fullArtists"
        :key="concertArtist.id"
        :to="`/artists/${concertArtist.id}`"
      >
        {{ concertArtist.name }}
      </nuxt-link>
    </concert>
  </div>
</template>

<script>
import Concert from './Concert'
import ArtistsMixin from '@/mixins/artists-mixin.js'

export default {
  name: 'ArtistConcerts',

  components: {
    Concert
  },

  mixins: [ArtistsMixin],

  computed: {
    artist () {
      return this.$route.name.replace(/artists-/g, '')
    }
  },

  mounted () {
    this.setFullConcerts(this.artist)
  }
}
</script>

<style lang="scss" scoped>
.artist-concerts {
  margin-top: 3rem;
}
</style>
