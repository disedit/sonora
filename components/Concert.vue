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
    utc: {
      type: Date,
      default: () => new Date()
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
    }
  },

  computed: {
    dimmed () {
      const today = new Date()
      return today > this.utc
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .concert {
    display: flex;
    flex-direction: column;

    &-date {
      padding: 0.5rem 0;
      color: lighten($secondary, 10%);
      font-size: 2rem;
    }

    &-details {
      border-top: 2px solid $background;
      padding-top: 0.5rem;
      margin-top: auto;
      font-size: 2rem;
      min-height: 106px;
    }

    &-artists {
      border-top: 2px solid $background;
      color: $background;
      font-size: 4rem;

      a {
        display: block;
        margin: 1rem 0;
        line-height: 1;

        &::after {
          display: none;
        }
      }
    }
  }

  .dimmed {
    opacity: .5;
  }

  @include media-breakpoint-down(sm) {
    .concert {
      &-artists {
        font-size: 2.5rem;
      }

      &-details,
      &-date {
        font-size: 1.5rem;
      }
    }
  }
</style>
