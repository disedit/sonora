<template>
  <main class="programme safe-area">
    <div class="main-container">
      <h1 class="sr-only">
        Programa
      </h1>

      <ul class="programme-venues p-0 m-0">
        <li v-for="(venue, venueKey) in venues" :key="venueKey">
          <nuxt-link :to="`/programa/${venueKey}`" class="venue-name">
            <h2>{{ venue }}</h2>
          </nuxt-link>
          <ul class="programme-concerts p-0 m-0">
            <li v-for="concert in concertsByVenue(venueKey)" :key="concert.id">
              <concert :concert="concert.fields" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    venues () {
      return this.$store.state.venues
    }
  },

  async asyncData ({ $api }) {
    const concerts = await $api.getConcerts()
    return { concerts }
  },

  methods: {
    concertsByVenue (venue) {
      return this.concerts.filter(concert => concert.fields.municipality === venue)
    }
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
.programme {
  background-image: url(~assets/images/gradients/gradient-programme.jpg);
  background-color: #fdcd69;
  background-size: 100% 100%;

  &-venues {
    list-style: none;

    h2 {
      font-weight: normal;
      font-size: $text-base;
      margin-bottom: 1rem;
    }

    li {
      margin-bottom: calc(2rem + 2vw);
    }

    .venue-name {
      position: relative;
      z-index: 10;
      color: $black;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &-concerts {
    list-style: none;

    li {
      margin-bottom: 1rem;
    }
  }
}

@include media-breakpoint-down(md) {
  .programme {
    &-concerts li {
      margin-bottom: 2.5rem;
    }
  }
}
</style>
