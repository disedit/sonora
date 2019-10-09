<template>
  <div class="page">
    <app-nav />
    <div class="main-container">
      <nuxt />
      <app-footer />
    </div>
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

  mounted () {
    this.updatePageClass(this.$route.name)
  },

  watch: {
    '$route': function (route) {
      this.updatePageClass(route.name)
    }
  },

  methods: {
    updatePageClass (pageName) {
      const body = document.getElementsByTagName("body")[0]
      body.className = ''
      if (pageName.startsWith('artists-')) {
        body.classList.add('page-artist')
      } else {
        body.classList.add(`page-${pageName}`)
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
