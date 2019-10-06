<template>
  <artist-page :social="{}">
    <template v-slot:header>
      Clara Andrés + Júlia (L'eix radical)
    </template>

    <p>
      La cantautora olivera <strong>Clara Andrés</strong> i el duet alcoià de dream pop <strong>Júlia</strong> uneixen forces en el
      projecte musical L’eix radical. La idea va nàixer arran de la gravació del senzill “Punt vernal”
      per al cinquè volum del disc Hits With Tits, una iniciativa que pretén donar visibilitat a artistes
      femenines. La seua fusió parteix d’un curiós i precís fenomen matemàtic i, musicalment,
      suposa emmarcar dues propostes artístiques dins d’un intercanvi de melodies i harmonies
      paral·leles. D’aquesta manera, la música d’autora allunyada de les tecnologies es multiplica
      amb el dream pop més còsmic... i viceversa.
    </p>

    <h4 class="mt-4">
      Clara Andrés
    </h4>

    <ul class="social">
      <li>
        <a href="https://www.facebook.com/Clara-Andr%C3%A9s-243799349021610/" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'facebook-square']" /></a>
      </li>
      <li>
        <a href="https://twitter.com/clara_andres" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'twitter-square']" /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/clarandresegui/" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'instagram']" /></a>
      </li>
      <li>
        <a href="https://open.spotify.com/artist/1DwtRgUjzRqPg3rvrNwrM1?si=yQxpzKWgTeq4It-W49R-pg" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'spotify']" /></a>
      </li>
    </ul>

    <h4>Júlia</h4>

    <ul class="social">
      <li>
        <a href="https://www.facebook.com/JuliaGrup/" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'facebook-square']" /></a>
      </li>
      <li>
        <a href="https://twitter.com/Julia_Grup" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'twitter-square']" /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/juliagrup/" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'instagram']" /></a>
      </li>
      <li>
        <a href="https://open.spotify.com/artist/4oWkLfD8NExnAt1fBctUNF?si=Ww7MrCC4RFO98OUWLFTH2" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'spotify']" /></a>
      </li>
    </ul>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/clara-andres-julia.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'LuVx8utgEU0')
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  h4 {
    color: $background;
  }
</style>
