<template>
  <article :class="['artist', `artist-accent-${artist.accent}`, `artist-shape-${artist.shape}`]">
    <section class="artist-content">
      <header>
        <h2>
          <slot name="header">
            {{ artist.name }}
          </slot>
        </h2>
      </header>

      <div class="text">
        <slot />
      </div>

      <ul class="social">
        <li v-if="social.hasOwnProperty('facebook')">
          <a :href="social.facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li v-if="social.hasOwnProperty('twitter')">
          <a :href="social.twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
        </li>
        <li v-if="social.hasOwnProperty('instagram')">
          <a :href="social.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li v-if="social.hasOwnProperty('spotify')">
          <a :href="social.spotify" target="_blank" rel="noopener noreferrer">Spotify</a>
        </li>
        <li v-if="social.hasOwnProperty('youtube')">
          <a :href="social.youtube" target="_blank" rel="noopener noreferrer">Youtube</a>
        </li>
        <li v-if="social.hasOwnProperty('website')">
          <a :href="social.website" target="_blank" rel="noopener noreferrer">Pàgina web</a>
        </li>
      </ul>
    </section>
    <section class="artist-image">
      <img :src="artist.image" :alt="`Foto de ${artist.name}`">
    </section>
    <section class="artist-video">
      Vídeo
    </section>
    <aside class="artist-concerts">
      <artist-concerts />
    </aside>
  </article>
</template>

<script>
import ArtistConcerts from './ArtistConcerts'

export default {
  name: 'ArtistPage',

  components: {
    ArtistConcerts
  },

  props: {
    social: {
      type: Object,
      default: () => {}
    },
    video: {
      type: String,
      default: null
    }
  },

  computed: {
    artist () {
      return this.$store.state.artist
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

</style>
