<template>
  <article class="artist animated-gradient safe-area">
    Artist
  </article>
</template>

<script>
import FacebookIcon from '@/assets/images/icons/facebook.svg?inline'
import InstagramIcon from '@/assets/images/icons/instagram.svg?inline'
import TwitterIcon from '@/assets/images/icons/twitter.svg?inline'
import SpotifyIcon from '@/assets/images/icons/spotify.svg?inline'
import WebIcon from '@/assets/images/icons/web.svg?inline'
import YoutubeIcon from '@/assets/images/icons/youtube.svg?inline'
import BandcampIcon from '@/assets/images/icons/bandcamp.svg?inline'

export default {
  components: {
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
    WebIcon,
    SpotifyIcon,
    YoutubeIcon,
    BandcampIcon
  },

  async asyncData ({ $api, params }) {
    /* Get artist content */
    const [{ sys: { id }, fields: artist }] = await $api.getArtist(params.artist)
    const concerts = await $api.getArtistConcerts(id)

    return {
      artist,
      concerts
    }
  },

  head () {
    const image = this.artist.hasOwnProperty('image') ? this.artist.image.fields.file.url : ''
    return {
      title: `${this.artist.name} - Sonora`,
      meta: [
        { property: 'og:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';
</style>
