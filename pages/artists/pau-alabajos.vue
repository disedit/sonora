




<template>
  <artist-page
    :social="{
      website: 'http://paualabajos.com/',
      facebook: 'https://www.facebook.com/paualabajos/',
      twitter: 'https://twitter.com/PauAlabajos',
      instagram: 'https://www.instagram.com/paualabajos/',
      spotify: 'https://open.spotify.com/artist/2fx0EsmjDotI8Vq4daoB2g?si=8tQpODhyQM6UGyzYK48G8w'
    }">
    <template v-slot:header>Pau Alabajos</template>
    <p>
      El cantautor de Torrent (Horta Oest) és una de les veus més reconegudes de l’escena valenciana. Va començar tocant pels carrers de Ciutat Vella a València. En 2004 va publicar el seu debut, Futur en venda (Cambra Rècords), al qual seguirien Teoria del caos (Cambra Rècords, 2008); Una amable, una trista, una petita pàtria (Bureo Músiques, 2011); Mural del País Valencià (Bureo Músiques, 2013); #paualpalau (RGB Suports, 2014); i L’amor i la ferocitat (Bureo Músiques, 2016). En el seu últim llançament, Ciutat a cau d’orella (Bureo Músiques, 2018), musica poemes extrets de diversos llibres de Vicent Andrés Estellés sota la producció de Santos & Fluren (Sidonie, Love of Lesbian, Izal).
    </p>
    <p>
      Nominat com a millor disc de cançó d’autor per Ciutat a cau d’orella en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/pau-alabajos.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'sJTKJJYkr0Q')
  }
}
</script>
