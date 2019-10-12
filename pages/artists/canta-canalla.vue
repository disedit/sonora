<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/cantacanalla/',
      twitter: 'https://twitter.com/CantaCanalla',
      instagram: 'https://www.instagram.com/cantacanalla/',
      youtube: 'https://www.youtube.com/channel/UC9VIj-Z1BPgECQ87wUw4Pzg',
      spotify: 'https://open.spotify.com/artist/5HKgr8Q50RQ74JbHX3mLtz?si=4mekRBPxTPqPn2_oI5tflw'
    }"
  >
    <template v-slot:header>
      Canta Canalla
    </template>
    <p>
      <strong>Canta Canalla</strong> és una formació de música familiar que va nàixer oficialment l’any 2017. El seu
      primer EP, de títol homònim, es va gravar als estudis de Bit Beat Boy de Benaguasil en març de
      2018 i es va publicar a finals del mes d’abril del mateix any. El seu segon treball, Revolucions
      per menuts, va veure la llum en setembre del 2019. Si en el seu debut s’atrevien amb el vals,
      les ranxeres, el blues, el tango o la rumba, ara han introduït melodies del folk americà, la
      cúmbia, el twist i el rock, el gènere que té més presència. Al llarg de la seua trajectòria, han
      tingut l’oportunitat de tocar en diverses localitats i comarques valencianes (Vilamarxant, La
      Pobla del Duc, Pedreguer, La Vall d’Uixó, Xàtiva) i en esdeveniments com la Fira Valenciana de
      la Música Trovam - Pro Weekend, la Fira de les Comarques en la Plaça de Bous de València, la
      XXII edició del Cant al Ras de Massalfassar, la XXV Nit de Rock d’Albalat dels Sorells, la Gira
      d’Escola Valenciana i el Cuquet Fest d’Alacant, entre d’altres.
    </p>
    <p>
      Nominat com a millor disc per a xiquets i xiquetes per Canta Canalla en els I Premis Carles
      Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/canta-canalla.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', '3-PSfaIuS_g')
  }
}
</script>
