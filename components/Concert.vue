<template>
  <div class="concert">
    <div class="concert-date">{{ date }}</div>
    <h3 class="concert-artists"><slot></slot></h3>
    <div class="concert-details">{{ venue }} ({{ place }})</div>
  </div>
</template>

<script>
  export default {
    name: 'concert',

    props: {
        date: String,
        place: String,
        venue: String
    },
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .concert {
    padding-top: 3rem;

    &-date {
      color: $secondary;
      font-size: 2rem;
    }
    &-details {
      font-size: 2rem;
    }
    &-artists {
      border-top: 2px solid $primary;
      border-bottom: 2px solid $primary;
      padding: 0.5rem 0;
      margin: 0.5rem 0;
      color: $primary;
      font-size: 4rem;
    }
  }
</style>
