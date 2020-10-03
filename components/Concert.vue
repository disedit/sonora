<template>
  <div class="concert">
    <div class="concert-date">
      {{ concert.date }}, {{ concert.time }}
    </div>
    <h3 class="concert-artists">
      <slot />
    </h3>
    <div class="concert-details">
      {{ concert.venue }} ({{ concert.place }})
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

    &-details {
      margin-top: auto;
      font-variation-settings: $font-headings-light-extended;
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
          color: $purple;
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
