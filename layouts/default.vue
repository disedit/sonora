<template>
  <div class="page">
    <a href="#content" class="skip visually-hidden-focusable">Ves al contingut principal</a>
    <sonora-header />
    <nuxt id="content" class="page-content" />
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
  min-height: 100dvh;
  overflow: hidden;
}

.page-content {
  flex-grow: 1;
}

.skip {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background: $blue;
  font-size: 1.5em;
  padding: .25rem $viewport-x-padding;
  outline: 0;
  height: $navbar-safe-area;
}
</style>
