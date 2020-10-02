<template>
  <div :class="{ 'concert': true, 'dimmed': dimmed }">
    <div class="concert-date">
      {{ date }}
    </div>
    <h3 class="concert-artists">
      <slot />
    </h3>
    <div class="concert-details">
      {{ venue }} ({{ place }})
    </div>
  </div>
</template>

<script>
export default {
  name: 'Concert',

  props: {
    date: {
      type: String,
      default: ''
    },
    place: {
      type: String,
      default: ''
    },
    venue: {
      type: String,
      default: ''
    },
    compact: {
      type: Boolean,
      default: false
    },
    dimmed: {
      type: Boolean,
      default: false
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

        &:hover {
          color: $purple;
          font-variation-settings: $font-headings-regular;
        }
      }
    }
  }

  .dimmed {
    opacity: .5;
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
