<template>
  <main class="programme">
    <h1 class="visually-hidden">
      Programa
    </h1>

    <ul>
      <li v-for="(thisVenue, key) in venues" :key="key">
        <nuxt-link :to="`/programa/${key}`">
          {{ thisVenue }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/programa">
          Veure tot
        </nuxt-link>
      </li>
    </ul>

    <transition name="slide">
      <nuxt-child />
    </transition>
  </main>
</template>

<script>
export default {
  computed: {
    venues () {
      return this.$store.state.venues
    }
  }
}
</script>

<style lang="scss" scoped>
.programme {
  padding-top: $navbar-safe-area;
}
</style>
