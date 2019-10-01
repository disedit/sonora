<template>
  <artist-page
    :social="{
      facebook: 'has',
      twitter: 'has',
      youtube: 'has',
    }">
    <template v-slot:header>Arist 1</template>

    Artist 1 content
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'

export default {
  name: 'artist-1',
  components: {
    ArtistPage
  }
}
</script>
