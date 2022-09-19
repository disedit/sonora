<template>
  <div class="page">
    <sonora-header v-if="this.$route.name !== 'index'" class="d-none d-md-block" />
    <sonora-nav v-if="this.$route.name !== 'index'" />
    <nuxt class="page-content" />
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

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.page-content {
  flex-grow: 1;
}
</style>
