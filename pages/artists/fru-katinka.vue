<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/FruKatinkaLOVE/',
      twitter: 'https://twitter.com/frukatinka',
      instagram: 'https://www.instagram.com/frukatinka/',
      youtube: 'https://www.youtube.com/channel/UCfqDz1umPu4H_fkRm874yvw',
      spotify: 'https://open.spotify.com/artist/651vtw2URONkPrvHKXUPES?si=RGYhjmmdTVS6Go7yfn_zBQ'
    }"
  >
    <template v-slot:header>
      Fru Katinka
    </template>
    <p>
      <strong>Fru Katinka</strong> és la unió entre Marta Domingo i Alex Vidal, una proposta interdisciplinar en la que tenen quasi el mateix pes la música, l'estètica i el concepte. Parteixen d'una essència pop, però beuen de multitud de gèneres i viuen en un món d’avantguarda sonora que va del R&B a la new wave passant pel trap i el dancehall. Als seus concerts transcendeixen el concepte de banda per a oferir un show perfomàtic on conflueixen ball, visuals i interpretació. Tot això amb l'objectiu de transmetre un univers post-pop molt personal que fusiona influències nòrdiques i mediterrànies. Han editat els discos Fru Katinka (2018) i Islas (2019).
    </p>

    <p>
      Nominat com artista revelació en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/fru-katinka.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  head () {
    return {
      title: 'Fru Katinka - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${image}` }
      ]
    }
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', '7aqqcl_wXyw')
  }
}
</script>
