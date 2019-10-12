<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/juneskaleidoscope/',
      twitter: 'https://twitter.com/JunesKaleidoscp',
      instagram: 'https://www.instagram.com/juneskaleidoscope/',
      youtube: 'https://www.youtube.com/user/Juneskaleidoscope',
      spotify: 'https://open.spotify.com/artist/4HQIymniDByxyvA5kOogLl?si=p9-QF8F7RV-qFhzb6SMFDA'
    }"
  >
    <template v-slot:header>
      June’s Kaleidoscope
    </template>
    <p>
      <strong>June’s Kaleidoscope</strong> és l’alter ego de la cantautora i pianista Arantxa Iranzo. La vocalista va
      deixar València després de graduar-se en piano clàssic per a establir-se a Londres. A la capital
      britànica va començar a recórrer el circuit de sales i va ser finalista del certamen The Rising of
      Bands del Hard Rock Café London. A més, el seu primer EP, Soon You Will See (2012), va sonar
      en la prestigiosa BBC. Posteriorment, va viatjar als Estats Units al ser escollida en el
      Songrwriting Workshop de la Universitat de Nova York. Allà va ser on Arantxa va decidir tornar
      a casa per a escriure el seu nou treball, Brave Journey Into The English Sea (2018). Produït per
      Matt Ingram (Laura Marling, Florence + The Machine) i farcit d’experiències personals, les
      seues cançons van sonar en els Concerts de Vivers 2017 on va ser telonera de Jamie Cullum.
      Guardonada com a millor disc de cançó d’autora per Brave Journey Into The English Sea en els I
      Premis Carles Santos de la Música Valenciana.
    </p>
    <p>
      Nominada com a millor cançó per “Best Hotel Room We’ve Ever Had” en els I Premis Carles
      Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/junes-kaleidoscope.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', '--6PPMrymmk')
  }
}
</script>
