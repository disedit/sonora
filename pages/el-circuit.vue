<template>
  <main class="about">
    <div class="about-content">
      <h1 class="mb-3 mb-md-4">
        SONORA 2022-2023
        <div class="mt-3 mt-md-0">
          EL CIRCUIT DE LA MÚSICA VALENCIANA
        </div>
      </h1>

      <p>
        En temps de virtualitat, de plataformes digitals i d'intangibles,
        Sonora reivindica la nostàlgia dels suport musical vintage per
        excel·lència: els cassets. Allunyades de l'elitisme, la qualitat i
        el gran format del vinil, les cintes de casset eren un objecte humil,
        popular, a l'abast de tothom i presents a totes les cases.
        I sobretot, a tots els cotxes. Els cassets ens van acompanyar durant
        molts anys en els viatges i van marcar les bandes sonores de moltes
        infanteses. Ens van fer viatjar amb ferro i crom pels acords,
        les tornades i les lletres. Enguany, el circuit Sonora els recupera
        com a paisatge d'aquest viatge: el que ens regala la nostra música.
      </p>
      <p>
        De l'octubre de 2022 al març de 2023, la música ens farà viatjar des
        d'Oriola a Peníscola, passant per Alacant, Alzira, Aielo de Malferit
        i Castelló, amb 21 concerts de 20 grups musicals.
      </p>
      <p>
        El circuit Sonora, organitzat per Cultura de la Generalitat mitjançant
        l'Institut Valencià de Cultura, porta per tot el territori valencià
        als grups i solistes que van resultar finalistes o guanyadors de
        l'anterior edició dels Premis Carles Santos de la Música Valenciana,
        amb la voluntat de desestacionalitzar l'oferta musical i donar difusió
        a les propostes que han estat reconegudes als premis.
      </p>
      <img src="../assets/images/photos/circuit.jpg" alt="" class="d-md-none">
    </div>
    <div class="about-image d-none d-md-block" />
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'El Circuit - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: $black;
  gap: 2px;

  &-content {
    background: $body-bg;
    padding: $viewport-x-padding;

    img {
      width: 100%;
    }
  }

  &-image {
    background-image: url(../assets/images/photos/circuit.jpg);
    background-size: cover;
    background-position: center;
  }
}

@include media-breakpoint-down(md) {
  .about {
    grid-template-columns: 1fr;
  }
}
</style>
