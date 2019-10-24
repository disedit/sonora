
<template>
  <artist-page
    :social="{
      website: 'http://www.prozaksoup.com/ca',
      facebook: 'https://www.facebook.com/ProzakSoup/',
      twitter: 'https://twitter.com/ProzakSoup',
      instagram: 'https://www.instagram.com/prozaksoupoficial/',
      youtube: 'https://www.youtube.com/user/ProzakSoup',
      spotify: 'https://open.spotify.com/artist/6EF4cCHpvhR4aPEPVG7xgc?si=YZpMbxMlT6uURunGo1CEzA'
    }"
  >
    <template v-slot:header>
      Prozak Soup
    </template>
    <p>
      Formació de la Safor que combina l’electrònica amb instruments convencionals per a oferir una proposta contundent i trencadora dins del panorama musical valencià. La seua barreja estilística i les seues lletres agredolces s’han plasmat en tres discs: Imbècil (Mésdemil, 2014), Bang! (Maldito Records, 2016) i Very Empastre (2017). Aquests treballs van ser produïts i enregistrats a Atomic Studio i Novoestudios de la mà dels productors Mark Dasousa i Facundo Novo. El seus singles “Més enllà del vel”, “Brolla la màgia”, “Voldria veure’t dansar” i “Bandera blanca” -els dos últims, homenatges particulars a Franco Battiato- també han sonat a esdeveniments com el Festivern, Feslloch, Gazpatxo Rock, Festardor, ViñaRock i Shikillo. Actualment treballen en el seu pròxim llançament.
    </p>
    <p>
      Nominat com a millor vídeo musical per “L’empastre de sempre” en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/prozak-soup.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  head () {
    return {
      title: 'Prozak Soup - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${image}` }
      ]
    }
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'yBOQq61l-bs')
  }
}
</script>
