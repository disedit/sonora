<template>
  <artists-list :artists="artists" />
</template>

<script>
import ArtistsList from '@/components/ArtistsList'

export default {
  scrollToTop: true,

  components: {
    ArtistsList
  },

  async asyncData ({ $content }) {
    const artists = await $content('artists')
      .only(['name', 'slug', 'image', 'accent'])
      .sortBy('order', 'asc')
      .fetch()

    return {
      artists
    }
  },

  head () {
    const links = []
    this.artists.forEach((artist) => {
      links.push({ rel: 'prefetch', as: 'image', href: `/images/artists/${artist.image}` })
    })

    return {
      title: 'Artistes - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` },
        ...links
      ]
    }
    sdnfgklsdknf
  }
}
</script>
