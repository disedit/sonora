<template>
  <div class="artists">
    <div class="artists-picture-container">
      <div class="artists-picture" :style="{backgroundImage: image}">
        <img :src="artistImage" />
      </div>
    </div>
    <div class="artists-list">
      <nuxt-child @image="setImage" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        artistImage: null
      }
    },
    methods: {
      setImage (image) {
        this.artistImage = image
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .artists {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "picture list";
    grid-gap: 3rem;
    margin-top: 2rem;

    &-picture {
      grid-area: picture;
      margin-top: 10vh;
      height: 60vh;
      position: sticky;
      top: 2rem;

      img {
        width: 100%;
      }
    }

    &-list {
      grid-area: list;

      ul {
        padding: 0;
      }

      li {
        font-size: 3rem;
        list-style: none;
        padding: 0;
      }

      a {
        &::after {
          display: none;
        }
        &:hover {
          color: $text;
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    .artists {
      grid-template-areas: "list";
      grid-template-columns: 1fr;

      &-picture-container {
        display: none;
      }
    }
  }
</style>
