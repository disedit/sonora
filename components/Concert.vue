<template>
  <article :class="['concert', { dimmed }]">
    <h3 class="concert-artists">
      <div v-for="({ sys: { id }, fields: artist }, i) in concert.artists" :key="id">
        <span v-if="i > 0" class="plus">+</span>
        <nuxt-link :to="`/artistes/${artist.slug}`" class="artist-name">
          {{ artist.name }}
        </nuxt-link>
      </div>
    </h3>

    <div class="concert-date mt-4">
      {{ concert.date | niceDate }}<br>
      {{ concert.date | niceTime }}
    </div>

    <div class="concert-venue mt-4">
      {{ concert.venue }}
    </div>

    <div class="concert-municipality">
      {{ municipality }}
    </div>

    <div class="concert-book">
      <span v-if="dimmed" class="text">
        Concert realitzat
      </span>
      <a
        v-else-if="concert.tickets_url"
        :href="concert.tickets_url"
        :class="['sonora-button', `sonora-button-${concert.municipality}`]"
        target="_blank"
        rel="noopener noreferer"
      >
        <span>Entrada</span>
      </a>
      <span v-else class="text">
        Entrades properament
      </span>
    </div>
  </article>
</template>

<script>
import { niceDate, niceTime } from '@/plugins/nicedate'

export default {
  name: 'Concert',

  filters: {
    niceDate (datetime) {
      return niceDate(datetime)
    },

    niceTime (datetime) {
      return niceTime(datetime)
    }
  },

  props: {
    concert: {
      type: Object,
      required: true
    }
  },

  computed: {
    dimmed () {
      const now = new Date()
      const concert = new Date(this.concert.date)

      return now > concert
    },

    municipality () {
      return this.$store.state.venues[this.concert.municipality]
    }
  }
}
</script>

<style lang="scss" scoped>
  .concert {
    text-align: center;

    &-artists {
      text-transform: uppercase;
      font-size: $text-lgr + .25rem;
      line-height: 1;

      .plus {
        display: block;
      }

      a {
        text-decoration: none;
      }
    }

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
</style>
