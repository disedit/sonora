<template>
  <div class="artists">
    <nuxt-child v-if="!isHome" @image="setImage" />
    <artists-list v-else @image="setImage" />
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

</style>
