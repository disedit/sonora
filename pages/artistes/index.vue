<template>
  <main class="artists">
    <div class="main-container">
      <h1>Artistes</h1>
      <ul class="artists-list">
        <li v-for="{ fields: artist } in artists" :key="artist.slug" class="artist">
          <nuxt-link :to="`/artistes/${artist.slug}`">
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
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

</style>
