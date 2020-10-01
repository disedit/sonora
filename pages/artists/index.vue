<template>
  <div class="artist-list">
    <ul aria-label="Artistes 2020">
      <li
        v-for="artist in artists"
        :key="artist.id"
        @mouseover="$emit('image', artist.id)"
        @mouseout="$emit('image', null)"
      >
        <nuxt-link :to="`/artists/${artist.id}`" :class="`accent-${artist.accent}`">
          {{ artist.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import artists from '@/content/artists'

export default {
  name: 'ArtistsList',

  scrollToTop: true,

  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },

  head () {
    return {
      title: 'Artistes - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` }
      ]
    }
  },

  data () {
    return {
      artists
    }
  },

  // Prefetch all artist images
  head () {
    const link = []
    this.artists.forEach((artist) => {
      link.push({ rel: 'prefetch', as: 'image', href: artist.image })
    })
    return { link }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artist-list {
    position: relative;
    font-family: $font-headings;
    font-variation-settings: $font-headings-thin;
    font-size: calc(1.5vw + 1.25rem);
    text-align: center;
    padding: 0 1rem;
    margin-bottom: 100px;
    z-index: 10;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
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

      &.accent-red:hover {
        color: $red;
      }

      &.accent-blue:hover {
        color: $blue;
      }

      &.accent-brown:hover {
        color: $brown;
      }
    }
  }
</style>
