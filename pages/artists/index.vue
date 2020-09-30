<template>
  <div class="artist-list">
    <ul aria-label="Artistes 2020">
      <li v-for="artist in artists" :key="artist.id" @mouseover="$emit('image', artist.image)">
        <nuxt-link :to="`/artists/${artist.id}`">
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
  },

  mounted () {
    this.$emit('image', artists[0].image)
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artist-list {
    font-family: $font-headings;
    font-variation-settings: $font-headings-thin;
    font-size: calc(1.5vw + 1.25rem);
    text-align: center;
    padding-top: 350px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      text-transform: uppercase;
      max-width: 600px;
      margin: 0 auto;
    }

    a {
      display: block;
      color: $black;
      transition: .2s ease;
      line-height: 1;
      padding: .75rem 0;

      &:hover {
        color: $purple;
        font-variation-settings: $font-headings-regular;
      }

      &::after {
        display: none;
      }
    }
  }
</style>
