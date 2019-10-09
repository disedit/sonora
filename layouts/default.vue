<template>
  <div class="page">
    <app-nav />
    <div class="main-container">
      <nuxt />
      <app-footer />
    </div>
    <b-modal id="contact" hide-footer hide-header size="lg">
      <contact />
    </b-modal>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import Contact from '@/components/Contact'

export default {
  components: {
    AppNav,
    AppFooter,
    Contact
  },

  head () {
    const pageName = this.$route.name.startsWith('artists-') ? 'artist' : this.$route.name
    return {
      bodyAttrs: {
        class: `page-${pageName}`
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .main-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
