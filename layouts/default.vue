<template>
  <div class="page">
    <sonora-header v-if="this.$route.name !== 'index'" class="d-none d-md-block" />
    <sonora-nav v-if="this.$route.name !== 'index'" />
    <nuxt />
    <sonora-footer />
  </div>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: `page-${this.$route.name}`
      }
    }
  }
}
</script>
