<template>
  <main class="home safe-area">
    <div class="main-container">
      <header id="header" class="header">
        <h1>CIRCUIT<br> DE LA MÚSICA<br> VALENCIANA</h1>
        <p class="dates">
          Octubre 2021 &mdash; Març 2022
        </p>
        <div class="stickers" aria-hidden="true">
          <client-only>
            <moveable v-bind="moveable" @drag="handleDrag" class="sticker sticker-smiley">
              <img src="~assets/images/stickers/sticker-smiley.svg" alt="">
            </moveable>
            <moveable v-bind="moveable" @drag="handleDrag" class="sticker sticker-year">
              <img src="~assets/images/stickers/sticker-year.svg" alt="">
            </moveable>
            <moveable v-bind="moveable" @drag="handleDrag" class="sticker sticker-note">
              <img src="~assets/images/stickers/sticker-note.svg" alt="">
            </moveable>
            <moveable v-bind="moveable" @drag="handleDrag" class="sticker sticker-love">
              <img src="~assets/images/stickers/sticker-love.svg" alt="">
            </moveable>
          </client-only>
        </div>
      </header>
      <section id="venues" class="venues">
        <nuxt-link v-for="(venueName, venueKey) in venues" :key="venueKey" :to="`/programa/${venueKey}`">
          <component :is="`venues-${venueKey}`" class="venue-sticker" />
          <span class="sr-only">{{ venueName }}</span>
        </nuxt-link>
      </section>
    </div>
    <nuxt-link id="marquee" v-if="nextGig" to="/programa" class="marquee">
      <marquee-line :repeat="20" :duration="10">
        {{ nextGigText }} &nbsp; &nbsp; &nbsp; &nbsp;
      </marquee-line>
    </nuxt-link>
  </main>
</template>

<script>
export default {
  components: {
    Moveable: () => {
      if (process.client) {
        return import('vue-moveable')
      }
    }
  },

  data () {
    return {
      moveable: {
        draggable: true,
        resizable: false,
        keepRatio: true,
        scalable: false,
        rotatable: false,
        pinchable: false,
        origin: false
      }
    }
  },

  computed: {
    nextGigText () {
      const { date, artists } = this.nextGig.fields
      const concertDate = new Date(date)
      const concertDay = `${concertDate.getDate()}`.padStart(2, '0')
      const concertMonth = `${concertDate.getMonth() + 1}`.padStart(2, '0')
      const artistsWithNames = artists.map(artist => artist.fields.name)
      const artistsString = artistsWithNames.join(' + ')
      return `Pròxim concert ${concertDay}/${concertMonth} ${artistsString}`
    },

    venues () {
      return this.$store.state.venues
    }
  },

  async asyncData ({ $api }) {
    const [ nextGig ] = await $api.nextGig()
    return { nextGig }
  },

  methods: {
    handleDrag ({ target, transform }) {
      target.style.transform = transform
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    background-image: url(~assets/images/gradients/gradient-home.jpg);
    background-color: $pink;
    background-size: cover;
  }

  .main-container {
    padding-top: 1rem;
  }

  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: calc(100vh - #{$navbar-safe-area} - 4rem);

    .dates {
      font-size: clamp(1rem, 3vw, 1.75rem);
    }

    .sticker {
      position: absolute;
      width: 12vw;
      height: 12vw;
      z-index: 500;
      cursor: move;
      transition: filter .5s ease;

      &:hover {
        filter: drop-shadow(0 5px 5px rgba($blue, .2));
      }

      &-love {
        top: -1%;
        right: 7%;
        width: 18vw;
        height: 18vw;
        transform: rotate(-10deg);
      }

      &-note {
        top: 15%;
        right: 50%;
      }

      &-smiley {
        bottom: 30%;
        right: 30%;
        transform: rotate(20deg);
      }

      &-year {
        bottom: calc(30% - 6vw);
        right: calc(30% - 9vw);
        transform: rotate(-5deg);
      }
    }
  }

  .venues {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 6vw;
    row-gap: 8vh;
    padding-top: calc(1.5rem + 4vh);

    a {
      text-align: center;
    }

    .venue-sticker {
      width: 100%;
      max-width: 20vw;
      height: auto;
      margin: 0 auto;
    }
  }

  .marquee {
    display: block;
    background: $yellow;
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    padding: .75rem 0;
    text-transform: uppercase;
    color: $black;
  }
</style>
