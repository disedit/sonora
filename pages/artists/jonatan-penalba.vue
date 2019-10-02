<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/JonatanPenalba2/',
      twitter: 'https://twitter.com/JonatanPenalba',
      instagram: 'https://www.instagram.com/jonatanpenalba/',
      spotify: 'https://open.spotify.com/artist/4zzG67sucjcErB0RI5FxFG?si=mMctmn_FT2m7Yr-UzbF03A'
    }">
    <template v-slot:header>Jonatan Penalba</template>
    <p>
      El cantant valencià <strong>Jonatan Penalba</strong> va nàixer a l’Alcúdia l’any 1991 i, malgrat la seua joventut, ja és un veterà en el món de la cançó tradicional. Des de l’aparició del seu primer disc, De soca-rel (Temps Record, 2018), ràpidament ha aconseguit ocupar un lloc destacat en el panorama folk valencià. De soca-rel és el disc, i l’espectacle, d’un jove del nostre temps enamorat de la tradició, i per això aborda aquesta tradició amb aires renovats i actuals. Això es nota en l’ús d’instruments tradicionals i moderns. I també en els temes escollits: una barreja de “clàssics contemporanis” (cançons com “Tio Canya”, “Al país de l’olivera”, o “La cançó de la rosa de paper”) i temes tradicionals (cant de batre, fandango, jota, riberenca…).
    </p>
    <p>
      Nominat com a millor disc de música d’arrel i millor disseny per De soca-rel en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/carles-denia.jpg'

export default {
  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'oKoodMBOeMw')
  }
}
</script>
