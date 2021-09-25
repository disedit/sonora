<template>
  <main :class="['programme-venue', `programme-venue-${venue}`, 'safe-area']">
    <div class="main-container">
      <h1>
        {{ venueName }}
      </h1>

      <ul class="programme-venue-concerts mb-0 p-0">
        <li v-for="concert in concerts" :key="concert.id">
          <concert :concert="concert.fields" />
        </li>
      </ul>

      <component :is="`venues-${venue}`" :class="['programme-venue-sticker', `programme-venue-sticker-${venue}`]" />
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    venues () {
      return this.$store.state.venues
    },

    venue () {
      return this.$route.params.venue
    },

    venueName () {
      return this.venues[this.venue]
    }
  },

  async asyncData ({ $api, params }) {
    const concerts = await $api.getConcerts(params.venue)
    return { concerts }
  }
}
</script>

<style lang="scss" scoped>
.programme-venue {
  position: relative;

  h1 {
    font-weight: normal;
    font-size: $text-base;
    text-transform: unset;
    margin-bottom: 1rem;
  }

  &-concerts {
    list-style: none;

    li {
      margin-bottom: 1rem;
    }
  }

  &-sticker {
    position: absolute;
    width: 18vw;
    height: auto;
    pointer-events: none;

    &::v-deep #Outline {
      display: none;
    }

    &::v-deep #Colorful {
      opacity: 1;
    }

    &-bocairent {
      top: 25vw;
      left: 26vw;
    }

    &-peniscola {
      transform: rotate(-30deg);
      bottom: 2%;
      left: 29vw;
    }
  }
}

@each $venue, $color in $venue-colors {
  .programme-venue-#{$venue} {
    background: $color;
  }
}
</style>
