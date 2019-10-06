<template>
  <main>
    <section><logo full /></section>
    <artists is-home />
  </main>
</template>

<script>
import Logo from '@/components/Logo'
import Artists from './artists'

export default {
  components: {
    Logo,
    Artists
  },
}
</script>

<style lang="scss" scoped>
  section {
    height: 80vh;
  }
</style>