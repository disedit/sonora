<template>
  <div class="error">
    <div class="main-container safe-area">
      <h1 v-if="error.statusCode === 404">
        Pàgina no trobada
      </h1>
      <h1 v-else>
        Error
      </h1>
      <nuxt-link to="/">
        Torna a la pàgina principal
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
