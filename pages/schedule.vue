<template>
  <div class="main-container">
    <div class="schedule">
      <concert
        v-for="(concert, i) in fullUpcomingConcerts"
        :key="i"
        :venue="concert.venue"
        :place="concert.place"
        :date="concert.date"
        :utc="concert.utc"
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
    this.setFullConcerts(false, true)
    this.setFullConcerts(false, false)
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .main-container {
    margin: 0 auto;
  }

  .schedule {
    display: inline-grid;
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    grid-auto-rows: 1fr;
    width: 100%;

    .concert {
      border: 1px solid $black;
      margin: 0 -1px -1px 0;
      padding: 1.5rem;
      background-color: $white;
    }

    &::before {
      content: '';
      width: 0;
      padding-bottom: 100%;
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }

    *:first-child {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }
  }

  .past-concerts {
    background: $black;
    color: $terciary;
    padding: 3rem;
    font-size: 4rem;
    border: 3px $black solid;
    opacity: .5;
  }

  @include media-breakpoint-down(xs) {
    .schedule {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

</style>
