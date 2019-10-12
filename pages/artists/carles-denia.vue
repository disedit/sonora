<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/Carles-D%C3%A9nia-115516288460497/',
      twitter: 'https://twitter.com/CarlesDenia',
      website: 'http://www.carlesdenia.com/',
      spotify: 'https://open.spotify.com/artist/2D7y6v6J3Gs41ewyv6NWzk',
      youtube: 'https://www.youtube.com/channel/UCm3aPl_Wk20S5XoB8APP0Fw'
    }"
  >
    <template v-slot:header>
      Carles Dénia
    </template>

    <p>
      <strong>Carles Dénia</strong> ha assumit un repte majúscul en la seua última creació: adaptar el Cant Espiritual,
      l’obra magna del poeta valencià Ausiàs March (1400-1459). Es tracta d’una oració delirant,
      complexa, plena de passió i sinceritat on l’autor mostra obertament les seues febleses. En el
      seu exercici creatiu, Carles Dénia porta els versos de March al segle XXI. I ho fa amb tocs de
      jazz, flamenc, cant valencià, música mediterrània, bolero americà i, sobretot, molt de ritme.
      D’aquesta manera, el músic de La Safor es lliura a la voluntat de ser tan visceral, polièdric i
      apassionat com ho és el mateix poema d’Ausiàs March. L’acompanyen sis reeixits músics i
      l’espectacle té una vessant teatral gràcies a la bailaora mexicana Karen Lugo.
    </p>
    <p>
      Guardonat com a millor disc de fusió, mestissatge i urbana per Cant Espiritual en els I Premis
      Carles Santos de la Música Valenciana.
    </p>
    <p>
      Nominat a millor disseny per Cant Espiritual en els I Premis Carles Santos de la Música
      Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/carles-denia.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'JGeUPAoTByU')
  }
}
</script>
