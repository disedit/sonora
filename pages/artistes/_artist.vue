<template>
  <article :class="['artist', `artist-${artist.slug}`, `venue-${artist.venue}`]">
    <header class="artist-name">
      <nuxt-link to="/artistes" class="artists-section">
        Artistes
      </nuxt-link>
      <h1>{{ artist.name }}</h1>
      <span class="artist-date reckless">
        {{ artist.hover }}
      </span>
    </header>

    <section class="artist-concerts">
      <artist-concerts :concerts="concerts" :context="artist" />
    </section>

    <section :class="['artist-image', { loaded: imageLoaded }]">
      <img :src="image" @load="imageLoaded = true" alt="">
    </section>

    <section class="artist-socials">
      <ul aria-label="Xarxes socials">
        <li v-if="artist.hasOwnProperty('website')">
          <a :href="artist.website" target="_blank" rel="noopener noreferrer">
            Web
          </a>
        </li>
        <li v-if="artist.hasOwnProperty('facebook')">
          <a :href="artist.facebook" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li v-if="artist.hasOwnProperty('twitter')">
          <a :href="artist.twitter" target="_blank" rel="noopener noreferrer">
            X
          </a>
        </li>
        <li v-if="artist.hasOwnProperty('instagram')">
          <a :href="`https://instagram.com/${artist.instagram}`" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li v-if="artist.hasOwnProperty('spotify')">
          <a :href="artist.spotify" target="_blank" rel="noopener noreferrer">
            Spotify
          </a>
        </li>
        <li v-if="artist.hasOwnProperty('bandcamp')">
          <a :href="artist.bandcamp" target="_blank" rel="noopener noreferrer">
            Bandcamp
          </a>
        </li>
        <li v-if="artist.hasOwnProperty('youtube')">
          <a :href="artist.youtube" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </li>
      </ul>
    </section>

    <section
      v-html="$md.render(artist.description)"
      v-if="artist.description"
      class="artist-description"
    />
  </article>
</template>

<script>
export default {
  data () {
    return {
      imageLoaded: false
    }
  },

  computed: {
    image () {
      return this.artist.hasOwnProperty('image') && this.artist.image.hasOwnProperty('fields')
        ? this.artist.image.fields.file.url + '?w=2000&h=2000'
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
        { property: 'og:image', content: this.image },
        { name: 'theme-color', content: '#FEFDF0' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artist {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "name image"
      "concerts image"
      "description image"
      "socials image";
    margin-top: $navbar-safe-area;
    background: var(--venue-color);
    min-height: calc(100vh - $navbar-safe-area);

    &-name {
      grid-area: name;
      padding: $viewport-x-padding;
      font-size: calc(3.25rem + 5.5vw);

      h1 {
        font-size: inherit;
        margin: 0;
        letter-spacing: -0.03em;
        line-height: .8;
      }
    }

    &-date {
      display: block;
      font-size: .95em;
      font-weight: 300;
      letter-spacing: -.05em;
      line-height: 1;
    }

    &-concerts {
      grid-area: concerts;
      padding: 0 $viewport-x-padding;
      margin-top: 2rem;
    }

    &-image {
      grid-area: image;
      display: flex;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: .25s ease;
        opacity: 0;
      }

      &.loaded img {
        opacity: 1;
      }
    }

    &-socials {
      grid-area: socials;
      padding: 5rem $viewport-x-padding;
      font-size: $text-md;
      text-transform: uppercase;

      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        justify-content: space-evenly;
      }

      a {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }

        &:focus-visible {
          outline: 3px $white solid;
        }
      }
    }

    &-description {
      grid-area: description;
      padding: $viewport-x-padding;
      line-height: 1.2;
      font-size: $text-md;
      padding-bottom: 0;

      &::v-deep p:last-child {
        margin-bottom: 0;
      }
    }
  }

  @include media-breakpoint-down(lg) {
    .artist {
      grid-template-columns: 1fr;
      background: $white;
      margin-top: $mobile-nav;
      grid-template-areas:
        "name"
        "concerts"
        "image"
        "description"
        "socials";

      &-name {
        padding: $mobile-padding;
        font-size: calc(3rem + 2.5vw);
        padding-top: 0;
      }

      &-concerts {
        padding: $mobile-padding;
        margin: 0;
        padding-top: 0;
      }

      &-image {
        height: 100vw;
      }

      &-description {
        padding: $mobile-padding;
        font-size: 1.25rem;
      }

      &-socials {
        padding: $mobile-padding;
        margin-bottom: 4rem;

        ul {
          flex-direction: column;
          line-height: 1.75;
        }
      }
    }

    .artists-section {
      display: block;
      text-transform: uppercase;
      font-size: $text-md;
      margin-bottom: 2.75rem;
      line-height: 1;
      text-decoration: none;
    }
  }

  @include media-breakpoint-up(lg) {
    .artists-section {
      display: block;
      overflow: hidden;
      height: 0;

      &:focus {
        height: auto;
        font-size: $text-md;
        outline: 3px $white solid;
      }
    }
  }
</style>
