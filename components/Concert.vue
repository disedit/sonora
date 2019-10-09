<template>
  <div class="concert">
    <div class="concert-info">
      <div class="concert-info-date">
        {{ date }}
      </div>
      <h3 class="concert-info-artists">
        <slot />
      </h3>
      <div class="concert-info-details">
        {{ venue }} ({{ place }})
      </div>
    </div>
    <div class="concert-thumbnail" v-if="thumbnail">
      <img src="../assets/images/artists/junior-mackenzie.jpg"/>
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
    },
    thumbnail: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .concert {
    display: grid;

    &-thumbnail {
      img {
        width: 100%;
      }
    }

    &-has-thumbnail {
      grid-template-columns: 1fr 1fr;
    }

    &-info {
      padding-top: 3rem;
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
  }
</style>
