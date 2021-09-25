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
      <component
        v-if="concert.button"
        :is="dimmed ? 'span' : 'a'"
        :href="!dimmed ? concert.ticket_url : false"
        :class="['btn', { 'disabled': dimmed }]"
        :aria-hidden="dimmed"
        target="_blank"
        rel="noopener noreferer"
      >
        {{ concert.button }}
      </component>
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

    a {
      display: block;
      border: 1px $black solid;
      text-transform: uppercase;
      border-radius: 0;
      padding: .5rem 1.5rem;
      text-align: center;
      transition: .25s ease;
      flex-grow: 1;

      &:hover {
        background: $white;
      }
    }
  }
}

.dimmed {
  opacity: .5;
}
</style>
