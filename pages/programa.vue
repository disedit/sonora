<template>
  <main class="main-container">
    <div class="schedule">
      <!-- Upcoming concerts -->
      <concert
        v-for="(concert, i) in upcomingConcerts"
        :key="`upcoming${i}`"
        :concert="concert"
        :artists="artists"
      />

      <!-- Past concerts -->
      <concert
        v-for="(concert, i) in pastConcerts"
        :key="`past${i}`"
        :concert="concert"
        :artists="artists"
        dimmed
      />
    </div>
  </main>
</template>

<script>
import Concert from '@/components/Concert'

export default {
  components: {
    Concert
  },

  data () {
    return {
      artists: null,
      upcomingConcerts: null,
      pastConcerts: null
    }
  },

  async asyncData ({ $content }) {
    /* Gett all concerts */
    const concerts = await $content('concerts').fetch()

    /* Get all artists */
    const artists = {}
    const artistsList = await $content('artists').only(['name', 'slug']).fetch()
    artistsList.forEach((artist) => {
      artists[artist.slug] = artist
    })

    return {
      concerts,
      artists
    }
  },

  mounted () {
    /* Filter upcoming concerts */
    const today = new Date()
    this.upcomingConcerts = this.concerts.concerts.filter((concert) => {
      const concertDate = new Date(concert.datetime)
      return today <= concertDate
    })

    /* Filter past concerts */
    this.pastConcerts = this.concerts.concerts.filter((concert) => {
      const concertDate = new Date(concert.datetime)
      return today > concertDate
    })
  },

  head () {
    return {
      title: 'Programació - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` }
      ]
    }
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    width: 100%;
    transition: opacity .5s;

    .concert {
      border: 1px solid $black;
      margin: 0 -1px -1px 0;
      padding: 1.5rem;
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

  @include media-breakpoint-down(lg) {
    .schedule {
      grid-template-columns: 1fr 1fr;
    }
  }

  @include media-breakpoint-down(sm) {
    .schedule {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

</style>
