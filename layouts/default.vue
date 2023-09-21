<template>
  <div class="page">
    <sonora-header />
    <nuxt class="page-content" />
    <sonora-footer v-if="$route.name !== 'index'" :dark="['el-circuit', 'contacte'].includes($route.name)" />
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
