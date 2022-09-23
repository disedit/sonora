<template>
  <header class="header">
    <nuxt-link to="/">
      <sonora-logo class="logo" />
      <span class="visually-hidden">Sonora</span>
      <h1>Circuit de la música valenciana</h1>
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'SonoraHeader'
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding: 1.25rem $viewport-x-padding .5rem $viewport-x-padding;

  .logo {
    height: 4rem;
    margin-bottom: .5rem;
  }

  h1 {
    font-family: $font-family-serif;
    text-transform: uppercase;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }
}
</style>
