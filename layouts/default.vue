<template>
  <div :class="{ 'page': true, 'artist-full-page': $route.name.startsWith('artists-') }">
    <app-nav />
    <div class="app-container"><nuxt /></div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
export default {
  components: {
    AppNav
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .app-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
