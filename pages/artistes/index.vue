<template>
  <main class="artists">
    <div class="main-container">
      <h1>Artistes</h1>
      <ul class="artists-list">
        <li v-for="artist in artists" :key="artist.slug" class="artist">
          <nuxt-link :to="`/artistes/${artist.slug}`">
            <img :src="`/images/artists/${artist.image}`" alt="">
            <h2>{{ artist.name }}</h2>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const artists = await $content('artists')
      .only(['name', 'slug', 'image', 'accent'])
      .sortBy('order', 'asc')
      .fetch()

    return {
      artists
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artists {
    background-image: url(~assets/images/gradients/gradient-artists.jpg);
    background-color: $pink;
    background-size: cover;

    &-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .artist {
      margin: 0;
      padding: 0;

      a {
        color: $black;

        &:hover {
          color: $white;
        }
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        margin-bottom: .75rem;
      }

      h2 {
        font-weight: normal;
        font-size: 1.5rem;
        text-transform: uppercase;
      }
    }
  }
</style>
