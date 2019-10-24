<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/elsjovenshantornat/',
      twitter: 'https://twitter.com/elsjovens',
      instagram: 'https://www.instagram.com/elsjovens/',
      youtube: 'https://www.youtube.com/channel/UCq7L4buafGO2yHcjCdnaGxg',
      spotify: 'https://open.spotify.com/artist/7Aop1VVQPR8WTm07073xoy?si=dy_2-QgPSUORuJRNr8rvIQ'
    }"
  >
    <template v-slot:header>
      Els Jóvens
    </template>

    <p>
      <strong>Els Jóvens</strong> és un grup de folk de L’Alacantí que vol ampliar els registres de la música tradicional valenciana. El seu repertori integra alguns patrons i recursos del folklore, com ara jotes, cants de batre, bandúrries o postisses, dins d’una manera actual de fer cançons i explicar el món. No volen tornar a cantar ni reinterpretar els clàssics, sinó donar visibilitat a la música tradicional aportant noves cançons que sonen enèrgiques, divertides i lliures de prejudicis.
    </p>

    <p>
      La seua actuació a Vilafranca va servir per a encetar el cicle Sonora, coincidint amb la inauguració de la capitalitat cultural d’aquest municipi. Allà van presentar el seu únic treball, de títol homònim, i alguna sorpreseta extra i van riure moltíssim xarrant sobre els costums i la manera de parlar dels vilafranquins i les vilafranquines.
    </p>

    <p>
      Guanyadors dels guardons a artista revelació, millor cançó per “Anís Tenis” i millor disc per Els Jóvens en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/els-jovens.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  head () {
    return {
      title: 'Els Jóvens - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${image}` }
      ]
    }
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'W-TpB4ngDKw')
  }
}
</script>
