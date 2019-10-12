<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/Eva-Olivencia-2650426105181749/',
      spotify: 'https://open.spotify.com/artist/0flriK5jL1kgZuHPl71bw8?si=yl3qb784RjC0ZOJ73bmhYQ',
    }"
  >
    <template v-slot:header>
      Eva Olivencia
    </template>

    <p>
      <strong>Eva Olivencia</strong> és una cantautora amb influències del jazz que presenta el seu primer treball,
      Diferente. En els nou talls del repertori del disc es fusionen ritmes del jazz llatí, el bolero i la
      música brasilera, entre d’altres influències. La cantant compta amb el conjunt Túmbate Jazz
      format per Josep Pastor (piano), Germán Olivencia (bateria), Carlos Llidó (congues i percussió)
      i Carles Carbonell (baix). La banda es va crear en 1998 i tots els seus components, amb
      coneixements de música clàssica i moderna, tenen una llarga trajectòria durant la qual han
      treballat amb diferents formacions musicals. Així mateix, tots ells han participat en diversos
      projectes discogràfics jazzístics, com a solistes o acompanyants.
    </p>
    <p>
      Nominada com a artista revelació en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/eva-olivencia.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F2650426105181749%2Fvideos%2F1955885911380012%2F&show_text=0&width=560&autoplay=true', 'facebook')
  }
}
</script>
