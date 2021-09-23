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
