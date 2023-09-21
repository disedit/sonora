<template>
  <main class="about">
    <p class="section-title">
      El circuit
    </p>
    <div class="about-wrapper">
      <h1 class="about-title">
        <div class="sup">
          Sonora
          <br class="d-lg-none">
          2023-2024
        </div>
        <div class="reckless">
          El circuit de la música valenciana
        </div>
      </h1>

      <div class="about-content">
        <div class="about-illustrations d-none d-lg-block">
          <img src="../assets/images/illustrations/guardamar.png" alt="" class="about-illustrations-1">
          <img src="../assets/images/illustrations/alacant.png" alt="" class="about-illustrations-2">
        </div>
        <div class="about-text">
          <p>
            En temps de virtualitat, de plataformes digitals i d'intangibles, Sonora reivindica la nostàlgia dels suport musical vintage per excel·lència: els cassets. Allunyades de l'elitisme, la qualitat i el gran format del vinil, les cintes de casset eren un objecte humil, popular, a l'abast de tothom i presents a totes les cases. I sobretot, a tots els cotxes. Els cassets ens van acompanyar durant molts anys en els viatges i van marcar les bandes sonores de moltes infanteses. Ens van fer viatjar amb ferro i crom pels acords, les tornades i les lletres. Enguany, el circuit Sonora els recupera com a paisatge d'aquest viatge: el que ens regala la nostra música.
          </p>
          <p>
            De l'octubre de 2022 al març de 2023, la música ens farà viatjar des d'Oriola a Peníscola, passant per Alacant, Alzira, Aielo de Malferit i Castelló, amb 21 concerts de 20 grups musicals.
          </p>
          <p>
            El circuit Sonora, organitzat per Cultura de la Generalitat mitjançant l'Institut Valencià de Cultura, porta per tot el territori valencià als grups i solistes que van resultar finalistes o guanyadors de l'anterior edició dels Premis Carles Santos de la Música Valenciana, amb la voluntat de desestacionalitzar l'oferta musical i donar difusió a les propostes que han estat reconegudes als premis.
          </p>
        </div>
      </div>
    </div>
    <div class="about-illustration d-lg-none">
      <img src="../assets/images/illustrations/home.png" alt="" class="about-illustration-0">
    </div>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'El Circuit - Sonora',
      meta: [
        { property: 'og:image', content: `https://circuitsonora.com/thumbnail.jpg` },
        { name: 'theme-color', content: '#D0D2D6' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  margin-top: $navbar-safe-area + 5rem;
  overflow: hidden;

  &-wrapper {
    max-width: 1300px;
    margin: 0 auto;
    padding: $viewport-x-padding;
  }

  &-title {
    font-size: clamp(7rem, 10vw, 10rem);
    line-height: .85;
    letter-spacing: -0.03em;

    .sup {
      margin-bottom: 1rem;
    }

    .reckless {
      font-size: .88em;
      font-weight: 300;
      letter-spacing: -0.03em;
    }
  }

  &-text {
    font-size: $text-lg;
    line-height: 1.2;

    p {
      margin-bottom: 1em;
    }
  }

  &-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 3rem 0 10rem;
  }

  &-illustrations {
    position: relative;

    img {
      position: absolute;
    }

    &-1 {
      width: 155%;
      right: 0;
      top: -10%;
    }

    &-2 {
      width: 195%;
      top: 70%;
      right: 0;
    }
  }
}

@media (max-width: 1100px) {
  .about {
    &-content {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@include media-breakpoint-up(lg) {
  .section-title {
    position: absolute;
    overflow: hidden;
    height: 0;
  }
}

@include media-breakpoint-down(lg) {
  .about {
    margin-top: $mobile-nav;

    &-wrapper {
      padding: 0 $mobile-padding;
    }

    &-title {
      font-size: 3.12rem;
    }

    &-content {
      grid-template-columns: 1fr;
      margin-top: 1.5rem;
      margin-bottom: -8rem;
    }

    &-text {
      font-size: 1.25rem;
    }

    &-illustration {
      img {
        width: 100%;
      }
    }
  }
}
</style>
