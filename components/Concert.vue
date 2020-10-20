<template>
  <div :class="['concert', { hovering, dimmed }]">
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
        <nuxt-link v-if="!dimmed" :to="`/artistes/${artist}`" class="artist-name">
          {{ artists[artist].name }}
        </nuxt-link>
        <span v-else class="artist-name">
          {{ artists[artist].name }}
        </span>
      </span>
    </h3>
    <div class="concert-details">
      {{ concert.time }}<br>
      {{ concert.venue }}<br>
      <span class="concert-place">{{ concert.town }}</span>
    </div>
    <div class="concert-book">
      <component
        :is="dimmed ? 'span' : 'a'"
        :href="!dimmed ? 'https://forms.gle/mnhVQJAYz9G9pWn78' : false"
        :class="['btn', { 'disabled': dimmed }]"
        :aria-hidden="dimmed"
        target="_blank"
        rel="noopener noreferer"
      >
        Reservar invitació
      </component>
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
    },

    dimmed: {
      type: Boolean,
      default: false
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
    font-size: $text-sm;
    font-family: $font-headings;
    transition: background-color .2s ease;

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
      margin-top: 1rem;

      .artist-name {
        display: block;
        line-height: 1;
        color: $black;
        font-size: 2.5rem;
        text-transform: uppercase;
        font-variation-settings: $font-headings-thin;
        text-decoration: none;
        margin-bottom: 1rem;
      }

      a.artist-name:hover {
        color: $black;
        font-variation-settings: $font-headings-regular;
      }
    }

    &-book {
      a,
      span {
        display: inline-block;
        font-family: $font-family-sans-serif;
        padding: .5rem 1rem;
        text-transform: uppercase;
        background-color: $white;
        color: $black;
        border: 1px solid $black;
        margin-top: .75rem;
        border-radius: 0;
      }

      a:hover {
        background: $black;
        color: $white;
      }
    }

    &.hovering:not(.dimmed) {
      background-color: $secondary;
    }

    &.dimmed {
      opacity: .5;

      a:hover {
        font-variation-settings: $font-headings-thin;
      }
    }
  }

  @media (min-width: 1500px) {
    .concert-artists .artist-name {
      font-size: $text-xl;
    }
  }

  @include media-breakpoint-down(lg) {
    .concert {
      &-details,
      &-date {
        font-size: 1rem;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .concert {
      &-artists {
        .artist-name {
          font-size: calc(1.5rem + 3vw);
        }
      }
    }
  }
</style>
