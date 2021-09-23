<template>
  <article class="artist">
    <section class="artist-image">
      <img :src="`/images/artists/${artist.image}`" alt="">
    </section>
    <section class="artist-content">
      <div class="text">
        <h2 id="artistInfoTitle" class="artist-section-title">
          <button @click="sections.content = !sections.content" :aria-expanded="sections.content ? 'true' : 'false'" aria-controls="artistInfo">
            Més info
            <span>{{ sections.content ? '-' : '+' }}</span>
          </button>
        </h2>
        <div id="artistInfo" :class="['text-inner collapsible', { hidden: !sections.content }]" aria-labelledby="artistInfoTitle">
          <nuxt-content :document="artist" />
        </div>
      </div>

      <div class="social-networks">
        <h2 id="artistSocialTitle" class="artist-section-title">
          <button @click="sections.social = !sections.social" :aria-expanded="sections.social ? 'true' : 'false'" aria-controls="artistSocial">
            Xarxes socials
            <span>{{ sections.social ? '-' : '+' }}</span>
          </button>
        </h2>
        <div id="artistSocial" :class="['social-networks-inner collapsible', { hidden: !sections.social }]" aria-labelledby="artistSocialTitle">
          <ul class="artist-social">
            <li v-if="artist.hasOwnProperty('facebook')">
              <a :href="artist.facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li v-if="artist.hasOwnProperty('twitter')">
              <a :href="artist.twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li v-if="artist.hasOwnProperty('instagram')">
              <a :href="artist.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li v-if="artist.hasOwnProperty('spotify')">
              <a :href="artist.spotify" target="_blank" rel="noopener noreferrer">Spotify</a>
            </li>
            <li v-if="artist.hasOwnProperty('bandcamp')">
              <a :href="artist.bandcamp" target="_blank" rel="noopener noreferrer">Bandcamp</a>
            </li>
            <li v-if="artist.hasOwnProperty('youtube')">
              <a :href="artist.youtube" target="_blank" rel="noopener noreferrer">Youtube</a>
            </li>
            <li v-if="artist.hasOwnProperty('website')">
              <a :href="artist.website" target="_blank" rel="noopener noreferrer">Pàgina web</a>
            </li>
            <li class="video-link">
              <a v-smooth-scroll="{ offset: -72 }" href="#video">Vídeo</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="artist-concerts">
      <h2 id="artistConcertsTitle" class="sr-only">
        Concerts
      </h2>
      <artist-concerts :concerts="concerts" :artists="artists" aria-labelledby="artistConcertsTitle" />
    </section>
    <header>
      <h1>{{ artist.name }}</h1>
    </header>
    <section id="video" class="artist-video">
      <h2 id="artistVideoTitle" class="artist-section-title">
        <button @click="sections.video = !sections.video" :aria-expanded="sections.video ? 'true' : 'false'" aria-controls="artistVideo">
          Vídeo
          <span>{{ sections.video ? '-' : '+' }}</span>
        </button>
      </h2>
      <div id="artistVideo" :class="['artist-video-inner collapsible', { hidden: !sections.video }]" aria-labelledby="artistVideoTitle">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            :src="`https://www.youtube.com/embed/${artist.video}`"
            class="embed-responsive-item"
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Arrow from '@/assets/images/icons/arrow.svg?inline'

export default {
  components: {
    Arrow
  },

  data () {
    return {
      sections: {
        content: false,
        social: false,
        video: false,
        concerts: false
      }
    }
  },

  async asyncData ({ $content, params }) {
    /* Get artist content */
    const artist = await $content('artists', params.artist).fetch()

    /* Get all concerts and artists for filtering */
    const allArtists = await $content('artists').only(['name', 'slug']).fetch()
    const allConcerts = await $content('concerts').fetch()

    /* Create easily accessible index of all artists */
    const artists = {}
    allArtists.forEach((artist) => {
      artists[artist.slug] = artist
    })

    /* Filter artist's concerts */
    const concerts = allConcerts.concerts.filter((concert) => {
      return concert.artists.includes(params.artist)
    })

    return {
      artist,
      artists,
      concerts
    }
  },

  head () {
    return {
      title: `${this.artist.name} - Sonora`,
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${this.artist.image}` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artist {
    background: $white;
  }
</style>
