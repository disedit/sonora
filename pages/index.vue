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
      const scroll = window.scrollY
      const threshold = 800

      if (scroll < threshold) {
        this.shapesPos = (scroll * 100 / threshold) * -1
        this.illustrationPos = (scroll * 100 / threshold)
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

  main {
    background: linear-gradient(to bottom, $blue 0, $blue 100vh, $white calc(100vh + 800px));
    transition: background-position .5s;
    background-repeat: no-repeat;
  }

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
    top: $navbar-safe-area;
    bottom: 0;
    transition: opacity .5s;
    will-change: transform opacity;

    &.shapes {
      left: 0;
      width: 45vw;
      background: url('~assets/images/shapes/home-orange.svg'), url('~assets/images/shapes/home-red.svg');
      background-position: left 0 bottom -10vw, left bottom;
      background-size: contain, 30%;
      background-repeat: no-repeat;
    }

    &.illustration {
      right: 0;
      width: 65vw;
      background: url('~assets/images/illustrations/home.jpg');
      background-position: bottom right;
      background-size: contain;
      background-repeat: no-repeat;
      mix-blend-mode: multiply;
    }
  }

  .home-enter,
  .home-leave-to {
    background-position: 0 calc((100vh + 800px) * -1);

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
        display: none;
      }
    }
  }
</style>
