<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/AndreuValorOficial/',
      twitter: 'https://twitter.com/andreuvalor',
      instagram: 'https://www.instagram.com/andreu_valor/',
      spotify: 'https://open.spotify.com/artist/4QLpUTkxZy7o3SQOYYbdeg?si=-IjALbdESbuHjmhXBCOMwQ',
      website: 'http://andreu-valor.blogspot.com/'
    }"
  >
    <template v-slot:header>
      Andreu Valor
    </template>

    <p>
      El compositor, cantant i guitarrista contestà és un dels artistes més prolífics i actius de l’escena
      musical valenciana. Després del seu debut, En les nostres mans (Mésdemil, 2010), Andreu
      Valor ha oferit més de 800 concerts i ha signat altres sis discos. Actualment, el cantautor
      presenta el projecte Insurrecte, una sincera declaració de principis. En aquest cas, el músic
      investiga en nous formats sense perdre l’essència intimista, personal, pròxima i honesta que
      defineixen la seua trajectòria. Així mateix, s’apropa a noves sonoritats i textures que renoven
      les propostes a les quals ens tenia acostumats.
    </p>
    <p>
      Nominat com a Millor disc de cançó d’autor per “Poemitza’t” en els I Premis Carles Santos de
      la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/andreu-valor.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  head () {
    return {
      title: 'Andreu Valor - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com${image}` }
      ]
    }
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'Svp7dNilPfY')
  }
}
</script>
