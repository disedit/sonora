<template>
  <main class="programme">
    <h1 class="visually-hidden">
      Programa
    </h1>

    <ul class="programme-grid d-none d-md-grid">
      <li v-for="concert in concertsByDate" :key="concert.id" :class="[`venue-${concert.fields.municipality}`, { dimmed: inThePast(concert.fields.date) }]">
        <concert :concert="concert.fields" />
      </li>
    </ul>

    <ul class="programme-drawers d-md-none">
      <li v-for="(venue, venueKey) in venues" :key="venueKey" class="venue">
        <button @click="toggleVenue(venueKey)" :class="['venue-button', `venue-${venueKey}`]">
          <h2 :id="venueKey">
            {{ venue }}
          </h2>
          <div class="venue-button-toggler">
            <plus-icon v-if="!expanded.includes(venueKey)" />
            <minus-icon v-else />
          </div>
        </button>
        <transition name="slide">
          <ul v-if="expanded.includes(venueKey)" class="venue-concerts">
            <li v-for="concert in concertsByVenue(venueKey)" :key="concert.id">
              <concert :concert="concert.fields" />
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </main>
</template>

<script>
import PlusIcon from '@/assets/images/icons/plus.svg?inline'
import MinusIcon from '@/assets/images/icons/minus.svg?inline'

export default {
  components: {
    PlusIcon,
    MinusIcon
  },

  data () {
    return {
      expanded: []
    }
  },

  computed: {
    venues () {
      return this.$store.state.venues
    },

    concertsByDate () {
      return this.concerts
    }
  },

  async asyncData ({ $api }) {
    const concerts = await $api.getConcerts()
    return { concerts }
  },

  mounted () {
    // Expand venue set in url
    const hash = window.location.hash.replaceAll('#', '')
    if (hash) {
      this.expanded.push(hash)
    }
  },

  methods: {
    concertsByVenue (venue) {
      return this.concerts.filter(concert => concert.fields.municipality === venue)
    },

    toggleVenue (venue) {
      if (this.expanded.includes(venue)) {
        const index = this.expanded.indexOf(venue)
        if (index !== -1) {
          this.expanded.splice(index, 1)
        }
        window.location.hash = ''
      } else {
        this.expanded.push(venue)
        window.location.hash = venue
      }
    },

    inThePast (time) {
      const now = new Date()
      const concert = new Date(time)

      return now > concert
    }
  },

  head () {
    return {
      title: 'Programació - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.programme {
  overflow: hidden;

  &-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    list-style: none;
    margin: 0 -2px -2px 0;
    padding: 0;

    li {
      display: grid;
      place-items: center;
      border-right: 2px $black solid;
      border-bottom: 2px $black solid;
      padding: $viewport-x-padding;

      &.dimmed {
        background: $gray;
      }
    }
  }

  &-drawers {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: -2px;
  }
}

.venue {
  &-button {
    display: flex;
    appearance: none;
    border: 0;
    width: 100%;
    border-bottom: 1px $black solid;
    padding: 1rem $viewport-x-padding;
    align-items: center;
    color: $black;

    svg {
      height: .75em;
      width: .75em;
    }
  }

  h2 {
    position: relative;
    top: .2em;
    font-family: akzidenz, sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: $text-base;
    flex-grow: 1;
  }

  &-concerts {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      border-bottom: 1px $black solid;
      padding: 1.75rem $viewport-x-padding;
    }
  }
}

@each $venue, $color in $venue-colors {
  .venue-#{$venue} {
    background-color: $color;
  }
}

@include media-breakpoint-down(lg) {
  .programme-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}
</style>
