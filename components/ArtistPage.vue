<template>
  <article :class="['artist', `artist-accent-${artist.accent}`, `artist-shape-${artist.shape}`]">
    <section class="artist-content">
      <header>
        <h2>
          <slot name="header">
            {{ artist.name }}
          </slot>
        </h2>
      </header>

      <div class="text">
        <slot />
      </div>

      <ul class="social">
        <li v-if="social.hasOwnProperty('facebook')">
          <a :href="social.facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li v-if="social.hasOwnProperty('twitter')">
          <a :href="social.twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
        </li>
        <li v-if="social.hasOwnProperty('instagram')">
          <a :href="social.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li v-if="social.hasOwnProperty('spotify')">
          <a :href="social.spotify" target="_blank" rel="noopener noreferrer">Spotify</a>
        </li>
        <li v-if="social.hasOwnProperty('youtube')">
          <a :href="social.youtube" target="_blank" rel="noopener noreferrer">Youtube</a>
        </li>
        <li v-if="social.hasOwnProperty('website')">
          <a :href="social.website" target="_blank" rel="noopener noreferrer">Pàgina web</a>
        </li>
      </ul>
    </section>
    <section class="artist-image">
      <div class="artist-image-wrapper">
        <div class="artist-image-with-shapes">
          <img :src="artist.image" :alt="`Foto de ${artist.name}`">
          <Shape1 v-if="artist.shape === 1" class="shape" />
          <Shape2 v-else class="shape" />
        </div>
      </div>
    </section>
    <section class="artist-video">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          :src="`https://www.youtube.com/embed/${video}`"
          class="embed-responsive-item"
          width="560"
          height="315"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </section>
    <aside class="artist-concerts">
      <artist-concerts />
    </aside>
  </article>
</template>

<script>
import Shape1 from '@/assets/images/shapes/single-1.svg?inline'
import Shape2 from '@/assets/images/shapes/single-2.svg?inline'
import ArtistConcerts from './ArtistConcerts'

export default {
  name: 'ArtistPage',

  components: {
    ArtistConcerts,
    Shape1,
    Shape2
  },

  props: {
    social: {
      type: Object,
      default: () => {}
    },
    video: {
      type: String,
      default: null
    }
  },

  computed: {
    artist () {
      return this.$store.state.artist
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .artist {
    display: grid;
    grid-template-columns: 32% 2fr 1fr;
    grid-template-rows: minmax(calc(100vh - #{$navbar-safe-area}), auto) auto;
    grid-template-areas:
      "image content concerts"
      "video video concerts";
    margin-top: -$navbar-safe-area;

    &-content {
      grid-area: content;
      border-left: 1px $black solid;
      padding: 3rem + $navbar-safe-area 3rem 3rem;
      font-size: 1.25rem;

      h2 {
        font-family: $font-headings;
        font-variation-settings: $font-headings-thin;
        text-transform: uppercase;
        line-height: 1;
        font-size: 3.75rem;
      }
    }

    &-image {
      grid-area: image;
      display: flex;

      &-with-shapes {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
      }

      .shape {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 70vh;
        z-index: 1;
        max-width: 90%;
      }

      img {
        position: relative;
        z-index: 2;
      }
    }

    &-video {
      grid-area: video;
      background: $black;
    }

    &-concerts {
      grid-area: concerts;
      border-left: 1px $black solid;
    }

    &-accent {
      @each $name, $colors in $combos {
        &-#{$name} .artist-image {
          background: map-get($colors, 'primary');

          &::v-deep path,
          &::v-deep polygon {
            fill: map-get($colors, 'secondary');
          }
        }
      }
    }
  }
</style>
