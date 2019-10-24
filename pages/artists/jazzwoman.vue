<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/JazzWoman-301017713327266/',
      twitter: 'https://twitter.com/JazzWoman_Music',
      instagram: 'https://www.instagram.com/jazzwoman.music/',
      youtube: 'https://www.youtube.com/channel/UC8vU5uzIvN68GA4Kya3w0zw',
      spotify: 'https://open.spotify.com/artist/7yMJSfFJgb2YFBAKSckG4z?si=D-LInekOS8K-sYcBw2HTow'
    }"
  >
    <template v-slot:header>
      Jazzwoman
    </template>
    <p>
      Rapera de València formada com a saxofonista al conservatori i a les xarangues. Tanmateix, va
      trobar en el rap el seu camí per a lluitar contra les injustícies i el masclisme. És membre del
      col·lectiu Periferia Norte, amb el qual va enregistrar els vídeos de les seues primeres
      creacions: “Veneno”, “Del ghetto” o “Nano”, entre d’altres. Posteriorment, en maig del 2018,
      va veure la llum el seu primer llarga durada, Bagheera (produït per Periferia Norte). Al llarg de
      la seua trajectòria també ha format part del grup Machete en Boca i ha col·laborat amb Tesa,
      Tremenda Jauría i Zoo, amb els quals va enregistrar el tema “Cançons d’ofrena”.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/jazzwoman.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  head () {
    return {
      title: 'Jazzwoman - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${image}` }
      ]
    }
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'gmEewvoM15s')
  }
}
</script>
