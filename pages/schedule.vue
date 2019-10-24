<template>
  <div class="main-container">
    <div class="schedule">
      <h2 class="schedule-header">
        Programa
      </h2>
      <concert
        v-for="(concert, i) in fullConcerts"
        :key="i"
        :venue="concert.venue"
        :place="concert.place"
        :date="concert.date"
      >
        <nuxt-link
          v-for="artist in concert.fullArtists"
          :key="artist.id"
          :to="`/artists/${artist.id}`"
        >
          {{ artist.name }}
        </nuxt-link>
      </concert>
    </div>
  </div>
</template>

<script>
import ArtistsMixin from '@/mixins/artists-mixin.js'
import Concert from '@/components/Concert'

export default {
  components: {
    Concert
  },

  mixins: [ArtistsMixin],

    head () {
    return {
      title: 'Programació - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` }
      ]
    }
  },

  mounted () {
    this.setFullConcerts()
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .schedule {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    &-header {
      grid-column: 1 / -1;
    }
  }

  @include media-breakpoint-down(md) {
    .schedule {
      grid-template-columns: 1fr 1fr;
    }
  }

  @include media-breakpoint-down(xs) {
    .schedule {
      grid-template-columns: 1fr;
    }
  }
</style>
