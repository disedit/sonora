<template>
  <main :class="['programme-venue', `programme-venue-${venue}`]">
    <div class="main-container">
      <h1>
        {{ venueName }}
      </h1>

      <ul class="programme-venue-concerts mb-0 p-0">
        <li v-for="concert in concerts" :key="concert.id">
          <concert :concert="concert.fields" />
        </li>
      </ul>

      <p class="full-programme">
        <nuxt-link to="/programa">
          Veure el programa complet
        </nuxt-link>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    venues () {
      return this.$store.state.venues
    },

    venue () {
      return this.$route.params.venue
    },

    venueName () {
      return this.venues[this.venue]
    }
  },

  async asyncData ({ $api, params }) {
    const concerts = await $api.getConcerts(params.venue)
    return { concerts }
  }
}
</script>

<style lang="scss" scoped>

</style>
