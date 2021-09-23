<template>
  <main class="programme">
    <!-- Upcoming concerts -->
    <concert
      v-for="(concert, i) in upcomingConcerts"
      :key="`upcoming${i}`"
      :concert="concert.fields"
      :artists="artists"
    />

    <!-- Past concerts -->
    <concert
      v-for="(concert, i) in pastConcerts"
      :key="`past${i}`"
      :concert="concert.fields"
      :artists="artists"
      dimmed
    />
  </main>
</template>

<script>
import Concert from '@/components/Concert'
const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.NUXT_ENV_CTF_SPACE_ID,
  accessToken: process.env.NUXT_ENV_CTF_ACCESS_TOKEN
})

export default {
  components: {
    Concert
  },

  computed: {
    upcomingConcerts () {
      const today = new Date()
      return this.gigs.filter(({ fields: concert }) => {
        const concertDate = new Date(concert.date)
        return today <= concertDate
      })
    },

    pastConcerts () {
      const today = new Date()
      return this.gigs.filter(({ fields: concert }) => {
        const concertDate = new Date(concert.date)
        return today > concertDate
      })
    }
  },

  async asyncData ({ $content }) {
    const { items: gigs } = await client.getEntries({
      'content_type': 'concert',
      order: '-sys.createdAt'
    })

    /* Get all artists */
    const artists = {}
    const artistsList = await $content('artists').only(['name', 'slug']).fetch()
    artistsList.forEach((artist) => {
      artists[artist.slug] = artist
    })

    return {
      gigs,
      artists
    }
  },

  head () {
    return {
      title: 'Programació - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

</style>
