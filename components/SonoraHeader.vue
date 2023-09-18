<template>
  <header class="header">
    <nuxt-link to="/" class="header-title">
      <h1>Circuit de la<br>Música Valenciana</h1>
    </nuxt-link>
    <nav class="header-nav d-none">
      Nav
    </nav>
    <nuxt-link class="header-logo" to="/" aria-label="Sonora (anar a la pàgina principal)">
      <sonora-logo class="logo" />
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
  padding: $viewport-y-padding $viewport-x-padding;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $navbar-safe-area;

  &-title {
    text-decoration: none;

    h1 {
      line-height: .9;
      font-size: 1.5rem;
      margin: 0;
    }
  }

  &-logo {
    svg {
      height: 2.75rem;
    }
  }
}
</style>
