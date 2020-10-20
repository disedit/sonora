<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Pàgina no encontrada
    </h1>
    <h1 v-else>
      Error
    </h1>
    <nuxt-link to="/">
      Pàgina principal
    </nuxt-link>
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
