<template>
  <div>
    <h2><slot name="header"></slot></h2>

    <div class="text">
      <slot></slot>
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
      <li v-if="social.hasOwnProperty('website')">
        <a :href="social.website" target="_blank" rel="noopener noreferrer"><fa :icon="['far', 'globe']" /></a>
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
  @import '../sass/variables';

  h2 {
    line-height: 1;
  }

  .text {
    margin: 1rem 0;
    font-size: 1.8rem;
  }

  .social {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      margin-right: .5rem;
    }

    a {
      display: block;
      background: $background;
      color: $text;
      padding: .5rem 1rem;
      border-radius: 20rem;
      font-size: 1.75rem;

      &:hover {
        background: $text;
        color: $background;
      }
    }
  }

  .image {
    img {
      width: 100%;
      filter: grayscale(100%);
      margin: 1rem 0;
    }
  }
</style>