

<template>
  <artist-page
    :social="{
      website: 'https://luup.cat/pavvla/',
      facebook: 'https://www.facebook.com/pavvlamusic/',
      twitter: 'https://twitter.com/pavvla_',
      instagram: 'https://www.instagram.com/pavvla_/',
      spotify: 'https://open.spotify.com/artist/6VyWLGXsjUekjMDWZ1jcwU?si=M1fhQNUUT1Gk3fBnXX09HA'
    }">
    <template v-slot:header>PAVVLA</template>
    <p>
      Actriu i cantant, <strong>Paula Jornet</strong> va estudiar composició a l’escola BIMM de Brighton. Poc després va començar a tocar en pubs britànics amb el seu nom artístic, PAVVLA. Així mateix, pujava cançons a la xarxa, canal on va ser descoberta per Luup Records. Aquest segell va publicar el seus primers singles, “Young” i “Skin”, i també el seu primer llarga durada, <em>Creatures</em> (2016), un compendi de folk, pop i electrònica. El seu segon treball, <em>Secretly Hoping You Catch Me Looking</em> va veure la llum a finals del 2018. En les seues cançons, la vocalista manifesta una nova personalitat, amb la provocació per bandera i una actitud molt més gamberra. D’aquesta manera, es desfà per complet de l’actitud naïve i innocent del seu debut.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/pavvla.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'fwwIXrMhbf8')
  }
}
</script>
