<template>
  <ul class="programme-grid d-none d-md-grid">
    <li
      v-for="concert in concerts"
      :key="concert.id"
      :class="[`venue-${concert.fields.municipality}`]"
    >
      <concert :concert="concert.fields" />
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData ({ params, $api }) {
    const concerts = await $api.getConcerts(params.venue)
    return { concerts }
  },

  head () {
    const { venues } = this.$store.state
    const venue = venues[this.$route.params.venue]
    return {
      title: `Programació - ${venue} - Sonora`,
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
