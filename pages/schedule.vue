<template>
  <div class="schedule">
    <h2 class="schedule-header">Programació</h2>
    <concert venue="Palau La Marquesa" place="Gandia" date="19 d'octubre">
      <span>Novembre Elèctric</span>
      <span>Pavvla</span>
      <span>Fru Katinka</span>
    </concert>
    <concert venue="Palau Altea" place="Altea" date="31 d'octubre">
      <span>Dani Miquel</span>
    </concert>
    <concert venue="Teatre Principal" place="Castelló" date="8 de novembre">
      <span>Feliu Ventura</span>
    </concert>
    <concert venue="Auditori de Castelló" place="Castelló" date="8 de novembre">
      <span>Junior Mackenzie</span>
    </concert>
    <concert venue="per concretar" place="L'Alcúdia" date="29 de novembre">
      <span>Carles Pastor</span>
      <span>Júlia i Clara Andrés</span>
    </concert>
    <concert venue="Casal Jove" place="Port de Sagunt" date="21 de desembre">
      <span>Frida</span>
      <span>Prozak</span>
      <span>Jazzwoman</span>
    </concert>
    <concert venue="Rockodrom" place="Pedreguer" date="25 de gener">
      <span>Santero y Los Muchachos</span>
      <span>Junior Mackenzie</span>
    </concert>
    <concert venue="Arniches" place="Alacant" date="8 de febrer">
      <span>Carles Dénia</span>
    </concert>
  </div>
</template>

<script>
import Concert from '@/components/Concert'

  export default {
    components: {
      Concert,
    },
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
