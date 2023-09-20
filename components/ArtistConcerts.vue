<template>
  <ul class="artist-concerts-list" aria-label="Concerts">
    <li
      v-for="{ sys: { id }, fields: concert } in concerts"
      :key="id"
      class="concert"
    >
      <div>
        <div class="concert-date">
          {{ concert.date | niceTime }}
        </div>

        <div class="concert-municipality">
          {{ niceMunicipality(concert.municipality) }}
        </div>

        <div class="concert-venue reckless">
          {{ concert.venue }}
        </div>
      </div>

      <div class="concert-book">
        <span v-if="inThePast(concert.date)" class="text">
          Concert realitzat
        </span>
        <a v-else-if="concert.tickets_url" :href="concert.tickets_url" class="sonora-button" target="_blank" rel="noopener noreferer">
          Entrades
        </a>
        <span v-else class="text">
          {{ concert.text || 'Entrades properament' }}
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
import { niceTime } from '@/plugins/nicedate'

export default {
  name: 'ArtistConcerts',

  filters: {
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .concert {
    display: flex;
    line-height: 1.1;
    gap: 1rem;
    align-items: center;

    &-municipality {
      text-transform: uppercase;
    }

    &-book {
      margin-left: auto;
    }
  }

  @include media-breakpoint-down(lg) {
    .concert {
      align-items: flex-start;
      flex-direction: column;
      font-size: 1.25rem;

      &-book {
        margin: .5rem 0;
        width: 100%;

        .sonora-button {
          display: block;
          text-align: center;
        }
      }
    }
  }
</style>
