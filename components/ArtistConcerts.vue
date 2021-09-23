<template>
  <ul class="artist-concerts-list">
    <li
      v-for="(concert, i) in concerts"
      :key="i"
    >
      <div class="concert-date">
        {{ concert.date }} <br>
        {{ concert.time }}
      </div>

      <div class="concert-venue mt-3">
        <span class="concert-place">{{ concert.town }}</span> <br>
        {{ concert.venue }}
      </div>

      <ul class="concert-artists mt-3">
        <li v-for="artist in concert.artists" :key="i + artist">
          <nuxt-link :to="`/artistes/${artist}`">
            {{ artists[artist].name }}
          </nuxt-link>
        </li>
      </ul>

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

</style>
