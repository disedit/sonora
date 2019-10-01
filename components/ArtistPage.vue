<template>
  <div>
    <div><nuxt-link to="/artists">Torna a artistes</nuxt-link></div>
    <h2><slot name="header"></slot></h2>
    <slot></slot>

    <div v-if="video">
      {{ video }}
    </div>

    <ul class="social">
      <li v-if="social.hasOwnProperty('facebook')">Facebook</li>
      <li v-if="social.hasOwnProperty('twitter')">Twitter</li>
      <li v-if="social.hasOwnProperty('youtube')">Youtube</li>
      <li v-if="social.hasOwnProperty('spotify')">Spotify</li>
      <li v-if="social.hasOwnProperty('instagram')">Instagram</li>
      <li v-if="social.hasOwnProperty('web')">Instagram</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'artist-page',

    props: {
      social: Object,
      video: String
    }
  }
</script>

<style lang="scss" scoped>

</style>