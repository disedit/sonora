<template>
  <div>
    List
  </div>
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
