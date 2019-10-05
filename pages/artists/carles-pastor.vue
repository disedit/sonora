<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/carlespastormusic/',
      twitter: 'https://twitter.com/Cpastor76',
      website: 'http://www.carlesdenia.com/',
      instagram: 'https://www.instagram.com/carles_pastor76/',
      spotify: 'https://open.spotify.com/artist/4WeRVZvQxz4Yu0Dr8RTLOv?si=b614A14KSDGJBXaBVhtOPA'
    }">
    <template v-slot:header>Carles Pastor</template>
    <p>
      <strong>Carles Pastor</strong> és un músic independent resident a La Safor amb 20 anys de trajectòria. Després
      de quatre àlbums -Travellers (2006), La noia del nord (Indústria Zero, 2009), Els ulls de Bob
      (Sama-rec, 2011) i Dies de ràdio (Indústria Zero, 2016)- el cantant i guitarrista va publicar
      Andròmina (LaCasaCalba) en maig de 2018. El seu objectiu era fer un disc rodó, acurat i
      contundent, amb les emocions per carretera. En les seues cançons porta la música d'autor a
      les vessants del blues, el pop i el mig temps del rock clàssic. Així, al disc trobem composicions
      pròpies, una musicació del poema “L’hotel París” (Vicent Andrés Estellés), una adaptació de
      “Concrete and Barbed Wire” (Lucinda Williams) sota el títol “Vaig fent camí” i una versió de
      “Agárrate a mí, María” (Los Secretos).
    </p>
    <p>
      Nominat com a millor disc de pop per Andròmina en els I Premis Carles Santos de la Música
      Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/carles-pastor.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', '3JG079x8h7Q')
  }
}
</script>
