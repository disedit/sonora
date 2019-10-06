<template>
  <main>
    <section><logo full /></section>
    <artists is-home />
  </main>
</template>

<script>
import Artists from './artists'
import Logo from '@/components/Logo'

export default {
  components: {
    Logo,
    Artists
  }
}
</script>

<style lang="scss" scoped>
  section {
    height: 80vh;
  }
</style>
