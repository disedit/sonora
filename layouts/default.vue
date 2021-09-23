<template>
  <div class="page">
    <app-nav />
    <nuxt />
    <app-footer />
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
