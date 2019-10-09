<template>
  <div>
    <concert
      v-for="(concert, i) in fullConcerts"
      :key="i"
      :venue="concert.venue"
      :place="concert.place"
      :date="concert.date"
      compact>
      <nuxt-link
        v-for="artist in concert.fullArtists"
        :key="artist.id"
        :to="`/artists/${artist.id}`">
        {{ artist.name }}
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

    mounted () {
      this.setFullConcerts(this.artist)
    },

    computed: {
      artist: function () {
        return this.$route.name.replace(/artists-/g, '')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>