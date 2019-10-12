<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/Veragreenland/',
      instagram: 'https://www.instagram.com/veragreen_band/',
      youtube: 'https://www.youtube.com/channel/UCm0Q-0DAf2_-HjxOv9_t7wg/videos',
      spotify: 'https://open.spotify.com/artist/4zzG67sucjcErB0RI5FxFG?si=mMctmn_FT2m7Yr-UzbF03A'
    }"
  >
    <template v-slot:header>
      Vera Green
    </template>
    <p>
      Banda alacantina formada per Ángel P. Gambín (bateria), Verónica Gómez (veu i guitarra acústica), Manolo Medina (guitarres elèctrica i acústica) i Jaime Zaragoza (baix). Es defineixen com un grup de pop-rock alternatiu que destaca per la fusió d’estils com el country, el folk, el rock and roll, el blues o la cançó francesa, entre d’altres. Després d’una maqueta de tres temes publicada en 2014, debutaren en llarga durada a finals del 2015 amb Le Paradis. En 2018 va veure la llum Blablablá, un àlbum enregistrat i mesclat per Marc Greenwood, membre de La Habitación Roja. El seu últim treball, l’EP La ley del espejo, es va editar el passat mes de juny.
    </p>
    <p>
      Nominats al millor disc de pop per Blablablá en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/vera-green.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'IFZzHqUKGKQ')
  }
}
</script>
