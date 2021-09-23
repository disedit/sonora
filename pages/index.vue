<template>
  <main class="home">
    <div class="main-container">
      <header id="header" class="header">
        <h1>CIRCUIT<br> DE LA MÚSICA<br> VALENCIANA</h1>
        <p class="dates">
          Octubre 2021 &mdash; Març 2022
        </p>
        <div class="stickers" aria-hidden="true">
          <client-only>
            <Moveable v-bind="moveable" @drag="handleDrag" class="sticker sticker-smiley">
              <img src="~assets/images/stickers/sticker-smiley.svg" alt="">
            </Moveable>
            <Moveable v-bind="moveable" @drag="handleDrag" class="sticker sticker-love">
              <img src="~assets/images/stickers/sticker-love.svg" alt="">
            </Moveable>
            <Moveable v-bind="moveable" @drag="handleDrag" class="sticker sticker-year">
              <img src="~assets/images/stickers/sticker-year.svg" alt="">
            </Moveable>
            <Moveable v-bind="moveable" @drag="handleDrag" class="sticker sticker-note">
              <img src="~assets/images/stickers/sticker-note.svg" alt="">
            </Moveable>
          </client-only>
        </div>
      </header>
      <section id="venues" class="venues">
        <nuxt-link to="/programa/peniscola">
          <peniscola-sticker class="venue-sticker" />
          <span class="sr-only">Peníscola</span>
        </nuxt-link>
        <nuxt-link to="/programa/bocairent">
          <bocairent-sticker class="venue-sticker" />
          <span class="sr-only">Bocairent</span>
        </nuxt-link>
        <nuxt-link to="/programa/castello">
          <castello-sticker class="venue-sticker" />
          <span class="sr-only">Castelló</span>
        </nuxt-link>
        <nuxt-link to="/programa/alcoi">
          <alcoi-sticker class="venue-sticker" />
          <span class="sr-only">Alcoi</span>
        </nuxt-link>
        <nuxt-link to="/programa/castello-jazz">
          <castello-jazz-sticker class="venue-sticker" />
          <span class="sr-only">Castelló Jazz</span>
        </nuxt-link>
        <nuxt-link to="/programa/alacant">
          <alacant-sticker class="venue-sticker" />
          <span class="sr-only">Alacant</span>
        </nuxt-link>
      </section>
    </div>
    <nuxt-link id="marquee" to="/programa" class="marquee">
      <marquee-line :repeat="20" :duration="10">
        {{ nextGig }} &nbsp; &nbsp; &nbsp; &nbsp;
      </marquee-line>
    </nuxt-link>
  </main>
</template>

<script>
import AlacantSticker from '@/components/venues/AlacantSticker'
import CastelloJazzSticker from '@/components/venues/CastelloJazzSticker'
import AlcoiSticker from '@/components/venues/AlcoiSticker'
import CastelloSticker from '@/components/venues/CastelloSticker'
import BocairentSticker from '@/components/venues/BocairentSticker'
import PeniscolaSticker from '@/components/venues/PeniscolaSticker'
import MarqueeLine from '@/components/MarqueeLine'
const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.NUXT_ENV_CTF_SPACE_ID,
  accessToken: process.env.NUXT_ENV_CTF_ACCESS_TOKEN
})

export default {
  components: {
    MarqueeLine,
    PeniscolaSticker,
    BocairentSticker,
    CastelloSticker,
    AlcoiSticker,
    CastelloJazzSticker,
    AlacantSticker,
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
    nextGig () {
      const { date, artists } = this.gigs[0].fields
      const concertDate = new Date(date)
      const concertDay = `${concertDate.getDate()}`.padStart(2, '0')
      const concertMonth = `${concertDate.getMonth() + 1}`.padStart(2, '0')
      const artistsWithNames = artists.map(artist => this.artists[artist].name)
      const artistsString = artistsWithNames.join(' + ')
      return `Pròxim concert ${concertDay}/${concertMonth} ${artistsString}`
    }
  },

  async asyncData ({ $content }) {
    /* Get all concerts */
    const { items: gigs } = await client.getEntries({
      'content_type': 'concert',
      order: '-sys.createdAt'
    })

    /* Get all artists */
    const artists = {}
    const artistsList = await $content('artists').only(['name', 'slug']).fetch()
    artistsList.forEach((artist) => {
      artists[artist.slug] = artist
    })

    return {
      gigs,
      artists
    }
  },

  methods: {
    handleDrag ({ target, transform }) {
      target.style.transform = transform
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .home {
    padding-top: $navbar-safe-area;
    background: url(~assets/images/gradients/gradient-home.jpg);
    background-size: cover;
  }

  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: calc(100vh - #{$navbar-safe-area} - 2rem);
    padding: 2rem;

    h1 {
      line-height: .95;
      font-size: $text-headline;
      letter-spacing: 0.02em;
    }

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
    padding: 10vh 0;

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
