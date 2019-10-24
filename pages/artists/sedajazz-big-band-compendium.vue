<template>
  <artist-page
    :social="{
      website: 'https://sedajazz.es/',
      facebook: 'https://www.facebook.com/sedajazz',
      twitter: 'https://twitter.com/Sedajazz',
      instagram: 'https://www.instagram.com/sedajazz_/',
      spotify: 'https://open.spotify.com/artist/2QOQ6GNdQXllWy8csXUkqb?si=2Da2VyexTaOkv7wPWq5Sog'
    }"
  >
    <template v-slot:header>
      Sedajazz Big Band Compendium
    </template>
    <p>
      Compendium és una obra del compositor i saxofonista de jazz Jesús Santandreu. Es tracta d’un
      concert per a big band de jazz en un sol moviment que va ser escrit amb motiu del 25
      aniversari de la creació de la Sedajazz Big Band i per als músics que la conformen. A diferència
      de les composicions tradicionals per a grans formacions, Compendium es desenvolupa de
      manera simfònica sense intervencions solistes. L’obra posseeix una gran força climàtica,
      juntament amb un gran varietat de colors tímbrics, riquesa harmònica i frenesí rítmic. En la
      seua interpretació hi participen: Jesús Santandreu (compositor i director); Perico Sambeat i
      Alexey León (saxo alt); Vicente Macián i Joan Benavent (saxo tenor); Fco. A. Blanco Latino
      (saxo baríton); Voro Garcia, Raul Garcia, Fede Crespo i Pep Zaragoza (trompeta); Carlos
      Martín, Toni Belenguer i Paco Soler (trombó); Jose Boluda (tuba); Alberto Palau (piano); Iván
      Cebrián (guitarra); Ales Cesarini (contrabaix); Felip Santandreu (bateria); i Carlos Llidó
      (percussió).
    </p><p>
      Guardonada com a Millor disc de jazz per Compendium en els I Premis Carles Santos de la
      Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/sedajazz-big-band-compendium.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  head () {
    return {
      title: 'Sedajazz Big Band Compendium - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${image}` }
      ]
    }
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'https://player.vimeo.com/video/233746909?autoplay=1&byline=0', 'vimeo')
  }
}
</script>
