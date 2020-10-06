<template>
  <main class="about-wrapper">
    <div class="main-container">
      <div class="about">
        <h1 class="about-title text-center">
          Un nou circuit musical valencià
        </h1>
        <div class="about-text-lg">
          <p>
            L’<a href="https://ivc.gva.es" target="_blank">Institut Valencià de Cultura</a> presenta Sonora, el nou circuit de la música valenciana, que portarà a la tardor als grups guanyadors i finalistes dels Premis Carles Santos de la Música Valenciana per tot el territori valencià.
          </p>
        </div>

        <div class="about-text">
          <p>
            L’objectiu principal d’aquesta nova iniciativa és la creació d’una plataforma estable i regular perquè els intèrprets valencians puguen mostrar els seus treballs en sales públiques i privades. D’aquesta manera, grups i solistes tindran la possibilitat d’actuar en diferents punts del territori fora de la temporada estival. El cartell de Sonora ha sigut realitzat per la coneguda il·lustradora valenciana Carla Fuentes.
          </p>
          <img class="about-image" src="~assets/images/photos/el-circuit-1.jpg" alt="Guitarrista saluda al públic a un concert">
        </div>

        <div class="about-text inverted">
          <p>
            El concert de presentació del circuit Sonora va tindre lloc el passat divendres 10 de maig a Vilafranca coincidint amb la Capitalitat Cultural Valenciana que aquesta
            població comparteix enguany amb Altea. El concert va estar protagonitzat per <a href="https://2019.circuitsonora.com/artists/els-jovens">Els Jóvens</a>, grans guanyadors de l’edició 2018 dels premis Carles Santos amb tres guardons:
            Millor Disc, Grup Revelació i Millor Cançó. A partir d’ací, el cicle Sonora es desenvoluparà entre novembre de 2019 i febrer de 2020 al llarg i ample del territori valencià,
            amb la intenció de cobrir zones on la programació d’espectacles és menor. Al mateix temps, es pretén desestacionalitzar l'oferta musical.
          </p>
          <img class="about-image" src="~assets/images/photos/el-circuit-2.jpg" alt="Foto de Xavi Sarrià">
        </div>

        <div class="about-text-lg about-text-end">
          <p>
            Sonora suposa un pas endavant en el propòsit de portar la cultura i, en aquest cas, la música valenciana a moltes poblacions valencianes, amb una programació variada i
            de qualitat que atrega a nous públics i consolide la projecció dels nostres artistes.
          </p>

          <p>Benvingudes i benvinguts a Sonora.</p>
        </div>
      </div>
    </div>
    <img class="about-shape" src="../assets/images/shapes/circuit.svg" alt="">
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
  @import '../sass/variables';

  .about {
    a:hover {
      color: $purple;
      text-decoration-color: rgba($purple, .5);
    }

    &-title {
      max-width: 600px;
      margin: 4rem auto 0 auto;
    }

    &-wrapper {
      position: relative;
    }

    &-text-lg {
      text-align: center;
      font-size: 1.5rem;
      margin: 4rem auto 6rem auto;
      max-width: 800px;
      line-height: 1.65;
    }

    &-text {
      display: grid;
      gap: 4rem;
      margin-top: 6rem;
      grid-template-columns: 1fr 1fr;
      line-height: 1.65;

      p {
        font-size: $text-base;

        &:last-child {
          margin-bottom: 0;
        }
      }

      img {
        width: 100%;
      }

      &-end {
        margin: 8rem auto;

        p:last-child {
          margin-top: 4rem;
        }
      }

      &.inverted {
        p {
          grid-area: 1 / 2;
        }
        .about-image {
          grid-area: 1 / 1;
        }
      }
    }

    &-shape {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 600px;
      width: auto;
      z-index: -10;
    }
  }

  @include media-breakpoint-down(lg) {
    .about {
      &-shape {
        left: -60px;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .about {
      h1 {
        margin: 1rem 0;
        font-size: $text-lg;
        text-align: center;
      }

      &-text {
        grid-template-columns: 1fr;
        gap: 0;
        margin: 0;

        p {
          font-size: 1rem;
        }

        .about-image {
          margin-bottom: 1rem;
        }

        &-lg {
          margin-bottom: 0;
          text-align: left;
          font-size: 1.25rem;
          max-width: unset;
        }

        &-end {
          margin-top: 0;

          p:last-child {
            margin-top: 0;
          }
        }

        &.inverted {
          p {
            grid-area: 1 / 1;
          }

          .about-image {
            grid-area: 2 / 1;
          }
        }
      }

      &-shape {
        display: none;
      }
    }
  }
</style>
