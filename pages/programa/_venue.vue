<template>
  <main :class="['programme-venue', `programme-venue-${venue}`, 'safe-area']">
    <div class="main-container">
      <h1>
        {{ venueName }}
      </h1>

      <ul class="programme-venue-concerts mb-0 p-0">
        <li v-for="concert in concerts" :key="concert.id">
          <concert :concert="concert.fields" :artists="artists" />
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
    const artists = await $api.getArtistNames()

    return {
      concerts,
      artists
    }
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
  }

  &-concerts {
    list-style: none;
  }

  &-sticker {
    position: absolute;
    width: 20vw;
    height: auto;
    pointer-events: none;

    &::v-deep #Outline {
      display: none;
    }

    &::v-deep #Colorful {
      opacity: 1;
    }

    &-bocairent {
      top: 20%;
      left: 50%;
    }

    &-peniscola {
      transform: rotate(-20deg);
      top: 50%;
      left: 20%;
    }
  }
}

@each $venue, $color in $venue-colors {
  .programme-venue-#{$venue} {
    background: $color;
  }
}
</style>
