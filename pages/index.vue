<template>
  <main>
    <header id="home">
      <h1>CIRCUIT<br> DE MÚSICA<br> VALENCIANA</h1>
      <p class="dates">
        25.10.20 → 13.3.21
      </p>
      <div :style="{ transform: `translateX(${shapesPos}%)` }" class="fixed shapes" />
      <div :style="{ transform: `translateX(${illustrationPos}%)` }" class="fixed illustration" />
    </header>
    <section id="artists">
      <artists-list :artists="artists" />
    </section>
  </main>
</template>

<script>
import ArtistsList from '@/components/ArtistsList'

export default {
  components: {
    ArtistsList
  },

  transition: 'home',

  data () {
    return {
      scroll: 0,
      threshold: 800,
      shapesPos: 0,
      illustrationPos: 0
    }
  },

  async asyncData ({ $content }) {
    const artists = await $content('artists')
      .only(['name', 'slug', 'image', 'accent'])
      .sortBy('order', 'asc')
      .fetch()

    return {
      artists
    }
  },

  beforeMount () {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      this.scroll = window.scrollY
      requestAnimationFrame(this.step)
    },

    step () {
      const { scroll, threshold } = this
      if (scroll < threshold) {
        this.shapesPos = scroll >= 0 ? (scroll * 100 / threshold) * -1 : 0
        this.illustrationPos = scroll >= 0 ? (scroll * 100 / threshold) : 0
      } else {
        this.shapesPos = -100
        this.illustrationPos = 100
      }
    }
  },

  head () {
    const links = []
    this.artists.forEach((artist) => {
      links.push({ rel: 'prefetch', as: 'image', href: `/images/artists/${artist.image}` })
    })

    return {
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` },
        ...links
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  header {
    position: relative;
    min-height: calc(100vh);
    text-align: center;
    padding-top: 20vh;
    margin-top: -$navbar-safe-area;

    h1,
    p {
      position: relative;
      font-family: $font-headings;
      font-variation-settings: $font-headings-thin;
      font-size: calc(1.3vw + 1.85rem);
      margin: 0;
      z-index: 10;
      transition: opacity .5s;
      padding: 0 1rem;
    }

    br {
      display: none;
    }
  }

  section {
    padding-top: 250px;
  }

  .fixed {
    position: fixed;
    z-index: 1;
    bottom: 0;
    height: calc(100vh - #{$navbar-safe-area});
    transition: opacity .5s;
    will-change: transform, opacity;

    &.shapes {
      left: 0;
      width: 45vw;
      background: url('~assets/images/shapes/home-blue.svg'), url('~assets/images/shapes/home-yellow.svg');
      background-position: left 0 bottom -10vw, left bottom;
      background-size: contain, 28%;
      background-repeat: no-repeat;
    }

    &.illustration {
      right: 0;
      width: 65vw;
      background: url('~assets/images/illustrations/home.png');
      background-position: bottom -30px right;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .home-enter,
  .home-leave-to {
    &::v-deep .artists-list,
    .fixed,
    h1,
    p {
      opacity: 0;
    }
  }

  @include media-breakpoint-down (sm) {
    header {
      br {
        display: inline;
      }
    }

    .fixed {
      &.shapes {
        width: 90vw;
        background-size: contain, 32vw;
        background-position: left bottom, left -4vw bottom 12vw;
      }

      &.illustration {
        right: -20%;
        width: 100vw;
      }
    }
  }
</style>
