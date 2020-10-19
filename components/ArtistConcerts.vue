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
  @import "../sass/variables";

  .artist-concerts-list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: $font-headings;
    font-variation-settings: $font-headings-light-extended;

    & > li:not(:last-child) {
      border-bottom: 1px rgba($black, .25) solid;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }

    .concert-place {
      text-transform: uppercase;
    }

    .concert-artists {
      list-style: none;
      padding: 0;
      margin: 0;
      text-transform: uppercase;
      line-height: 1.25;

      a {
        padding: 0;
        font-variation-settings: "wght" 300, "wdth" 100, "ital" 0;
        font-size: 1.4rem;
        text-decoration: none;

        &:after {
          display: none;
        }

        &:hover {
          font-variation-settings: "wght" 600, "wdth" 100, "ital" 0;
        }
      }
    }

    .concert-book {
      a,
      span {
        display: inline-block;
        font-family: $font-family-sans-serif;
        padding: .5rem .75rem;
        text-transform: uppercase;
        background-color: $white;
        color: $black !important;
        border: 1px solid $black;
        margin-top: 1rem;
        border-radius: 0;
        font-size: .9rem;
      }

      a:hover {
        background: $black;
        color: $white !important;
      }
    }
  }
</style>
