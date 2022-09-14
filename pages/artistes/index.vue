<template>
  <main class="artists">
    <div class="main-container">
      <h1>Artistes</h1>
      <ul class="artists-list">
        <li v-for="{ fields: artist } in artists" :key="artist.slug" class="artist">
          <nuxt-link :to="`/artistes/${artist.slug}`">
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
