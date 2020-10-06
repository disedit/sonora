<template>
  <article :class="['artist', `artist-accent-${artist.accent}`, `artist-shape-${artist.shape}`]">
    <section class="artist-image">
      <div class="artist-image-wrapper">
        <div class="artist-image-with-shapes">
          <img :src="`/images/artists/${artist.image}`" :alt="`Foto de ${artist.name}`">
          <div class="shapes fly-in">
            <nuxt-link to="/artistes" class="back-button" aria-label="Tornar a tots els artistes">
              <Arrow /> <span>Torna a Artistes</span>
            </nuxt-link>
            <Shape1 v-if="artist.shape === 1" class="shape" />
            <Shape2 v-else class="shape" />
          </div>
        </div>
      </div>
    </section>
    <section class="artist-content fly-in">
      <header>
        <h1>{{ artist.name }}</h1>
      </header>

      <div class="text">
        <h2 id="artistInfoTitle" class="artist-section-title">
          <button @click="sections.content = !sections.content" :aria-expanded="sections.content ? 'true' : 'false'" aria-controls="artistInfo">
            Més info
          </button>
        </h2>
        <div id="artistInfo" :class="['text-inner collapsible', { hidden: !sections.content }]" aria-labelledby="artistInfoTitle">
          <div class="text-inner-padding">
            <nuxt-content :document="artist" />
          </div>
        </div>
      </div>

      <div class="social-networks">
        <h2 id="artistSocialTitle" class="artist-section-title">
          <button @click="sections.social = !sections.social" :aria-expanded="sections.social ? 'true' : 'false'" aria-controls="artistSocial">
            Xarxes socials
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
    <aside class="artist-concerts fly-in">
      <h2 id="artistConcertsTitle" class="artist-section-title">
        <button @click="sections.concerts = !sections.concerts" :aria-expanded="sections.concerts ? 'true' : 'false'" aria-controls="artistConcerts">
          Concerts
        </button>
      </h2>
      <div id="artistConcerts" :class="['artist-concerts-inner collapsible', { hidden: !sections.concerts }]" aria-labelledby="artistConcertsTitle">
        <artist-concerts :concerts="concerts" :artists="artists" />
      </div>
    </aside>
    <section id="video" class="artist-video">
      <h2 id="artistVideoTitle" class="artist-section-title">
        <button @click="sections.video = !sections.video" :aria-expanded="sections.video ? 'true' : 'false'" aria-controls="artistVideo">
          Vídeo
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
import Shape1 from '@/assets/images/shapes/single-1.svg?inline'
import Shape2 from '@/assets/images/shapes/single-2.svg?inline'
import ArtistConcerts from '@/components/ArtistConcerts'

export default {
  scrollToTop: true,

  components: {
    ArtistConcerts,
    Arrow,
    Shape1,
    Shape2
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
    display: grid;
    grid-template-columns: 32% 2fr 1fr;
    grid-template-rows: minmax(calc(100vh - #{$navbar-safe-area}), auto) auto;
    grid-template-areas:
      "image content concerts"
      "video video concerts";
    margin-top: -$navbar-safe-area;
    --section-padding: 3rem;

    &-content {
      display: flex;
      flex-direction: column;
      grid-area: content;
      border-left: 1px $black solid;
      font-size: 1.25rem;
      padding: var(--section-padding);
      padding-top: calc(var(--section-padding) + #{$navbar-safe-area});
      --offset: 200%;

      h1 {
        font-family: $font-headings;
        font-variation-settings: $font-headings-thin;
        text-transform: uppercase;
        line-height: 1;
        font-size: 3.75rem;
      }

      .social-networks {
        margin-top: auto;
      }
    }

    &-image {
      grid-area: image;
      display: flex;

      &-with-shapes {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
      }

      .shapes {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        display: flex;
        --offset: -200%;

        .shape {
          max-width: 90%;
          height: 70%;
          margin-top: auto;
        }
      }

      a.back-button {
        position: absolute;
        top: calc(var(--section-padding) + #{$navbar-safe-area});
        display: flex;
        align-items: center;
        left: 2rem;
        z-index: 100;
        color: $white;
        text-decoration: none;

        svg {
          width: 2.5rem;
          height: 2.5rem;
          transition: .2s;
        }

        span {
          opacity: 0;
          transition: .2s ease;
        }

        &:hover {
          svg {
            transform: translateX(-.25rem);
          }

          span {
            opacity: .75;
          }
        }
      }

      img {
        position: relative;
        z-index: 2;
        pointer-events: none;
      }
    }

    &-video {
      grid-area: video;
      background: $black;
      border-top: 1px $black solid;
    }

    &-concerts {
      grid-area: concerts;
      border-left: 1px $black solid;
      background: $white;

      &-inner {
        position: sticky;
        top: 0;
        padding: var(--section-padding);
        padding-top: calc(var(--section-padding) + #{$navbar-safe-area});
      }
    }

    &-accent {
      @each $name, $colors in $combos {
        &-#{$name} {
          .shapes {
            background: map-get($colors, 'primary');

            &::v-deep path,
            &::v-deep polygon {
              fill: map-get($colors, 'secondary');
              transition: fill .5s;
            }
          }

          .artist-social a:hover {
            color: map-get($colors, 'primary');
            text-decoration-color: rgba(map-get($colors, 'primary'), .25);
          }

          .artist-concerts::v-deep a {
            color: map-get($colors, 'primary');

            &:hover {
              color: map-get($colors, 'primary');
            }
          }
        }
      }
    }

    &-social {
      list-style: none;
      margin: 2rem 0 0 0;
      padding: 0;

      .video-link {
        margin-top: 2rem;
        text-transform: uppercase;
      }
    }

    &-section-title {
      display: none;
    }
  }

  @include media-breakpoint-up(md) {
    .fly-in {
      transition: 1s;
      will-change: transform;
    }

    .page-enter,
    .home-enter,
    .page-leave-to,
    .home-leave-to {
      .fly-in {
        transform: translateX(var(--offset, 100%));
      }
    }
  }

  @include media-breakpoint-down (lg) {
    .artist {
      --section-padding: 1.5rem;
    }
  }

  @include media-breakpoint-down (sm) {
    .artist {
      --section-padding: 1rem;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr repeat(3, auto);
      grid-template-areas:
        "image"
        "content"
        "video"
        "concerts";

      &-content {
        padding: 0;
        border-left: 0;

        header {
          position: absolute;
          top: calc(#{$navbar-safe-area} + 1rem);
          bottom: 70%;
          left: var(--section-padding);
          right: var(--section-padding);
          z-index: 100;
          display: flex;
          align-items: center;

          h1 {
            font-size: 2.5rem;
            text-align: center;
            flex-grow: 1;
          }
        }

        .text {
          border-bottom: 1px $black solid;
          font-size: 1rem;

          &-inner-padding {
            padding: var(--section-padding);
            padding-top: 0;
          }

          &::v-deep p:last-child {
            margin-bottom: 0;
          }
        }
      }

      &-image {
        border-bottom: 1px $black solid;

        a.back-button {
          display: none;
        }
      }

      &-video {
        background: $white;
        border-bottom: 1px $black solid;
      }

      &-concerts {
        border-left: 0;

        &-inner {
          position: static;
          padding: 0;
        }

        .artist-concerts-list::v-deep > li {
          padding: 0 var(--section-padding) 1rem var(--section-padding);
        }
      }

      &-section-title {
        position: static;
        width: 100%;
        height: auto;
        display: block;
        margin: 0;
        padding: 0;
        font-size: 1rem;
        clip: unset;

        button {
          font-size: 1rem;
          padding: 1rem;
          appearance: none;
          background: transparent;
          font-family: $font-headings;
          font-variation-settings: $font-headings-light;
          border: 0;
          width: 100%;
          text-align: left;
          outline: 0;
          transition: color .5s ease;

          &[aria-expanded='true'] {
            color: $primary;
          }
        }
      }

      &-social {
        margin: 0;
        padding: var(--section-padding);
        padding-top: 0;
        font-size: 1rem;

        .video-link {
          display: none;
        }
      }

      .collapsible {
        overflow: hidden;
        transition: max-height .5s ease, visibility .5s;
        max-height: 1000px;
      }

      .hidden {
        visibility: hidden;
        max-height: 0;
      }
    }
  }
</style>
