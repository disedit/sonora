<template>
  <article class="artist safe-area">
    <div class="main-container artist-grid">
      <header class="artist-name">
        <h1>{{ artist.name }}</h1>
      </header>

      <section class="artist-image">
        <img :src="artist.image.fields.file.url" v-if="artist.image" alt="">
      </section>

      <section class="artist-content">
        <div v-html="$md.render(artist.description)" />

        <ul class="artist-social">
          <li v-if="artist.hasOwnProperty('website')">
            <a :href="artist.website" target="_blank" rel="noopener noreferrer" title="Pàgina web">
              <link-icon />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('facebook')">
            <a :href="artist.facebook" target="_blank" rel="noopener noreferrer" title="Facebook">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('twitter')">
            <a :href="artist.twitter" target="_blank" rel="noopener noreferrer" title="Twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('instagram')">
            <a :href="artist.instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('spotify')">
            <a :href="artist.spotify" target="_blank" rel="noopener noreferrer" title="Spotify">
              <font-awesome-icon :icon="['fab', 'spotify']" />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('bandcamp')">
            <a :href="artist.bandcamp" target="_blank" rel="noopener noreferrer" title="Bandcamp">
              <font-awesome-icon :icon="['fab', 'bandcamp']" />
            </a>
          </li>
          <li v-if="artist.hasOwnProperty('youtube')">
            <a :href="artist.youtube" target="_blank" rel="noopener noreferrer" title="Canal de YouTube">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
          </li>
        </ul>
      </section>

      <section class="artist-concerts">
        <artist-concerts :concerts="concerts" :artists="artists" />
      </section>

      <section class="artist-video">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            :src="`https://www.youtube.com/embed/${artist.video}`"
            class="embed-responsive-item"
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import LinkIcon from '@/assets/images/icons/link.svg?inline'

export default {
  components: {
    LinkIcon
  },

  async asyncData ({ $api, params }) {
    /* Get artist content */
    const [ artist ] = await $api.getArtist(params.artist)
    const artists = await $api.getArtistNames()
    const concerts = await $api.getArtistConcerts(params.artist)

    return {
      artist: artist.fields,
      artists,
      concerts
    }
  },

  head () {
    return {
      title: `${this.artist.name} - Sonora`,
      meta: [
        { property: 'og:image', content: this.artist.image.fields.file.url }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artist {
    background: $white;

    &-grid {
      display: grid;
      grid-template-columns: 2fr 1.25fr;
      grid-template-areas:
        "concerts image"
        "content image"
        "name name"
        "video video";
      gap: 2rem;
    }

    &-concerts {
      grid-area: concerts;
    }

    &-image {
      grid-area: image;

      img {
        width: 100%;
        height: 100%;
        background: $yellow;
        object-fit: cover;
      }
    }

    &-content {
      grid-area: content;
      font-size: $text-base;
    }

    &-name {
      grid-area: name;

      h1 {
        font-size: clamp(2rem, 10vw, 10rem);
      }
    }

    &-video {
      grid-area: video;
    }

    &-social {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: $text-lg;
      gap: 1rem;

      a {
        color: $black;
      }
    }
  }
</style>
