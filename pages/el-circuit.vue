<template>
  <main class="about">
    <p class="section-title">
      {{ page.title }}
    </p>
    <div class="about-wrapper">
      <h1 class="about-title">
        <div v-html="page.heading" class="sup" />
        <div v-html="page.subheading" class="reckless" />
      </h1>

      <div class="about-content">
        <div class="about-illustrations d-none d-lg-block">
          <img src="../assets/images/illustrations/guardamar.webp" alt="" class="about-illustrations-1">
        </div>
        <div v-html="$md.render(page.content)" v-if="page.content" class="about-text" />
      </div>
    </div>
    <div class="about-illustration d-lg-none">
      <img src="../assets/images/illustrations/home.webp" alt="" class="about-illustration-0">
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $api }) {
    const { fields: page } = await $api.getAboutPage()
    return { page }
  },
  head () {
    return {
      title: 'El Circuit - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` },
        { name: 'theme-color', content: '#FEFDF0' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  margin-top: $navbar-safe-area + 5rem;
  overflow: hidden;

  &-wrapper {
    max-width: 1300px;
    margin: 0 auto;
    padding: $viewport-x-padding;
  }

  &-title {
    font-size: clamp(7rem, 10vw, 10rem);
    line-height: .85;
    letter-spacing: -0.03em;

    .sup {
      margin-bottom: 1rem;
    }

    .reckless {
      font-size: .88em;
      font-weight: 300;
      letter-spacing: -0.03em;
    }
  }

  &-text {
    font-size: $text-lg;
    line-height: 1.25;

    p {
      margin-bottom: 1em;
    }
  }

  &-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 3rem 0 10rem;
  }

  &-illustrations {
    position: relative;

    img {
      position: absolute;
    }

    &-1 {
      width: 135%;
      right: 0;
      top: -30%;
    }

    &-2 {
      width: 195%;
      top: 70%;
      right: 0;
    }
  }
}

@media (max-width: 1100px) {
  .about {
    &-content {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@include media-breakpoint-up(lg) {
  .section-title {
    position: absolute;
    overflow: hidden;
    height: 0;
  }
}

@include media-breakpoint-down(lg) {
  .about {
    margin-top: $mobile-nav;

    &-wrapper {
      padding: 0 $mobile-padding;
    }

    &-title {
      font-size: 3.12rem;
    }

    &-content {
      grid-template-columns: 1fr;
      margin-top: 1.5rem;
      margin-bottom: -8rem;
    }

    &-text {
      font-size: 1.25rem;
    }

    &-illustration {
      img {
        width: 100%;
      }
    }
  }
}
</style>
