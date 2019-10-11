<template>
  <div class="main-container">
    <div class="about">
      <h2 class="about-title">Un nou circuit musical valencià</h2>
      <div class="about-text about-text-1">
        <p>
        <a href="https://ivc.gva.es/">L’Institut Valencià de Cultura</a> presenta Sonora, el nou circuit de la música valenciana, que portarà a la tardor als grups guanyadors i finalistes dels
          Premis Carles Santos de la Música Valenciana per tot el territori valencià.
        </p>
        
        <p>
          L’objectiu principal d’aquesta nova iniciativa és la creació d’una plataforma estable i regular perquè els intèrprets valencians puguen mostrar els seus treballs en sales
          públiques i privades. D’aquesta manera, grups i solistes tindran la possibilitat d’actuar en diferents punts del territori fora de la temporada estival.
          El cartell de Sonora ha sigut realitzat per la coneguda il·lustradora valenciana Carla Fuentes.
        </p>
      </div>
      
      <img class="about-poster" src="../assets/images/cartell-vilafranca.jpg" alt="Cartell del festival per Carla Fuentes">

      <div class="about-text about-text-2">
        <p>
          El concert de presentació del circuit Sonora va tindre lloc el passat divendres 10 de maig a Vilafranca coincidint amb la Capitalitat Cultural Valenciana que aquesta
          població comparteix enguany amb Altea. El concert va estar protagonitzat per <router-link to="/artists/els-jovens">Els Jóvens</router-link>, grans guanyadors de l’edició 2018 dels premis Carles Santos amb tres guardons:
          Millor Disc, Grup Revelació i Millor Cançó. A partir d’ací, el cicle Sonora es desenvoluparà entre novembre de 2019 i febrer de 2020 al llarg i ample del territori valencià,
          amb la intenció de cobrir zones on la programació d’espectacles és menor. Al mateix temps, es pretén desestacionalitzar l'oferta musical.
        </p>

        <p>
          Sonora suposa un pas endavant en el propòsit de portar la cultura i, en aquest cas, la música valenciana a moltes poblacions valencianes, amb una programació variada i
          de qualitat que atrega a nous públics i consolide la projecció dels nostres artistes.
        </p>

        <p>Benvingudes i benvinguts a Sonora.</p>
      </div>

      <img class="about-image" src="../assets/images/jovens-concert.jpeg" alt="Els Joves a Vilafranca">

    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Què és - Sonora'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .about {
    display: grid;
    grid-template-columns: 30vw 1fr;
    grid-template-areas:
      ". title"
      "poster text-1"
      "image text-2";
    grid-column-gap: 2.2rem;

    h2 {
      line-height: 1;
      margin-bottom: 2rem;
    }

    &-text {
      p {
        font-size: 1.8rem;
      }

      &-1 {
        grid-area: text-1;
      }

      &-2 {
        grid-area: text-2;
      }
    }

    &-title {
      grid-area: title;
    }
    
    &-image {
      grid-area: image;
      align-self: center;
      filter: grayscale(100%);
      width: 100%;
    }
  
    &-poster {
      grid-area: poster;
      justify-self: end;
      width: 100%;
      max-width: 300px;
    }
  }

  @include media-breakpoint-down(md) {
    .about {
      grid-template-columns: 1fr;
      grid-template-areas:
        "title"
        "text-1"
        "poster"
        "text-2"
        "image";

      &-poster {
        justify-self: center;
      }

      &-text {
        p {
          font-size: 1.4rem;
        }
      }

      img {
        max-width: 400px;
        width: 100%;
        margin: 1rem auto;
      }
    }
  }
</style>
