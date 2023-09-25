<template>
  <main class="home">
    <div class="venues d-none d-lg-grid">
      <HomeVenue
        v-for="venue in venues"
        :key="venue.key"
        :venue="venue"
        :flower="flowers[venue.key]"
        :gradient="gradients[venue.key]"
        @loaded="imageLoaded"
      />
    </div>
    <div class="cover d-lg-none">
      <div class="cover-dates reckless">
        set. 23<br>
        &mdash; març 24
      </div>
    </div>
    <transition name="fade">
      <div v-if="!finishedLoading" class="loader">
        <transition name="fade">
          <sonora-logo v-if="showSpinner" class="logo" />
        </transition>
      </div>
    </transition>
  </main>
</template>

<script>
import GuardamarFlower from '@/assets/images/illustrations/guardamar.webp'
import GuardamarGradient from '@/assets/images/gradients/guardamar.jpg'
import GeldoFlower from '@/assets/images/illustrations/geldo.webp'
import GeldoGradient from '@/assets/images/gradients/geldo.jpg'
import CastelloFlower from '@/assets/images/illustrations/castello.webp'
import CastelloGradient from '@/assets/images/gradients/castello.jpg'
import AlacantFlower from '@/assets/images/illustrations/alacant.webp'
import AlacantGradient from '@/assets/images/gradients/alacant.jpg'

export default {
  data () {
    return {
      loaded: [],
      finishedLoading: false,
      showSpinner: false
    }
  },
  computed: {
    venues () {
      return [
        {
          key: 'guardamar',
          name: 'Guardamar del Segura',
          artists: this.getArtists('guardamar')
        },
        {
          key: 'geldo',
          name: 'Geldo',
          artists: this.getArtists('geldo')
        },
        {
          key: 'castello',
          name: 'Castelló de la Plana',
          artists: this.getArtists('castello')
        },
        {
          key: 'alacant',
          name: 'Alacant',
          artists: this.getArtists('alacant')
        }
      ]
    },
    flowers () {
      return {
        guardamar: GuardamarFlower,
        geldo: GeldoFlower,
        castello: CastelloFlower,
        alacant: AlacantFlower
      }
    },
    gradients () {
      return {
        guardamar: GuardamarGradient,
        geldo: GeldoGradient,
        castello: CastelloGradient,
        alacant: AlacantGradient
      }
    }
  },

  watch: {
    loaded (loaded) {
      if (loaded.length >= 8) {
        this.finishedLoading = true
      }
    }
  },

  async asyncData ({ $api }) {
    const artists = await $api.getArtists({ order: 'fields.order' })
    return { artists }
  },

  mounted () {
    setTimeout(() => { this.showSpinner = true }, 1000)
  },

  methods: {
    getArtists (venue) {
      return this.artists.filter(artist => artist.fields.venue === venue)
        .map(artist => ({ name: artist.fields.name, slug: artist.fields.slug }))
    },

    imageLoaded (image) {
      this.loaded.push(image)
    }
  },

  head () {
    return {
      meta: [
        { name: 'theme-color', content: `#5d589d` }
      ],
      link: [
        { rel: 'preload', href: GuardamarFlower, as: 'image' },
        { rel: 'preload', href: GuardamarGradient, as: 'image' },
        { rel: 'preload', href: GeldoFlower, as: 'image' },
        { rel: 'preload', href: GeldoGradient, as: 'image' },
        { rel: 'preload', href: CastelloFlower, as: 'image' },
        { rel: 'preload', href: CastelloGradient, as: 'image' },
        { rel: 'preload', href: AlacantFlower, as: 'image' },
        { rel: 'preload', href: AlacantGradient, as: 'image' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: $navbar-safe-area;
}

.venues {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: calc(100vh - var(--navbar-safe-area));
  height: calc(100dvh - var(--navbar-safe-area));
}

.cover {
  height: 100vh;
  height: 100dvh;
  background-image:
    url(../assets/images/illustrations/home.webp),
    url(../assets/images/gradients/castello.jpg);
  background-size: 100%, 100% 100%;
  background-repeat: no-repeat, no-repeat;
  background-position: top, center;
  overflow: hidden;

  &-flowers {
    width: 100%;
  }

  &-dates {
    width: fit-content;
    margin-left: auto;
    letter-spacing: -0.24px;
    line-height: .8;
    font-size: $text-md;
    margin-top: 7rem;
    padding: 0 $mobile-padding;
  }
}

.loader {
  position: fixed;
  background-color: $white;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-content: center;

  .logo {
    height: 8rem;
  }
}

@include media-breakpoint-down(lg) {
  .home {
    padding-top: 0;
  }
}
</style>
