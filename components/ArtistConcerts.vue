<template>
  <ul class="artist-concerts-list" aria-label="Concerts">
    <li v-for="{ sys: { id }, fields: concert } in concerts" :key="id" :class="{ dimmed: inThePast(concert.date) }">
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
        <span v-if="inThePast(concert.date)" class="faux-btn">
          CONCERT REALITZAT
        </span>
        <a v-else-if="concert.tickets_url" :href="concert.tickets_url" class="btn" target="_blank" rel="noopener noreferer">
          {{ concert.button }}
        </a>
        <span v-else-if="concert.municipality === 'bocairent'" class="contact-text">
          Per reservar les vostres localitats, envieu un email a <a href="mailto:cij@bocairent.es">cij@bocairent.es</a> o truqueu al telèfon <a href="tel:962355006">962 35 50 06</a>
        </span>
        <span v-else class="faux-btn">
          Entrades a la venda properament
        </span>
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

  .concert-book {
    display: flex;
    margin-top: 1rem;

    .btn,
    .faux-btn {
      border: 1px $black solid;
      text-transform: uppercase;
      border-radius: 0;
      padding: .5rem 1.25rem;
      text-align: center;
      transition: .25s ease;
      line-height: 1;
      height: 3.25rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }

    .btn:hover {
      background: $black;
      color: $white;
    }
  }

  .contact-text {
    line-height: 1.1;
    font-size: 0.9rem;
    align-self: start;

    a {
      color: $black;
      text-decoration: underline;
    }
  }

  .dimmed {
    opacity: .5;
  }
</style>
