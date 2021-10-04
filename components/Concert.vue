<template>
  <div :class="['concert', { dimmed }]">
    <h3 class="concert-artists">
      <div v-for="({ sys: { id }, fields: artist }, i) in concert.artists" :key="id">
        <span v-if="i > 0" class="plus">+</span>
        <nuxt-link :to="`/artistes/${artist.slug}`" class="artist-name">
          {{ artist.name }}
        </nuxt-link>
      </div>
    </h3>
    <div class="concert-details">
      {{ concert.date | niceDate }}<br>
      {{ concert.venue }}
    </div>
    <div class="concert-book">
      <span v-if="dimmed">
        CONCERT REALITZAT
      </span>
      <a v-else-if="concert.tickets_url" :href="concert.tickets_url" class="btn" target="_blank" rel="noopener noreferer">
        {{ concert.button }}
      </a>
      <span v-else-if="concert.municipality === 'bocairent'" class="contact-text">
        Per reservar les vostres localitats, envieu un email a <a href="mailto:info@bocairent.es">info@bocairent.es</a> o truqueu al telèfon <a href="tel:962350014">962 35 00 14</a>
      </span>
      <span v-else class="faux-btn">
        Entrades a la venda properament
      </span>
    </div>
  </div>
</template>

<script>
import niceDate from '@/plugins/nicedate'

export default {
  name: 'Concert',

  filters: {
    niceDate (datetime) {
      return niceDate(datetime)
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
    }
  }
}
</script>

<style lang="scss" scoped>
.concert {
  display: grid;
  grid-template-columns: 4fr 2.5fr 1.5fr;
  column-gap: 5vw;

  &-artists {
    font-weight: bold;
    font-size: $text-headline;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 0.9;
    margin-bottom: 0;

    a {
      color: $black;
    }
  }

  &-details {
    display: flex;
    line-height: 1.2;
    height: $text-headline;
    align-items: center;
  }

  &-book {
    height: $text-headline;
    display: flex;
    align-items: center;

    .btn,
    .faux-btn {
      display: block;
      border: 1px $black solid;
      text-transform: uppercase;
      border-radius: 0;
      padding: .5rem 1.25rem;
      text-align: center;
      transition: .25s ease;
      flex-grow: 1;
      line-height: 1;
      height: 3.375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }

    .btn:hover {
      background: $white;
    }
  }
}

.contact-text {
  line-height: 1.1;
  font-size: 0.9rem;

  a {
    color: $black;
    text-decoration: underline;
  }
}

.dimmed {
  opacity: .5;
}

@include media-breakpoint-down(md) {
  .concert {
    grid-template-columns: 1fr;
    row-gap: 1rem;

    &-details {
      margin-top: -.25rem;
    }

    &-book a {
      width: fit-content;
      flex-grow: 0;
      padding: .5rem 1.75rem;
    }
  }
}
</style>
