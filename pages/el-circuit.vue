<template>
  <main class="about">
    <div class="main-container">
      <h1 class="about-title">
        El circuit
      </h1>
      <div class="row">
        <div class="col-md-7">
          <div class="about-text-lg">
            <p>
              Benvinguts i benvingudes a Sonora!
            </p>
            <p>
              L’<a href="https://ivc.gva.es" target="_blank">Institut Valencià de Cultura</a>  presenta la segona edició de Sonora, el circuit de concerts que porta als grups guanyadors i finalistes dels Premis Carles Santos de la Música Valenciana per tot el nostre territori.
            </p>
          </div>

          <div class="about-text">
            <p>
              La segona edició de Sonora es desenvoluparà entre octubre de 2020 i març de 2021 al llarg i ample del país, per tal de crear una plataforma estable i regular perquè els intèrprets valencians puguen mostrar els seus treballs en 28 de les localitats que formen part del Circuit Cultural Valencià, dins de les programacions culturals que aquestes ofereixen. Al mateix temps, es pretén desestacionalitzar l'oferta musical i que, d’aquesta manera, grups i solistes tinguen la possibilitat d’actuar en diferents punts del territori fora de la temporada estival.
            </p>

            <p>
              Sonora suposa un pas endavant en el propòsit de portar la cultura i, en aquest cas, la música valenciana a moltes poblacions valencianes, amb una programació variada i de qualitat que atrega a nous públics i consolide la projecció dels nostres artistes.
            </p>
          </div>

          <div class="about-text-lg">
            <p>
              Sou tots i totes benvinguts a Sonora, el circuit de la música valenciana, feu-lo vostre!
            </p>
          </div>
        </div>
        <div class="col-md-5">
          <img class="about-image" src="~assets/images/photos/el-circuit-1.jpg" alt="Guitarrista saluda al públic a un concert">
          <img class="about-image" src="~assets/images/photos/el-circuit-2.jpg" alt="Foto de Xavi Sarrià">
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
    padding-top: $navbar-safe-area;
    background: url(~assets/images/gradients/gradient-circuit.jpg);
    background-size: cover;

    &-title {
      text-transform: uppercase;
      font-size: $text-headline;
    }

    &-text-lg {
      font-size: $text-lg;
    }

    &-text {
      font-size: $text-base;
    }

    &-image {
      width: 100%;
      margin-bottom: 2rem;
    }

    p {
      width: 90%;
    }
  }
</style>
