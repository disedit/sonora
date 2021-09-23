<template>
  <main class="about-wrapper">
    <div class="main-container">
      <div class="about">
        <h1 class="about-title text-center">
          Benvingudes i benvinguts a Sonora!
        </h1>
        <div class="about-text-lg">
          <p>
            L’<a href="https://ivc.gva.es" target="_blank">Institut Valencià de Cultura</a>  presenta la segona edició de Sonora, el circuit de concerts que porta als grups guanyadors i finalistes dels Premis Carles Santos de la Música Valenciana per tot el nostre territori.
          </p>
        </div>

        <div class="about-text">
          <p>
            La segona edició de Sonora es desenvoluparà entre octubre de 2020 i març de 2021 al llarg i ample del país, per tal de crear una plataforma estable i regular perquè els intèrprets valencians puguen mostrar els seus treballs en 28 de les localitats que formen part del Circuit Cultural Valencià, dins de les programacions culturals que aquestes ofereixen. Al mateix temps, es pretén desestacionalitzar l'oferta musical i que, d’aquesta manera, grups i solistes tinguen la possibilitat d’actuar en diferents punts del territori fora de la temporada estival.
          </p>
          <img class="about-image" src="~assets/images/photos/el-circuit-1.jpg" alt="Guitarrista saluda al públic a un concert">
        </div>

        <div class="about-text inverted">
          <p>
            Sonora suposa un pas endavant en el propòsit de portar la cultura i, en aquest cas, la música valenciana a moltes poblacions valencianes, amb una programació variada i de qualitat que atrega a nous públics i consolide la projecció dels nostres artistes.
          </p>
          <img class="about-image" src="~assets/images/photos/el-circuit-2.jpg" alt="Foto de Xavi Sarrià">
        </div>

        <div class="about-text-lg about-text-end">
          <p>
            Sou tots i totes benvinguts a Sonora, el circuit de la música valenciana, feu-lo vostre!
          </p>
        </div>
      </div>
    </div>
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
      color: $secondary;
      text-decoration-color: rgba($secondary, .5);
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
