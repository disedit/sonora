<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/cantacanalla/',
      twitter: 'https://twitter.com/CantaCanalla',
      instagram: 'https://www.instagram.com/cantacanalla/',
      spotify: 'https://open.spotify.com/artist/5HKgr8Q50RQ74JbHX3mLtz?si=4mekRBPxTPqPn2_oI5tflw'
    }">
    <template v-slot:header>Canta Canalla</template>
    <p>
      La formació Canta Canalla fa música familiar però no dóna la nota, o això intenten. Ballen un vals valent que va lent, dormen en bressols peluts, passegen ranxeres, beuen blues i rock, berenen tangos, dissimulen rumbes, televisen funky i falsegen el country abans de tergiversar boleros. Fan un poc de tot i un toc de tot. Tenen guitarres, baix, piano, bateria, melòdica, pandereta, xilòfon, pal de pluja…, i ganes, moltes ganes! El seu primer disc, de títol homònim, es va publicar en abril de 2018 i el passat mes de juny van presentar el tema “La colla U”, cançó oficial del llibre homònim de Jaume Monzó i Miguel Ángel Giner Bou (Premi de Narrativa Enric Lluch als Premis Ciutat d'Algemesí), publicat per Andana Editorial.
    </p>
    <p>
      Nominat com a millor disc per a xiquets i xiquetes per Canta Canalla en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/canta-canalla.jpg'

export default {
  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', '3-PSfaIuS_g')
  }
}
</script>
