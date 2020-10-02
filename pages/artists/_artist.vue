<template>
  <article :class="['artist', `artist-accent-${artist.accent}`, `artist-shape-${artist.shape}`]">
    <section class="artist-content">
      <header>
        <h2>{{ artist.name }}</h2>
      </header>

      <div class="text">
        <nuxt-content :document="artist" />
      </div>

      <ul class="social">
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
      </ul>
    </section>
    <section class="artist-image">
      <div class="artist-image-wrapper">
        <div class="artist-image-with-shapes">
          <img :src="`/images/artists/${artist.image}`" :alt="`Foto de ${artist.name}`">
          <Shape1 v-if="artist.shape === 1" class="shape" />
          <Shape2 v-else class="shape" />
        </div>
      </div>
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
    <aside class="artist-concerts">
      <artist-concerts :concerts="concerts" :artists="artists" />
    </aside>
  </article>
</template>

<script>
import Shape1 from '@/assets/images/shapes/single-1.svg?inline'
import Shape2 from '@/assets/images/shapes/single-2.svg?inline'
import ArtistConcerts from '@/components/ArtistConcerts'

export default {
  scrollToTop: true,

  components: {
    ArtistConcerts,
    Shape1,
    Shape2
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
      grid-area: content;
      border-left: 1px $black solid;
      font-size: 1.25rem;
      padding: var(--section-padding);
      padding-top: calc(var(--section-padding) + #{$navbar-safe-area});

      h2 {
        font-family: $font-headings;
        font-variation-settings: $font-headings-thin;
        text-transform: uppercase;
        line-height: 1;
        font-size: 3.75rem;
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

      .shape {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 70vh;
        z-index: 1;
        max-width: 90%;
      }

      img {
        position: relative;
        z-index: 2;
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

      &-list {
        position: sticky;
        top: 0;
        padding: var(--section-padding);
        padding-top: calc(var(--section-padding) + #{$navbar-safe-area});
      }
    }

    &-accent {
      @each $name, $colors in $combos {
        &-#{$name} .artist-image-wrapper {
          background: map-get($colors, 'primary');

          &::v-deep path,
          &::v-deep polygon {
            fill: map-get($colors, 'secondary');
          }
        }
      }
    }
  }
</style>
