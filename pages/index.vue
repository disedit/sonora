<template>
  <main>
    <section>Home...</section>
    <artists is-home />
  </main>
</template>

<script>
import Artists from './artists'

export default {
  components: {
    Artists
  },
}
</script>

<style lang="scss" scoped>
  section {
    height: 80vh;
  }
</style>