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
.error {
  background-image: url(~assets/images/gradients/gradient-home.jpg);
  background-color: $pink;
  background-size: cover;
  min-height: 80vh;

  a {
    color: $white;
    font-size: 2rem;
  }
}
</style>
