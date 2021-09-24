<template>
  <main class="artists safe-area">
    <div class="main-container">
      <h1>Artistes</h1>
      <ul class="artists-list">
        <li v-for="{ fields: artist } in artists" :key="artist.slug" class="artist">
          <nuxt-link :to="`/artistes/${artist.slug}`">
            <img :src="artist.image.fields.file.url" v-if="artist.image" alt="">
            <h2>{{ artist.name }}</h2>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import client from '@/plugins/contentful'

export default {
  async asyncData () {
    const { items: artists } = await client.getEntries({
      content_type: 'artist',
      select: 'fields.name,fields.slug,fields.image',
      order: 'fields.order'
    })

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
      margin: 1.5rem 0 0;
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
