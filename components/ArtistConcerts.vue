<template>
  <ul class="artist-concerts-list" aria-label="Concerts">
    <li v-for="{ sys: { id }, fields: concert } in concerts" :key="id">
      <div class="concert-date">
        {{ concert.date | niceDate }}
      </div>

      <div class="concert-venue mt-3">
        {{ niceMunicipality(concert.municipality) }} <br>
        {{ concert.venue }}
      </div>

      <div class="concert-artists mt-3">
        <template v-for="({ sys: { id: artistId }, fields: artist }, i) in concert.artists">
          <span :key="artistId + 'plus'" v-if="i > 0">+</span>
          <nuxt-link :to="`/artistes/${artist.slug}`" :key="artistId">
            {{ artist.name }}
          </nuxt-link>
        </template>
      </div>

      <div v-if="concert.button" class="concert-book">
        <a
          v-if="!inThePast(concert.date)"
          :href="concert.ticket_url"
          class="btn"
          target="_blank"
          rel="noopener noreferer"
        >
          {{ concert.button }}
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
import niceDate from '@/plugins/nicedate'

export default {
  name: 'ArtistConcerts',

  filters: {
    niceDate (datetime) {
      return niceDate(datetime)
    }
  },

  props: {
    concerts: {
      type: Array,
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

    li:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .concert-date {
    line-height: 1.1;
  }

  .concert-venue {
    line-height: 1.1;
  }

  .concert-artists {
    font-size: $text-base;
  }

  .btn {
    border: 1px $black solid;
    text-transform: uppercase;
    border-radius: 0;
    padding: .5rem 1.5rem;
    text-align: center;
    margin-top: .75rem;
    transition: .25s ease;

    &:hover {
      background: $black;
      color: $white;
    }
  }
</style>
