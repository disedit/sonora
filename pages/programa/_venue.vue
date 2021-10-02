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

      <client-only>
        <moveable
          v-bind="moveable"
          @drag="handleDrag"
          @drag-start="handleDragStart"
          @drag-end="handleDragEnd"
          :class="['programme-venue-sticker', `programme-venue-sticker-${venue}`]"
        >
          <component :is="`venues-${venue}`" />
        </moveable>
      </client-only>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    Moveable: () => {
      if (process.client) {
        return import('vue-moveable')
      }
    }
  },

  data () {
    return {
      moveable: {
        draggable: true,
        resizable: false,
        keepRatio: true,
        scalable: false,
        rotatable: false,
        pinchable: false,
        origin: false
      }
    }
  },

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
  },

  methods: {
    handleDrag ({ target, transform }) {
      target.style.transform = transform
    },

    handleDragStart ({ target }) {
      target.classList.add('dragging')
    },

    handleDragEnd ({ target }) {
      target.classList.remove('dragging')
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
    cursor: grab;

    &::v-deep #Outline {
      display: none;
    }

    &::v-deep #Colorful {
      opacity: 1;
    }

    svg {
      transition: .5s ease;
    }

    &.dragging svg {
      transform: scale(1.1) rotate(4deg);
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

    &-castello {
      top: 28vw;
      left: 36vw;
      transform: rotate(5deg);
    }

    &-alcoi {
      top: 18vw;
      left: 32vw;
      transform: rotate(-5deg);
    }

    &-castello-jazz {
      top: 22vw;
      left: 31vw;
      transform: rotate(10deg);
    }

    &-alacant {
      top: 34vw;
      left: 31vw;
      transform: rotate(-10deg);
    }
  }
}

@each $venue, $color in $venue-colors {
  .programme-venue-#{$venue} {
    background: $color;
  }
}

@include media-breakpoint-down(md) {
  .programme-venue {
    &-concerts li {
      margin-bottom: 2.5rem;
    }

    &-sticker {
      display: none;
    }
  }
}
</style>
