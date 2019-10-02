<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/johnnybzeroband/',
      twitter: 'https://twitter.com/JohnnyBZero',
      instagram: 'https://www.instagram.com/johnnybzero/',
      spotify: 'https://open.spotify.com/artist/0JQpaf96mXplPylTI94CK5?si=gmHpvmUFRgieVaLPmrrcog'
    }">
    <template v-slot:header>Johnny B. Zero</template>
    <p>
      Formació ubicada actualment a València que va sorgir en 2012 a Àustria de la ment del
      cantant, compositor i guitarrista Juanma Pastor. Després de guanyar la quarta edició del
      certamen Vinilo València, la banda va debutar amb el disc Mayday! (2014). Les deu cançons
      del seu repertori ja destil·laven la passió pel rock de guitarres, però amb esperit aventurer, que
      els ha fet guanyar-se el favor de crítica i públic. L’EP Crystal Totems (2016) i els àlbums Birds
      (2017) i Suicide Watermelon Stories (2018) van servir per a consolidar la trajectòria d’un grup
      tan extravagant com la seua formació: bateria, sintetitzador, saxo i guitarra.
      Nominat com a millor disc de rock per Suicide Watermelon Stories en els I Premis Carles Santos
      de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/carles-denia.jpg'

export default {
  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'zB3fBt_dgvk')
  }
}
</script>
