<template>
  <div>
    <h2><slot name="header"></slot></h2>
    <div class="text">
      <slot></slot>
    </div>

    <div v-if="video">
      {{ video }}
    </div>

    <ul class="social">
      <li v-if="social.hasOwnProperty('facebook')">
        <a :href="social.facebook" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'facebook-square']" /></a>
      </li>
      <li v-if="social.hasOwnProperty('twitter')">
        <a :href="social.twitter" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'twitter-square']" /></a>
      </li>
      <li v-if="social.hasOwnProperty('instagram')">
        <a :href="social.instagram" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'instagram']" /></a>
      </li>
      <li v-if="social.hasOwnProperty('spotify')">
        <a :href="social.spotify" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'spotify']" /></a>
      </li>
      <li v-if="social.hasOwnProperty('youtube')">
        <a :href="social.youtube" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'youtube']" /></a>
      </li>
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
  h2 {
    line-height: 1;
  }

  .text {
    margin: 1rem 0;
  }

  .social {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      font-size: 2rem;
    }
  }
</style>