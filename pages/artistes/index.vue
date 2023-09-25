<template>
  <main class="artists">
    <h1 class="artists-title">
      Artistes
    </h1>
    <div class="artist-grid">
      <nuxt-link
        v-for="{ fields: artist } in artists"
        :key="artist.slug"
        :to="`/artistes/${artist.slug}`"
        :class="['artist', `artist-${artist.slug}`, `venue-${artist.venue}`]"
      >
        <div class="artist-image">
          <img v-if="artist.image && artist.image.fields" :alt="artist.name" :src="`${artist.image.fields.file.url}?w=800&h=800`">
          <div v-else class="placeholder" />
          <span class="hover reckless">{{ artist.hover }}</span>
        </div>
        <h2 class="artist-name">
          {{ artist.name }}
        </h2>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $api }) {
    const artists = await $api.getArtists({ order: 'fields.name' })
    return { artists }
  },

  head () {
    return {
      title: 'Artistes - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` },
        { name: 'theme-color', content: '#FEFDF0' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artists {
    margin-top: $navbar-safe-area + 2rem;
    padding: $viewport-x-padding;
  }

  .artist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $viewport-x-padding;

    @include media-breakpoint-up(xl) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .artist {
    text-decoration: none;

    &-image {
      position: relative;
      margin-bottom: .75rem;

      img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
      }

      .placeholder {
        aspect-ratio: 1;
        background: gray;
      }

      .hover {
        display: flex;
        position: absolute;
        inset: 0;
        background: var(--venue-color);
        opacity: 0;
        transition: .25s ease-in-out;
        align-items: flex-end;
        justify-content: center;
        padding: .5rem;
        font-size: 9vw;
        line-height: 1;
        font-weight: 300;
        letter-spacing: -.05em;
      }
    }

    &-name {
      font-size: $text-lg;
      margin: 0;
    }

    &:hover,
    &:focus {
      .hover {
        opacity: 1;
      }
    }

    &:focus-visible {
      outline: 4px var(--venue-color) solid;
    }
  }

  @include media-breakpoint-down(lg) {
    .artists {
      margin-top: $mobile-nav;
      padding: 0 $mobile-padding;

      &-title {
        text-transform: uppercase;
        font-size: $text-md;
        margin-bottom: 2.75rem;
      }
    }

    .artist-grid {
      gap: $mobile-padding;
    }

    .artist {
      &-name {
        font-size: 1.25rem;
        margin-bottom: .5rem;
      }

      .hover {
        display: none;
      }
    }
  }

  @include media-breakpoint-up(lg) {
    .artists-title {
      position: absolute;
      overflow: hidden;
      height: 0;
    }
  }
</style>
