<template>
  <artist-page
    :social="{
      website: 'https://oscarbriz.com/',
      facebook: 'https://www.facebook.com/oscarbrizmusic/',
      instagram: 'https://www.instagram.com/oscarbrizgisbert/',
      spotify: 'https://open.spotify.com/artist/3YAc1ZREbaUSJjNQIlNzeB?si=mCMS-mpzSNG1nyxOA4HuIw'
    }"
  >
    <template v-slot:header>
      Òscar Briz
    </template>
    <p>
      Òscar Briz és un dels revitalitzadors més destacats de la cançó des dels inicis del segle XXI.
      Cantant, guitarrista i autor valencià que va iniciar la seua carrera en diversos conjunts musicals
      (C.O.D.A., Banderas de Mayo, The Beat Dealers, els australians The Whitlams). Posteriorment,
      va començar una carrera en solitari, malgrat que habitualment toca en banda, que ara
      compleix 20 anys. Amb més d’una desena de discos sota el seu nom, i d’altres amb diferents
      projectes paral·lels, Briz ha rebut repetidament premis i nominacions com els Ovidi Montllor
      (en diferents edicions), el Neo Música (de l’antiga Cartelera Levante-EMV), l’Altaveu Frontera,
      el Terra i Cultura, el Puig Porret (en la categoria de cançó) i un parell d’Enderrock. Actualment,
      presenta una revisitació de la seua obra que culminarà amb una macro producció en la que
      interpretarà versions actuals del seu ampli repertori de les darrers dues dècades.
    </p><p>
      Nominat com a Millor Disc de Pop per “No caure és que m’agafes de les mans” i per Millor
      Cançó per “Enric, Empar i la mar” en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/oscar-briz.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  head () {
    return {
      title: 'Òscar Briz - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${image}` }
      ]
    }
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'HYBF-4nzQio')
  }
}
</script>
