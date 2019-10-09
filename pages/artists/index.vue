<template>
  <div>
    <h2>Artistes</h2>
    <ul>
      <li v-for="artist in artists" :key="artist.id" @mouseover="$emit('image', artist.image)">
        <nuxt-link :to="`/artists/${artist.id}`">
          {{ artist.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import artists from './artists'

export default {
  name: 'ArtistsList',

  scrollToTop: true,

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

  .artists-list {
    grid-area: list;

    h2 {
      line-height: 1;
    }

    ul {
      padding: 0;
    }

    li {
      font-size: 3rem;
      list-style: none;
      padding: 0;
      line-height: 1;
      margin-bottom: 1.25rem;
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
</style>
