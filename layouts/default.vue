<template>
  <div class="page">
    <app-nav />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppNav,
    AppFooter
  },

  head () {
    return {
      bodyAttrs: {
        class: `page-${this.$route.name}`
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .main-container {
    max-width: 1700px;
    margin: 0 auto;
    padding: 2rem;
  }

  @include media-breakpoint-down(sm) {
    .main-container {
      padding: 1rem;
    }
  }
</style>
