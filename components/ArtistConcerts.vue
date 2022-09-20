<template>
  <ul class="artist-concerts-list" aria-label="Concerts">
    <li
      v-for="{ sys: { id }, fields: concert } in concerts"
      :key="id"
      class="concert"
    >
      <div class="concert-date">
        {{ concert.date | niceDate }}<br>
        {{ concert.date | niceTime }}
      </div>

      <div class="concert-venue mt-4">
        {{ concert.venue }}
      </div>

      <div class="concert-municipality">
        {{ niceMunicipality(concert.municipality) }}
      </div>

      <div class="concert-book">
        <span v-if="inThePast(concert.date)" class="text">
          Concert realitzat
        </span>
        <a v-else-if="concert.tickets_url" :href="concert.tickets_url" class="sonora-button" target="_blank" rel="noopener noreferer">
          <span>Entrada</span>
        </a>
        <span v-else class="text">
          Entrades properament
        </span>
      </div>

      <div v-if="concert.artists.length > 1" class="concert-with">
        Amb actuació de
        <template v-for="{ sys: { id: artistId }, fields: artist } in concert.artists">
          <nuxt-link v-if="artist.slug !== context.slug" :to="`/artistes/${artist.slug}`" :key="artistId">
            {{ artist.name }}
          </nuxt-link>
        </template>
      </div>
    </li>
  </ul>
</template>

<script>
import { niceDate, niceTime } from '@/plugins/nicedate'

export default {
  name: 'ArtistConcerts',

  filters: {
    niceDate (datetime) {
      return niceDate(datetime)
    },

    niceTime (datetime) {
      return niceTime(datetime)
    }
  },

  props: {
    concerts: {
      type: Array,
      required: true
    },
    context: {
      type: Object,
      required: true
    }
  },

  computed: {
    venues () {
      return this.$store.state.venues
    }
  },

  methods: {
    inThePast (time) {
      const now = new Date()
      const concert = new Date(time)

      return now > concert
    },

    niceMunicipality (municipality) {
      if (!municipality) { return '' }
      return this.venues[municipality]
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
    flex-grow: 1;

    li:not(:first-child) {
      border-top: 2px $black solid;
    }
  }

  .concert {
    padding: 1.5rem $viewport-x-padding;
    text-align: center;

    &-date {
      font-family: 'Maison Mono', monospace;
      text-transform: uppercase;
      font-size: $text-lg - .25rem;
      line-height: 1.1;
    }

    &-venue {
      font-family: gtalpina, serif;
      font-weight: bold;
      text-transform: uppercase;
      font-size: $text-lg - .25rem;
      line-height: 1;
    }

    &-municipality {
      font-family: akzidenz;
      font-size: $text-lg - .25rem;
      text-transform: uppercase;
      line-height: 1;
    }

    &-book {
      margin-top: 1.5rem;
      text-transform: uppercase;
      font-size: $text-lg - .25rem;
    }

    &-with {
      text-transform: uppercase;
      font-size: $text-base;
    }
  }

  @include media-breakpoint-down(md) {
    .artist-concerts-list {
      li:not(:first-child) {
        border-width: 1px;
      }
    }
  }
</style>
