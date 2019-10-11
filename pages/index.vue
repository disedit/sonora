<template>
  <main>
    <section>
      <logo class="logo" full />
      <div class="hero-poster">
        <img src="../assets/images/ilustracio.jpg" alt="I·lustració del cartell" />
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
    height: calc(100vh - 4rem);
    flex-direction: column;
    margin-bottom: 5rem;
    border-bottom: 2px $text solid;
    padding-top: 3rem;
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
      margin-bottom: 3rem;
    }
  }
</style>
