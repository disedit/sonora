<template>
  <artist-page
    :social="{
      facebook: 'has',
      twitter: 'has',
      youtube: 'has',
      instagram: 'gas',
      spotify: 'has'
    }">
    <template v-slot:header>Arist 1</template>

    Artist 1 content
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/borriana-big-band.jpg'

export default {
  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', '_nERNNOtll0')
  }
}
</script>
