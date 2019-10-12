<template>
  <artist-page
    :social="{
      website: 'http://santeroylosmuchachos.com/',
      facebook: 'https://www.facebook.com/SanteroYLosMuchachos/',
      twitter: 'https://twitter.com/SanteroyM',
      instagram: 'https://www.instagram.com/santeroylosmuchachos/',
      youtube: 'https://www.youtube.com/channel/UChi_9Jr8YnrjbyiqLA5-eXQ',
      spotify: 'https://open.spotify.com/artist/1KX80l2v6D9jbexW3IkWvR?si=PWahdT98Sp2fbqFzGtblvA'
    }"
  >
    <template v-slot:header>
      Santero y Los Muchachos
    </template>
    <p>
      Miguel Ángel Escrivá, antic membre de La Pulquería, canta i toca el baix i el contrabaix en aquesta formació que completen el seu germà Joseman i Soni Artal a les guitarres i Pau García-Serra a la bateria. A l’hora de descriure el seu estil fan servir adjectius com cru, analògic i senzill i empren l’encuny de rock reposat. Després de l’EP Buenos y malos (2014), el grup va editar el llarga durada Ventura (Actúa Records, 2017) que beu dels ritmes dels 50, 60 i 70 i on fan gala de lletres que parlen de vivències, viatges i sentiments. Ara presenten Rioflorido (Actúa Music / Gran Sol), on han mantingut l’essència del seu estil: cançons accessibles, aparentment senzilles, però carregades de lirisme.
    </p>
    <p>
      Nominat a millor videoclip per “Ventura” en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/santero-y-los-muchachos.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'zpsSYkrfAds')
  }
}
</script>
