<template>
  <main>
    <section>
      <logo class="logo" full />
      <div class="hero-poster">
        <img src="../assets/images/ilustracio.png" alt="I·lustració del cartell" />
      </div>
    </section>
    
    <artists is-home />
  </main>
</template>

<script>
import Artists from './artists'
import Logo from '@/components/Logo'

export default {
  components: {
    Logo,
    Artists
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  section {
    display: flex;
    align-items: center;
    height: calc(100vh - 6rem);
    flex-direction: column;
    margin: 0 -2rem 5rem -2rem;
    border-bottom: 2px $text solid;
  }

  .logo {
    max-width: 100%;
    padding: 0 1rem;
  }

  .hero-poster {
    img {
      object-fit: cover;
      object-position: 0 0;
      width: 100%;
      height: 60vh;
    }
  }

  @include media-breakpoint-down(sm) {
    section {
      margin: 0 -1rem 2rem -1rem;
    }
  }
</style>
