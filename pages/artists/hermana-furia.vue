<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/hermanafuria/',
      twitter: 'https://twitter.com/hermanafuria',
      instagram: 'https://www.instagram.com/hermanafuriaoficial/'
    }"
  >
    <template v-slot:header>
      Hermana Furia
    </template>
    <p>
      La productora Entrebotones presenta el nuevo proyecto del incombustible Edu Molina (Tomaccos, SCR, The Garlic Phantoms) en el que, junto a Tweety Capmaqny a la batería, Paula C. Marcos al bajo y la arrolladora Nuria Furia a la voz y sintes, nos traen una mezcla de enérgico stoner y hard rock en castellano y un directo en que no dejarán nada en pie.
    </p>
    <p>
      La productora Entrebotones presenta el nou projecte de l'incombustible Edu Molina (Tomaccos, SCR, The Garlic Phantoms) en el què, al costat de Tweety Capmaqny a la bateria, Paula C. Marcos al baix i l'arrasadora Nuria Fúria a la veu i sintes, ens porten una barreja d’enèrgic stoner i hard rock en castellà i
un directe que no deixarà res en peu.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/hermana-furia.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  head () {
    return {
      title: 'Hermana Furia - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${image}` }
      ]
    }
  },

  mounted () {
    this.$emit('image', image)
    // this.$emit('video', '')
  }
}
</script>
