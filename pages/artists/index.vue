<template>
  <div>
    <h2>Artistes</h2>
    <ul>
      <li v-for="artist in artists" :key="artist.id" @mouseover="$emit('image', artist.image)">
        <nuxt-link :to="`/artists/${artist.id}`">{{ artist.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import artists from './artists'

  export default {
    data() {
      return {
        artists: artists
      }
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
