<template>
  <nuxt-child />
</template>

<script>
export default {
  name: 'Artists',

  fetch ({ store, route }) {
    store.dispatch('setArtist', route.name)
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

</style>
