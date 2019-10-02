<template>
  <div class="artists">
    <div class="artists-picture-container">
      <div class="artists-picture">
        <div class="artists-nav">
          <nuxt-link to="/artists" v-if="$route.path != '/artists'">
            <fa :icon="['far', 'arrow-left']" /> Torna a artistes
          </nuxt-link>
        </div>
        <div v-if="!artistVideoPlay" class="artists-picture-holder">
          <img :src="artistImage" alt="" />
          <div v-if="artistVideo" class="artists-video-button">
            <b-button @click="playVideo" variant="outline-light">Play</b-button>
          </div>
        </div>
        <div v-else class="artists-video-holder">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${artistVideo}/?autoplay=1`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="artists-list">
      <nuxt-child @image="setImage" @video="setVideo" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        artistImage: null,
        artistVideo: null,
        artistVideoPlay: false
      }
    },

    watch: {
      '$route': function () {
        this.artistVideo = null
        this.artistVideoPlay = false
      }
    },

    methods: {
      setImage (image) {
        this.artistImage = image
      },
      setVideo (video) {
        this.artistVideo = video
      },
      playVideo () {
        this.artistVideoPlay = true
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

    &-nav {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      height: 8.25rem;
      padding-bottom: 2.5rem;
    }

    &-picture {
      grid-area: picture;
      position: sticky;
      top: 2rem;

      &-holder {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: $primary;
        }
      }

      img {
        width: 100%;
        filter: grayscale(100%);
        mix-blend-mode: screen;
        transition: .4s ease-in-out;
      }
    }

    &-video {
      &-button {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
      }

      &-holder {
        margin-top: 10vh;
      }
    }
  }

  .artist-full-page {
    .artists-picture {
      img {
        mix-blend-mode: normal;
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

    .artist-full-page {
      .artists {
        grid-template-areas:
          "picture"
          "list";

        &-picture-container {
          display: block;
        }

        &-picture-holder,
        &-video-holder {
          margin-top: 1rem;
        }
      }
    }
  }
</style>
