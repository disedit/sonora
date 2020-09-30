<template>
  <main>
    <header>
      <h1>CIRCUIT DE MÚSICA VALENCIANA</h1>
      <p class="dates">
        25.10.20 → 13.3.21
      </p>
    </header>
    <section id="artists">
      <artists is-home />
    </section>
  </main>
</template>

<script>
import Artists from './artists'

export default {
  components: {
    Artists
  },

  head () {
    return {
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  header {
    min-height: calc(100vh);
    text-align: center;
    padding-top: 30vh;
    margin-top: -$navbar-safe-area;
    background: $blue;

    h1,
    p {
      font-family: $font-headings;
      font-variation-settings: $font-headings-thin;
      font-size: calc(1.8vw + 1.25rem);
      margin: 0;
    }
  }

  section {
    background: linear-gradient(to bottom, $blue 0, $white 800px);
  }
</style>
