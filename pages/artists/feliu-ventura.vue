<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/Feliu.Ventura.Oficial/',
      twitter: 'https://twitter.com/FeliuVentura',
      instagram: 'https://www.instagram.com/feliuventura/',
      spotify: 'https://open.spotify.com/artist/5Mvf1DjQ6BQ5CKra8wDDqG',
      website: 'https://feliuventura.cat/'
    }"
  >
    <template v-slot:header>
      Feliu Ventura
    </template>

    <p>
      El cantautor xativí Feliu Ventura és una de les figures catalitzadores de la música valenciana
      des de mitjans de la dècada dels 90. Després d’enregistrar la cinta L’única diferència (Cambra
      Records, 1997) i oferir desenes de concerts per tot el país, el músic va fer un pas endavant amb
      el disc Estels de tela (45 revolucions, 2000). Més endavant arribarien treballs com Barricades
      de paper (Propaganda pel fet, 2003), Que no s’apague la llum amb Lluís Llach (Claus Records –
      Propaganda pel fet, 2005), Alfabets de futur (Propaganda pel fet, 2006) i Música i lletra
      (Propaganda pel fet, 2011). Al llarg de la seua trajectòria, Feliu Ventura també ha treballat per
      a músics com Miquel Gil, Pep Gimeno o Eduard Iniesta. A més, ha col·laborat en altres
      espectacles, ha realitzat un documental i ha publicat una novel·la. Ara presenta l’àlbum
      Convocatòria (Propaganda pel fet), primer enregistrament amb temes nous des de fa vuit anys.
    </p><p>
      Nominat en companyia de Xerramequ i els Aborígens a Millor Disc de cançó d’autor per
      “Sessions ferotges” en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/feliu-ventura.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'HeJGZc5vVZc')
  }
}
</script>
