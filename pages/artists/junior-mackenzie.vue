<template>
  <artist-page
    :social="{
      website: 'http://juniormackenzie.com',
      facebook: 'https://www.facebook.com/juniormackenzie.official/',
      twitter: 'https://twitter.com/juniormackenzie',
      instagram: 'https://www.instagram.com/juniormackenziegram/',
      spotify: 'https://open.spotify.com/artist/0jD7HsSxNzzWWhFUOWlrRt?si=4CsfUX6qS9yMLDAU8E_57w'
    }">
    <template v-slot:header>Junior Mackenzie</template>
    <p>
      <strong>Junior Mackenzie</strong> és el nom artístic del cantant, compositor i guitarrista castellonenc Juan
      Fortea. Ell mateix afirma que la seua música no és fàcil de descriure. Tanmateix, reconeix la
      seua inclinació pels ritmes de la música nord-americana com el folk, el rock, el blues o el jazz.
      L’essència del projecte es troba en les cançons, que compten amb una sumptuosa
      instrumentació on es combinen capes d’acords melòdics construïdes amb teclats i guitarres.
      Després dels seus treballs anteriors, molt ben rebuts per la crítica, i algunes gires acústiques
      pels Estats Units, el vocalista va publicar Files of Life (LP, 2017) amb la coproducció de Dani
      Castelar (Paolo Nutini, REM, Editors).
    </p>
    <p>
      Nominat a millor disc de rock per Files of Life en els I Premis Carles Santos de la Música
      Valenciana.
    </p>
    <p>
      Guardonat com a millor vídeo musical per “Haze” en els I Premis Carles Santos de la Música
      Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/junior-mackenzie.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', '1OAbdqJIGOk')
  }
}
</script>
