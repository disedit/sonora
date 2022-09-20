<template>
  <article :class="['artist', `primary-${artist.color1}`, `secondary-${artist.color2}`]">
    <header :class="['artist-name', `shape-${artist.shape}`]">
      <component :is="shape" class="shape shape-first" />
      <h1><span>{{ artist.name }}</span></h1>
      <component :is="shape" class="shape shape-last" />
    </header>

    <section class="artist-concerts">
      <artist-concerts :concerts="concerts" :context="artist" />
    </section>

    <section :style="{ backgroundImage: `url(${image})` }" class="artist-image" />

    <section class="artist-social">
      <ul aria-label="Xarxes socials">
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
          <a :href="`https://instagram.com/${artist.instagram}`" target="_blank" rel="noopener noreferrer" title="Instagram">
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

    <section class="artist-description">
      <div v-html="$md.render(artist.description)" v-if="artist.description" />
    </section>
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

const shapes = [
  () => import('@/assets/images/shapes/1.svg?inline'),
  () => import('@/assets/images/shapes/2.svg?inline'),
  () => import('@/assets/images/shapes/3.svg?inline'),
  () => import('@/assets/images/shapes/4.svg?inline'),
  () => import('@/assets/images/shapes/5.svg?inline'),
  () => import('@/assets/images/shapes/6.svg?inline'),
  () => import('@/assets/images/shapes/7.svg?inline'),
  () => import('@/assets/images/shapes/8.svg?inline'),
  () => import('@/assets/images/shapes/9.svg?inline'),
  () => import('@/assets/images/shapes/10.svg?inline'),
  () => import('@/assets/images/shapes/11.svg?inline'),
  () => import('@/assets/images/shapes/12.svg?inline')
]

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

  computed: {
    shape () {
      return shapes[this.artist.shape - 1]
    },

    image () {
      return this.artist.hasOwnProperty('image')
        ? this.artist.image.fields.file.url
        : ''
    }
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
    return {
      title: `${this.artist.name} - Sonora`,
      meta: [
        { property: 'og:image', content: this.image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  @each $name, $color in $colors {
    .primary-#{$name} {
      --primary-color: #{$color};
    }

    .secondary-#{$name} {
      --secondary-color: #{$color};
    }
  }

  .artist {
    display: grid;
    gap: 1px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "name"
        "concerts"
        "image"
        "social"
        "description";
    background: $black;
    min-height: 55vw;

    &-name {
      grid-area: name;
      display: flex;
      background-color: var(--primary-color);

      h1 {
        display: flex;
        flex-grow: 1;
        text-transform: uppercase;
        font-weight: 300;
        line-height: 1;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .shape {
        transform: rotate(var(--rotate, 0deg)) scaleY(var(--scaleY, 1));

        &-last {
          --scaleY: -1;
        }
      }

      &::v-deep .shape :is(path, polygon) {
        fill: var(--secondary-color);
      }
    }

    &-image {
      grid-area: image;
      background-color: var(--secondary-color);
      background-position: center;
      background-size: cover;
    }

    &-social {
      grid-area: social;
      display: flex;
      align-items: center;
      background-color: var(--primary-color);

      ul {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        list-style: none;
        padding: .85rem $viewport-x-padding;
        margin: 0;

        svg {
          height: 2.25rem;
          width: auto;
        }
      }
    }

    &-description {
      grid-area: description;
      background-color: var(--secondary-color);
      padding: 1.5rem $viewport-x-padding;

      &::v-deep p:last-child {
        margin-bottom: 0;
      }
    }

    &-concerts {
      grid-area: concerts;
      background-color: var(--secondary-color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @include media-breakpoint-up(md) {
    .artist {
      gap: 2px;
      grid-template-columns: 1fr clamp(7rem, 9vw, 12rem) 1fr;
      grid-template-rows: auto 5rem 1fr;
      grid-template-areas:
        "concerts name image"
        "social name image"
        "description name image";

      &-name {
        flex-direction: column;

        h1 {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          padding: 1rem 0;
          font-size: 2.5rem;
          white-space: nowrap;

          span {
            position: relative;
            right: .12em;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    .artist {
      &-name {
        display: grid;
        grid-template-columns: auto 1fr auto;

        .shape {
          --rotate: -90deg;
          height: 100%;
          width: auto;
          max-width: 4rem;
        }

        h1 {
          height: 100%;
          padding: .5rem;

          span {
            position: relative;
            top: .16em;
          }
        }
      }

      &-image {
        height: 100vw;
      }

      &-social ul svg {
        height: 1.5em;
      }
    }
  }
</style>
