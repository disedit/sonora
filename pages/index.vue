<template>
  <main>
    <section>
      <logo full />
      <div class="hero-poster">
        <img src="../assets/images/ilustracio.png" alt="" />
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
  section {
    display: flex;
    align-items: center;
    height: 95vh;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  .hero-poster {
    img {
      object-fit: cover;
      object-position: 0 0;
      width: 100%;
      height: 60vh;
    }
  }
</style>
