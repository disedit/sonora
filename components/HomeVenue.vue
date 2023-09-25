<template>
  <section :class="['venue', `venue-${venue.key}`]">
    <h2 class="venue-name reckless">
      {{ venue.name }}
    </h2>
    <ul class="venue-artists">
      <li
        v-for="artist in venue.artists"
        :key="artist.name"
      >
        <nuxt-link :to="`/artistes/${artist.slug}`">
          {{ artist.name }}
        </nuxt-link>
      </li>
    </ul>
    <img
      :src="flower"
      @load="$emit('loaded', { type: 'flower', key: venue.key })"
      alt=""
      class="venue-flower"
    >
    <img
      :src="gradient"
      @load="$emit('loaded', { type: 'gradient', key: venue.key })"
      alt=""
      class="venue-gradient"
    >
  </section>
</template>

<script>
export default {
  props: {
    venue: {
      type: Object,
      required: true
    },

    flower: {
      type: String,
      required: true
    },

    gradient: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.venue {
  position: relative;
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
  font-size: $text-xl;
  flex-shrink: 0;
  overflow: hidden;

  &-name {
    font-size: inherit;
    line-height: .9;
    opacity: 0;
    transition: .25s ease-in-out;
    padding: 2.5rem $viewport-x-padding;
    padding-bottom: 0;
    margin-bottom: 1.25rem;
  }

  &-artists {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1;
    opacity: 0;
    transition: .35s ease-in-out;
    padding: 0 $viewport-x-padding;

    li {
      margin-bottom: .15em;
    }

    a {
      display: block;
      text-decoration: none;

      &:focus-visible {
        outline: 4px $blue solid;
      }
    }
  }

  &-flower {
    width: 100%;
    margin-top: auto;
    opacity: 0;
    transition: .5s ease-in-out;
  }

  &-gradient {
    display: block;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
  }

  &:hover,
  &:focus-within {
    .venue-artists,
    .venue-name,
    .venue-flower {
      opacity: 1;
    }
  }
}

.venue-guardamar {
  .venue-flower {
    transform: translateX(-30%);
    width: 120%;
  }
}

.venue-geldo {
  .venue-flower {
    transform: translateX(2%);
    width: 120%;
  }
}

.venue-castello {
  .venue-flower {
    transform: translateX(-5%);
    width: 135%;
  }
}

.venue-alacant {
  .venue-flower {
    width: 145%;
  }
}
</style>
