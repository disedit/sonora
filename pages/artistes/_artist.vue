<template>
  <article class="artist safe-area">
    <div class="main-container artist-grid">
      <header class="artist-name">
        <h1>{{ artist.name }}</h1>
      </header>

      <section class="artist-image">
        <img :src="artist.image.fields.file.url" v-if="artist.image" alt="">
        <img v-else src="https://via.placeholder.com/600" alt="">
      </section>

      <section class="artist-content">
        <div v-if="artist.description" v-html="$md.render(artist.description)" />

        <ul class="artist-social">
          <li v-if="artist.hasOwnProperty('website')">
            <a :href="artist.website" target="_blank" rel="noopener noreferrer" title="Pàgina web">
              <web-icon />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('facebook')">
            <a :href="artist.facebook" target="_blank" rel="noopener noreferrer" title="Facebook">
              <facebook-icon />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('twitter')">
            <a :href="artist.twitter" target="_blank" rel="noopener noreferrer" title="Twitter">
              <twitter-icon />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('instagram')">
            <a :href="artist.instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
              <instagram-icon />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('spotify')">
            <a :href="artist.spotify" target="_blank" rel="noopener noreferrer" title="Spotify">
              <spotify-icon />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('bandcamp')">
            <a :href="artist.bandcamp" target="_blank" rel="noopener noreferrer" title="Bandcamp">
              <bandcamp-icon />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('youtube')">
            <a :href="artist.youtube" target="_blank" rel="noopener noreferrer" title="Canal de YouTube">
              <youtube-icon />
            </a>
          </li>
        </ul>
      </section>

      <section class="artist-concerts">
        <artist-concerts :concerts="concerts" />
      </section>

      <section class="artist-video">
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
      </section>
    </div>
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

  .artist {
    background: $white;

    &-grid {
      display: grid;
      grid-template-columns: 2fr 1.25fr;
      grid-template-areas:
        "concerts image"
        "content image"
        "name name"
        "video video";
      gap: 2rem;
    }

    &-concerts {
      grid-area: concerts;
    }

    &-image {
      grid-area: image;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }

    &-content {
      grid-area: content;
      font-size: $text-base;
    }

    &-name {
      grid-area: name;

      h1 {
        font-size: clamp(2rem, 10vw, 10rem);
      }
    }

    &-video {
      grid-area: video;
    }

    &-social {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: $text-lg;
      gap: 1rem;
      align-items: center;

      a {
        color: $black;
      }

      svg {
        height: 1em;
        width: 1em;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .artist {
      &-grid {
        grid-template-columns: 1fr;
        grid-template-areas:
          "image"
          "name"
          "concerts"
          "content"
          "video";
        gap: 1rem;
      }

      &-image {
        margin: -1rem -1.25rem .5rem -1.25rem;

        img {
          position: static;
          height: 40vh;
        }
      }

      &-video {
        margin: 0 -1.25rem -1.25rem -1.25rem;
      }
    }
  }
</style>
