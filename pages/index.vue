<template>
  <main class="home">
    <div class="venues d-none d-lg-grid">
      <HomeVenue
        v-for="venue in venues"
        :key="venue.key"
        :venue="venue"
      />
    </div>
    <div class="cover d-lg-none">
      <div class="cover-dates reckless">
        set. 23<br>
        &mdash; març 24
      </div>
    </div>
  </main>
</template>

<script>
export default {
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
    }
  },

  async asyncData ({ $api }) {
    const artists = await $api.getArtists({ order: 'fields.order' })
    return { artists }
  },

  methods: {
    getArtists (venue) {
      return this.artists.filter(artist => artist.fields.venue === venue)
        .map(artist => ({ name: artist.fields.name, slug: artist.fields.slug }))
    }
  },

  head () {
    return {
      meta: [
        { name: 'theme-color', content: `#5d589d` }
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
  height: 100svh;
  background-image:
    url(../assets/images/illustrations/home.png),
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
    font-size: 1.5rem;
    margin-top: 7rem;
    padding: 0 $mobile-padding;
  }
}

@include media-breakpoint-down(lg) {
  .home {
    padding-top: 0;
  }
}
</style>
