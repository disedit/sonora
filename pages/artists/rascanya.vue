<template>
  <artist-page
    :social="{
      website: 'http://www.rascanya.cat',
      facebook: 'https://www.facebook.com/rascanya/',
      twitter: 'https://twitter.com/JonatanPenalba',
      instagram: 'https://www.instagram.com/rascanya_cat/',
      spotify: 'https://open.spotify.com/artist/63bsq7UKtzHlI9K7DKnm7k?si=Z99vNMA5TNWlRNknsS5WCw'
    }">
    <template v-slot:header>Rascanya</template>
    <p>
      Grup de música i ball folk de les comarques de l’Horta Nord, l’Horta Oest i el Camp de Túria. Amb més de 10 anys de trajectòria, han tingut l’oportunitat d’actuar en festivals valencians, estatals i internacionals. També estan presents en actes on les seues cançons i danses donen un punt de diversió, color i germanor: festes populars, trobades culturals, concerts didàctics, tallers de ball, fires i mercats, etc. Els seus membres s’esforcen en aprendre, recuperar, reelaborar i compondre músiques tradicionals associades a algun ball. Així, pretenen que el públic s’anime a seguir els seus passos al ritme de guitarres, guitarrons, llaüts, acordions i dolçaines, entre d’altres instruments.
    </p>
    <p>
      Nominats com a millor disc de música d’arrel per <em>Aiua</em> en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/rascanya.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'GuBy0_4gNO8')
  }
}
</script>
