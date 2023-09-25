<template>
  <ul class="programa-grid">
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
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` },
        { name: 'theme-color', content: '#FEFDF0' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.programa-grid {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    border-top: 1px $black solid;

    @include media-breakpoint-up(lg) {
      &:last-child {
        border-bottom: 1px $black solid;
      }
    }
  }
}
</style>
