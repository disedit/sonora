<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/Dani-Miquel-168273646524508/',
      twitter: 'https://twitter.com/CarlesDenia',
      website: 'http://danimiquel.cat/',
      instagram: 'https://www.instagram.com/danimiquel/',
      spotify: 'https://open.spotify.com/artist/3RvCCC63losASebpl75PvC?si=joMtGIKvS0ytIQzWerDUPg'
    }">
    <template v-slot:header>Dani Miquel</template>

    <p>
      <strong>Dani Miquel</strong> és el protagonista d’un dels grans fenòmens de la música valenciana. Els seus
      reculls de cançons i composicions pròpies han sonat a totes les comarques del nostre territori i
      s’han convertit en la banda sonora de milers de xiquetes i xiquets. Tanmateix, els seus
      espectacles de vocació familiar també impliquen mares i pares. D’aquesta manera, el músic de
      l’Alcúdia ha connectat de manera natural amb les noves sensibilitats d’oci. L’últim treball de
      Dani Miquel porta per títol De por i és una recopilació de cançons de por, velles i novelles.
      Gràcies a elles, el públic canta, conta i juga amb gegants, bruixes, dimonis i altres personatges
      més reals.
    </p>
    <p>
      Guardonat com a millor disc per a xiquets i xiquetes per De por en els I Premis Carles Santos de
      la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/dani-miquel.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'yIp-Ifsamp4')
  }
}
</script>
