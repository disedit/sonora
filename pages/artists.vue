<template>
  <div class="artists">
    <div class="artists-images d-none d-lg-block">
      <template v-for="artist in artists">
        <div v-show="showingArtist === artist.id" :key="artist.id" class="artist-image" aria-hidden="true">
          <img :src="artist.image" alt="">
        </div>
      </template>
    </div>
    <div class="artists-content">
      <nuxt-child v-if="!isHome" @image="setArtist" />
      <artists-list v-else @image="setArtist" />
    </div>
  </div>
</template>

<script>
import artists from '@/content/artists'
import ArtistsList from './artists/index'

export default {
  name: 'Artists',

  components: {
    ArtistsList
  },

  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      artists,
      showingArtist: null
    }
  },

  methods: {
    setArtist (id) {
      this.showingArtist = id
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .artists {
    display: grid;
    grid-template-columns: 1fr 100px 600px 100px 1fr;
    padding-top: 100px;
    margin-bottom: -2rem;

    &-images {
      position: relative;
      grid-area: 1 / 1 / 2 / 3;
      z-index: 20;
      margin-top: -50vh;
    }

    &-content {
      position: relative;
      grid-area: 1 / 2 / 2 / -2;
      z-index: 30;
    }

    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr;

      .artists-content {
        grid-area: 1 / 1 / 1 / 1;
      }
    }
  }

  .artist-image {
    position: sticky;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: bottom center;
      margin-left: 1rem;
    }
  }
</style>
