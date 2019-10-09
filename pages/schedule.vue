<template>
  <div class="schedule">
    <h2 class="schedule-header">
      Programació
    </h2>
    <concert venue="Palau La Marquesa" place="Gandia" date="19 d'octubre" thumbnail="junior-mackenzie" :class="[thumbnail =! null ? 'has-thumbnail' : '']">
      <nuxt-link to="/artists/novembre-electric">Novembre Elèctric</nuxt-link>
      <nuxt-link to="/artists/pavvla">Pavvla</nuxt-link>
      <nuxt-link to="/artists/fru-katinka">Fru Katinka</nuxt-link>
    </concert>
    <concert venue="Palau Altea" place="Altea" date="31 d'octubre">
      <nuxt-link to="/artists/dani-miquel">Dani Miquel</nuxt-link>
    </concert>
    <concert venue="Teatre Principal" place="Castelló" date="8 de novembre">
      <nuxt-link to="/artists/feliu-ventura">Feliu Ventura</nuxt-link>
    </concert>
    <concert venue="Auditori de Castelló" place="Castelló" date="8 de novembre">
      <nuxt-link to="/artists/junior-mackenzie">Junior Mackenzie</nuxt-link>
    </concert>
    <concert venue="per concretar" place="L'Alcúdia" date="29 de novembre">
      <nuxt-link to="/artists/carles-pastor">Carles Pastor</nuxt-link>
      <nuxt-link to="/artists/clara-andres-julia">Clara Andrés + Júlia</nuxt-link>
    </concert>
    <concert venue="Casal Jove" place="Port de Sagunt" date="21 de desembre">
      <nuxt-link to="/artists/frida">Frida</nuxt-link>
      <nuxt-link to="/artists/prozak">Prozak</nuxt-link>
      <nuxt-link to="/artists/jazzwoman">Jazzwoman</nuxt-link>
    </concert>
    <concert venue="Rockodrom" place="Pedreguer" date="25 de gener">
      <nuxt-link to="/artists/santero-y-los-muchachos">Santero y Los Muchachos</nuxt-link>
      <nuxt-link to="/artists/junior-mackenzie">Junior Mackenzie</nuxt-link>
    </concert>
    <concert venue="Arniches" place="Alacant" date="8 de febrer">
      <nuxt-link to="/artists/carles-denie">Carles Dénia</nuxt-link>
    </concert>
  </div>
</template>

<script>
import Concert from '@/components/Concert'

export default {
  components: {
    Concert
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .schedule {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    &-header {
      grid-column: 1 / -1;
    }

    &-image-container {
      padding-top: 3rem; 
    }

    &-image {
      width: 300px;
      background-image: url("../assets/images/artists/novembre-electric.jpg");
      background-size: cover;
      filter: grayscale(100%);
      mix-blend-mode: screen;
    }
  }

  .has-thumbnail {
    grid-column: span 2;
  }

  @include media-breakpoint-down(md) {
    .schedule {
      grid-template-columns: 1fr 1fr;
    }
  }

  @include media-breakpoint-down(xs) {
    .schedule {
      grid-template-columns: 1fr;
    }
  }
</style>
