<template>
  <div class="schedule">
    <h2 class="schedule-header">Programació</h2>
    <concert venue="Palau La Marquesa" place="Gandia" date="19 d'octubre">
      Novembre Elèctric <br />
      Pavvla <br />
      Fru Katinka
    </concert>
    <concert venue="Palau Altea" place="Altea" date="31 d'octubre">
      Dani Miquel
    </concert>
    <concert venue="Teatre Principal" place="Castelló" date="8 de novembre">
      Feliu Ventura
    </concert>
    <concert venue="Auditori de Castelló" place="Castelló" date="8 de novembre">
      Junior Mackenzie
    </concert>
    <concert venue="per concretar" place="L'Alcúdia" date="29 de novembre">
      Carles Pastor <br />
      Júlia i Clara Andrés
    </concert>
    <concert venue="Casal Jove" place="Port de Sagunt" date="21 de desembre">
      Frida <br />
      Prozak <br />
      Jazzwoman
    </concert>
    <concert venue="Rockodrom" place="Pedreguer" date="25 de gener">
      Santero y los Muchachos <br />
      Junior Mackenzie
    </concert>
    <concert venue="Arniches" place="Alacant" date="8 de febrer">
      Carles Dénia
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
    padding-top: 2rem;

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
