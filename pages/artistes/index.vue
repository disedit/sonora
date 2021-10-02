<template>
  <main class="artists safe-area">
    <div class="main-container">
      <h1>Artistes</h1>
      <ul class="artists-list">
        <li v-for="{ fields: artist } in artists" :key="artist.slug" class="artist">
          <nuxt-link :to="`/artistes/${artist.slug}`" :style="{ '--rotation': getRandomRotation() }">
            <div class="artist-thumbnail">
              <img v-if="artist.image" :src="artist.image.fields.file.url" alt="">
              <img v-else src="https://via.placeholder.com/600" alt="">
            </div>
            <h2>{{ artist.name }}</h2>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $api }) {
    const artists = await $api.getArtists()
    return { artists }
  },

  methods: {
    getRandomRotation () {
      const randomInt = Math.floor(Math.random() * 2 + 1.75)
      const isNegative = Math.random() > 0.5
      const rotation = isNegative ? randomInt * -1 : randomInt
      return rotation + 'deg'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artists {
    background-image: url(~assets/images/gradients/gradient-artists.jpg);
    background-color: $pink;
    background-size: 100% 100%;

    h1 {
      margin-bottom: 3rem;
    }

    &-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      list-style: none;
      margin: 1.5rem 0 0;
      padding: 0;
      gap: 2rem;
    }

    .artist {
      margin: 0;
      padding: 0;

      a {
        color: $black;

        &:hover img {
          transform: rotate(var(--rotation, 5deg));
        }
      }

      &-thumbnail {
        display: flex;
        margin-bottom: .75rem;
        aspect-ratio: 1 / 1;
        min-height: 200px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .2s ease;
        }
      }

      h2 {
        font-weight: normal;
        font-size: $text-base;
        text-transform: uppercase;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .artists {
      &-list {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      .artist {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
</style>
