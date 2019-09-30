<template>
  <div>
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

<style lang="scss" scoped>
  .app-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>
