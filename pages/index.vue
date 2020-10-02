<template>
  <main>
    <header id="home">
      <h1>CIRCUIT DE MÚSICA VALENCIANA</h1>
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
      const threshold = 1000

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

  header {
    position: relative;
    min-height: calc(100vh);
    text-align: center;
    padding-top: 20vh;
    margin-top: -$navbar-safe-area;
    background: $blue;

    h1,
    p {
      position: relative;
      font-family: $font-headings;
      font-variation-settings: $font-headings-thin;
      font-size: calc(1.8vw + 1.25rem);
      margin: 0;
      z-index: 10;
    }
  }

  section {
    background: linear-gradient(to bottom, $blue 0, $white 800px);
    padding-top: 250px;
  }

  .fixed {
    position: fixed;
    z-index: 1;
    top: $navbar-safe-area;
    bottom: 0;
    will-change: transform;
    transition: .2s;

    &.shapes {
      left: 0;
      width: 45vw;
      background: url('~assets/images/shapes/home-orange.svg'), url('~assets/images/shapes/home-red.svg');
      background-position: left 0 bottom -10vw, left bottom;
      background-size: contain;
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
</style>
