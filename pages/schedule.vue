<template>
  <div class="main-container">
    <div class="schedule">
      <h2 class="schedule-header">
        Programa
      </h2>
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

      <h3 class="past-concerts">
        Concerts <br>
        passats
        <fa :icon="['far', 'arrow-right']" />
      </h3>
      <concert
        v-for="(concert, i) in fullPastConcerts"
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

  .schedule {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    &-header {
      grid-column: 1 / -1;
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
