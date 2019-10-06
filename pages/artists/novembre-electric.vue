<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/Novelectric/',
      twitter: 'https://twitter.com/NElctric',
      instagram: 'https://www.instagram.com/novembre_electric/',
      spotify: 'https://open.spotify.com/artist/0hwP1zFS6XO7kSohkYwUjT?si=p3HEKnSMTEiVO-FwJLWcfw'
    }"
  >
    <template v-slot:header>
      Novembre Elèctric
    </template>
    <p>
      <strong>Novembre Elèctric</strong> és el vehicle d’expressió de l’algemesinenc Yeray Calvo amb la companyia de quatre amics residents a Madrid. Les seues melodies de pop delicat, la manera profunda de tractar les cançons i les textures van sorprendre a tothom a principis del 2014 quan va veure la llum Intacte (Mésdemil). El projecte va donar un pas més amb Tremole (Mésdemil, 2016) gràcies als textos del poeta Hèctor Serra. Finalment, l’àlbum Quart minvant (Primavera d’hivern) va veure la llum en abril de 2018 amb els temes més elèctrics i vitals de la seua carrera. Novembre Elèctric no ha parat de fer actuacions des dels seus inicis i, fins i tot, ha arribat a obrir per a Izal als Concerts de Vivers de València davant més de 5.000 persones i ha compartit escenari amb Luna, la mítica banda de Nova York, a la Marina de València.
    </p>
    <p>
      Guardonats com a milor disc de pop i millor disseny per Quart Minvant en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/novembre-electric.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'k1DzWKOVKic')
  }
}
</script>
