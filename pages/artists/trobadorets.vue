<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/Trobadorets-119898938086489/',
      twitter: 'https://twitter.com/trobadorets?lang=ca',
      instagram: 'https://www.instagram.com/trobadorets/',
      youtube: 'https://www.youtube.com/channel/UCmX22rtkmGX9mxYUAmKlYCA',
      spotify: 'https://open.spotify.com/artist/59GCyQu1AitFqjUexnqX4m?si=Oy-DfSIMTFqIqzkRXplq-A'
    }"
  >
    <template v-slot:header>
      Trobadorets
    </template>
    <p>
      Grup de música familiar de Castelló format en l’any 2010 i encapçalat pel cantant Pau Sancho. Nascut per tal d’animar les activitats infantils de Vilafranca (Alt Maestrat) i actuar en algunes llibreries de les comarques castellonenques, el projecte va anar creixent fins a convertir-se en una de les formacions que més concerts fa al llarg de l’any. Trobadorets va presentar el seu quart treball discogràfic, titulat A xalar!, en estiu de 2018 amb la participació de Dani Chiva (contrabaix, baix), Gerard Chiva (guitarra), Víctor Peris (percussionista), Javi Ruá (guitarra) i Santi Vicente (diversos instruments). Tanmateix, la formació mostra tot el seu potencial en els directes, on l’escenografia i la teatralitat són elements fonamentals.
    </p>
    <p>
      Nominats com a millor disc per a xiquets i xiquetes per A xalar! en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/trobadorets.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'tBr578cem3Y')
  }
}
</script>
