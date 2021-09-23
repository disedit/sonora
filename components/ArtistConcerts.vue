<template>
  <ul class="artist-concerts-list">
    <li
      v-for="(concert, i) in concerts"
      :key="i"
    >
      <div class="concert-date">
        {{ concert.date | niceDate }} / {{ concert.time }}
      </div>

      <div class="concert-venue mt-2">
        {{ concert.town }} <br>
        {{ concert.venue }}
      </div>

      <div class="concert-artists mt-2">
        <nuxt-link :to="`/artistes/${artist}`" v-for="artist in concert.artists" :key="i + artist">
          {{ artists[artist].name }}
        </nuxt-link>
      </div>

      <div class="concert-book">
        <a
          v-if="!inThePast(concert.datetime)"
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
export default {
  name: 'ArtistConcerts',

  filters: {
    niceDate (date) {
      return date
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
  }
</style>
