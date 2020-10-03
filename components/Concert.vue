<template>
  <div :class="['concert', { hovering }]">
    <div class="concert-date">
      {{ concert.date }}
    </div>
    <h3 class="concert-artists">
      <span
        v-for="artist in concert.artists"
        :key="artist"
        @mouseover="hovering = true"
        @mouseleave="hovering = false"
      >
        <nuxt-link :to="`/artistes/${artist}`">
          {{ artists[artist].name }}
        </nuxt-link>
      </span>
    </h3>
    <div class="concert-details">
      {{ concert.time }}<br>
      {{ concert.venue }}<br>
      <span class="concert-place">{{ concert.place }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Concert',

  props: {
    concert: {
      type: Object,
      required: true
    },

    artists: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      hovering: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .concert {
    display: flex;
    flex-direction: column;
    font-size: $text-base;
    font-family: $font-headings;
    transition: background-color .2s ease;

    &.hovering {
      background-color: $brown;
    }

    &-details {
      margin-top: auto;
      font-variation-settings: $font-headings-light-extended;
    }

    &-place {
      text-transform: uppercase;
    }

    &-date {
      font-variation-settings: $font-headings-light-extended;
    }

    &-artists {
      margin-top: 1.5rem;

      a {
        display: block;
        line-height: 1;
        color: $black;
        font-size: $text-xl;
        text-transform: uppercase;
        font-variation-settings: $font-headings-thin;
        text-decoration: none;

        &:hover {
          color: $black;
          font-variation-settings: $font-headings-regular;
        }
      }
    }
  }

  @include media-breakpoint-down(xs) {
    .concert {
      &-artists {
        a {
          font-size: 1.75rem;
        }
      }

      &-details,
      &-date {
        font-size: 1.25rem;
      }
    }
  }
</style>
