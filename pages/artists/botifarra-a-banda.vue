<template>
  <artist-page
    :social="{
      website: 'https://pepgimenobotifarra.wordpress.com/',
      facebook: 'https://www.facebook.com/PepBotifarraOficial/',
      twitter: 'https://twitter.com/pepbotifarra',
      instagram: 'https://www.instagram.com/botifarra_oficial/',
      spotify: 'https://open.spotify.com/artist/67nzmyyXxcTT4ZU8lBxcvp?si=WKRVfngaRmGA1jW8N7F5hA'
    }"
  >
    <template v-slot:header>
      Botifarra a Banda
    </template>

    <p>
      <strong>Pep Gimeno ‘Botifarra’</strong> és un dels artífexs de la recuperació i renovació de la música d’arrel
      valenciana. Decidit a recuperar les cançons de transmissió oral, el xativí i la formació Sarau van
      començar una feina d’investigació per les localitats de la comarca de La Costera a la dècada
      dels setanta. Anys més tard, en el 2006, va debutar en solitari amb el disc Si em pose a cantar
      cançons (Cambra Records), al qual seguirien altres treballs com Te’n cantaré més de mil
      (Temps Record, 2009), A un home que ve del poble, ningú fa baixar la cara amb Pau Chafer
      (2015) i De banda a banda del Mediterrani amb Ahmed Touzani (Temps Record, 2018). En
      aquesta ocasió, el cantaor uneix la rondalla de corda (guitarra, guitarró, llaüt i bandúrria) i la
      típica banda valenciana d’instruments de vent en l’espectacle Botifarra a Banda. Estrenat a La
      Nucia l’any 2012, ja són més de 150 les bandes valencianes (i unes quantes catalanes) que han
      compartit escenari amb Pep Gimeno ‘Botifarra’ i la seua rondalla.
    </p>
    <p>
      Guardonat amb Ahmed Touzani com a Millor disc de música d’arrel per De banda a banda del
      Mediterrani en els I Premis Carles Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/botifarra-a-banda.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'KwwJWdmQBwQ')
  }
}
</script>
