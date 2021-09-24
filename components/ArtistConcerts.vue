<template>
  <ul class="artist-concerts-list">
    <li
      v-for="({ fields: concert }, i) in concerts"
      :key="i"
    >
      <div class="concert-date">
        {{ concert.date | niceDate }}
      </div>

      <div class="concert-venue mt-2">
        {{ concert.municipality | niceMunicipality }} <br>
        {{ concert.venue }}
      </div>

      <div class="concert-artists mt-2">
        <template v-for="artist in concert.artists">
          <nuxt-link :to="`/artistes/${artist}`" :key="i + artist">
            {{ artists[artist].name }}
          </nuxt-link>
          <span :key="i + artist + 'plus'" class="plus">+</span>
        </template>
      </div>

      <div class="concert-book">
        <a
          v-if="!inThePast(concert.date)"
          href="https://forms.gle/mnhVQJAYz9G9pWn78"
          class="btn"
          target="_blank"
          rel="noopener noreferer"
        >
          Reservar invitació
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
import venues from '@/assets/venues'

export default {
  name: 'ArtistConcerts',

  filters: {
    niceDate (date) {
      return new Date(date)
    },

    niceMunicipality (municipality) {
      return venues[municipality]
    }
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
  },

  methods: {
    inThePast (time) {
      const now = new Date()
      const concert = new Date(time)

      return now > concert
    }
  }
}
</script>

<style lang="scss" scoped>
  .artist-concerts-list {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: $text-lg;
  }

  .concert-venue {
    line-height: 1.1;
  }

  .concert-artists {
    font-size: $text-base;

    .plus:last-child {
      display: none;
    }
  }
</style>
