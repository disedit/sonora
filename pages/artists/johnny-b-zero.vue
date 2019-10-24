<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/johnnybzeroband/',
      twitter: 'https://twitter.com/JohnnyBZero',
      instagram: 'https://www.instagram.com/johnnybzero/',
      youtube: 'https://www.youtube.com/channel/UC0YjCH68cz5KVtuM-zf7QHQ',
      spotify: 'https://open.spotify.com/artist/0JQpaf96mXplPylTI94CK5?si=gmHpvmUFRgieVaLPmrrcog'
    }"
  >
    <template v-slot:header>
      Johnny B. Zero
    </template>
    <p>
      Formació ubicada actualment a València que va sorgir en 2012 a Àustria de la ment del
      cantant, compositor i guitarrista <strong>Juanma Pastor</strong>. Després de guanyar la quarta edició del
      certamen Vinilo València, la banda va debutar amb el disc <em>Mayday!</eM> (2014). Les deu cançons
      del seu repertori ja destil·laven la passió pel rock de guitarres, però amb esperit aventurer, que
      els ha fet guanyar-se el favor de crítica i públic. L’EP <em>Crystal Totems</em> (2016) i els àlbums <em>Birds</em>
      (2017) i <em>Suicide Watermelon Stories</em> (2018) van servir per a consolidar la trajectòria d’un grup
      tan extravagant com la seua formació: bateria, sintetitzador, saxo i guitarra.
    </p>
    <p>
      Nominat com a millor disc de rock per <em>Suicide Watermelon Stories</em> en els I Premis Carles Santos
      de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/johnny-b-zero.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  head () {
    return {
      title: 'Johnny B. Zero - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${image}` }
      ]
    }
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'zB3fBt_dgvk')
  }
}
</script>
