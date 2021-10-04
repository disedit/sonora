<template>
  <main class="about safe-area">
    <div class="main-container smh">
      <h1 class="about-title mb-4">
        El circuit
      </h1>
      <div class="row">
        <div class="col-md-7">
          <div class="about-text-lg">
            <p>
              Sonora: la música et fa viatjar, véns?
            </p>
            <p>
              Cultura de la Generalitat, mitjançant l'<a href="https://ivc.gva.es" target="_blank">Institut Valencià de Cultura</a>, presenta la tercera edició de Sonora, el circuit de concerts que porta als grups guanyadors i finalistes dels Premis Carles Santos de la Música Valenciana per tot el nostre territori.
            </p>
          </div>

          <div class="about-text">
            <p>
              La tercera edició de Sonora es desenvoluparà entre octubre de 2021 i març de 2022 de nord a sud del país, per tal de crear una plataforma estable i regular perquè els intèrprets valencians puguen mostrar els seus treballs en 5 localitats: Peníscola, Castelló, Alacant i les capitals culturals valencianes 2021, Alcoi i Bocairent. Al mateix temps, es pretén desestacionalitzar l'oferta musical i que, d'aquesta manera, grups i solistes més guardonats tinguen la possibilitat d'actuar en diferents punts del territori fora de la temporada estival.
            </p>
          </div>
        </div>
        <div class="col-md-5">
          <img class="about-image" src="~assets/images/photos/el-circuit-1.jpg" alt="Guitarrista saluda al públic a un concert">
          <img class="about-image mb-0" src="~assets/images/photos/el-circuit-2.jpg" alt="Foto de Xavi Sarrià">
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
  .about {
    background-image: url(~assets/images/gradients/gradient-circuit.jpg);
    background-color: #fdcd69;
    background-size: 100% 100%;

    &-text-lg {
      font-size: $text-lg;
      line-height: 1.35;
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

    a {
      color: $black;
      text-decoration: underline;

      &:hover {
        color: $blue;
      }
    }
  }

  .smh {
    padding-bottom: calc(1rem + 3vw);
  }
</style>
