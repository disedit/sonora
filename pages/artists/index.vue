<template>
  <div class="artists">
    <div class="artists-images d-none d-lg-block">
      <template v-for="artist in artists">
        <div v-show="showingArtist === artist.id" :key="artist.id" class="artist-image-wrapper" aria-hidden="true">
          <img :src="artist.image" alt="">
        </div>
      </template>
    </div>
    <div class="artists-list">
      <ul aria-label="Artistes 2020">
        <li
          v-for="artist in artists"
          :key="artist.id"
          @mouseover="showingArtist = artist.id"
          @mouseout="showingArtist = null"
        >
          <nuxt-link :to="`/artists/${artist.id}`" :class="`accent-${artist.accent}`">
            {{ artist.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import artists from '@/content/artists'

export default {
  name: 'ArtistsList',

  scrollToTop: true,

  head () {
    const link = []
    this.artists.forEach((artist) => {
      link.push({ rel: 'prefetch', as: 'image', href: artist.image })
    })

    return {
      title: 'Artistes - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` }
      ],
      ...link
    }
  },

  data () {
    return {
      artists,
      showingArtist: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artists {
    display: grid;
    grid-template-columns: 28% 4% auto 4% 28%;
    padding-top: 100px;

    &-images {
      position: relative;
      grid-area: 1 / 1 / 2 / 3;
      z-index: 20;
      margin-top: -100vh;
    }

    &-list {
      position: relative;
      grid-area: 1 / 2 / 2 / -2;
      z-index: 30;

      ul {
        list-style: none;
        margin: 0 auto;
        margin-bottom: 100px;
        padding: 0 1rem;
        font-family: $font-headings;
        font-variation-settings: $font-headings-thin;
        font-size: calc(1.5vw + 1.25rem);
        text-align: center;
        max-width: 800px;
      }

      li {
        text-transform: uppercase;
      }

      a {
        display: block;
        color: $black;
        transition: .2s ease;
        line-height: 1;
        padding: .75rem;

        &:hover {
          color: $purple;
          font-variation-settings: $font-headings-regular;
        }

        &::after {
          display: none;
        }

        @each $name, $colors in $combos {
          &.accent-#{$name}:hover {
            color: map-get($colors, 'primary');
          }
        }
      }
    }

    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr;

      .artists-list {
        grid-area: 1 / 1 / 1 / 1;
      }
    }
  }
</style>
