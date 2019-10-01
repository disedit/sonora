<template>
  <artist-page
    :social="{
      facebook: 'has',
      twitter: 'has',
      youtube: 'has',
    }">
    <template v-slot:header>Canta Canalla</template>

    Artist 1 content
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/canta-canalla.jpg'

export default {
  components: {
    ArtistPage
  },
  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'video')
  }
}
</script>
