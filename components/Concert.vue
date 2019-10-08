<template>
  <div class="concert">
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
      default: null
    },
    place: {
      type: String,
      default: null
    },
    venue: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .concert {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;

    &-date {
      padding: 0.5rem 0;
      color: $secondary;
      font-size: 2rem;
    }

    &-details {
      border-top: 2px solid $background;
      padding-top: 0.5rem;
      margin-top: auto;
      font-size: 2rem;
    }

    &-artists {
      border-top: 2px solid $background;
      color: $background;
      font-size: 4rem;

      span {
        display: block;
        margin: 1rem 0;
        line-height: 1;
      }
    }
  }
</style>
