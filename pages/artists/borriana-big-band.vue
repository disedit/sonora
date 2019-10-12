<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/borrianabigband/',
      youtube: 'https://www.youtube.com/channel/UCkpK4wG17WYBZyqjjLqKgHg',
      instagram: 'https://www.instagram.com/borrianabigband/',
      spotify: 'https://open.spotify.com/artist/59jy68zDZbQuTcJxul5NC0?si=luCssiC1S-qGWizmp_Ko7g',
      website: 'https://borrianabigband.com/'
    }"
  >
    <template v-slot:header>
      Borriana Big Band
    </template>

    <p>
      <strong>Borriana Big Band</strong> és una agrupació musical nascuda a la capital de La Plana Baixa, amb músics d’aquesta localitat i els seus voltants, creada pel reconegut productor musical, compositor i arranjador Juanjo Carratalà. La formació es caracteritza per la qualitat i la gran versatilitat estilística: interpreten amb la mateixa singularitat temes clàssics del jazz així com versions de cançons ska, rock, latin, etc. Totes les composicions s’enriqueixen amb els arranjaments exclusius del mateix Carratalà. El seu primer àlbum, D’ací, recollia temes d’Al Tall, Raimon, Pau Alabajos, La Gossa Sorda i Obrint Pas, entre d’altres.
    </p>
    <p>
      Nominada com a artista revelació en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/borriana-big-band.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'MvhDk4rRBFo')
  }
}
</script>
