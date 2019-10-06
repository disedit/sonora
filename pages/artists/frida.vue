<template>
  <artist-page
    :social="{
      facebook: 'https://www.facebook.com/Fridagrup/',
      twitter: 'https://twitter.com/FridaGrup',
      instagram: 'https://www.instagram.com/fridagrup/',
      spotify: 'https://open.spotify.com/artist/5WrFF7JJ5hPqQXX4O599RF?si=KbM4Y3hWR9OiVaSUO5OnmQ'
    }"
  >
    <template v-slot:header>
      Frida
    </template>
    <p>
      <strong>Frida</strong> és un grup de València que va nàixer en 2013 com una formació clàssica de rap: dos MC’s
      (Tom i J. Winston) i un Dj. Després d’editar dues maquetes -Free Rap (2013) i Neologismes
      (2014)- en estiu del 2016 van presentar el videoclip de la cançó “La recepta”, on el projecte
      passava a prendre forma de rap amb banda amb la incorporació de guitarra, baix, bateria i
      teclats. D’aquesta manera, també van abraçar nous ritmes com el reggae, el soul o el funk.
      Guanyadors del certamen Sona la Dipu 2017, en gener de l’any següent van publicar el seu
      àlbum de debut, Gegants. La seua última creació és el tema “Crema-ho tot”, cançó oficial de
      les Falles Populars i Combatives 2019.
    </p>

    <p>
      Nominat com a millor disc de fusió, mestissatge i urbana per Gegants en els I Premis Carles
      Santos de la Música Valenciana.
    </p>
  </artist-page>
</template>

<script>
import ArtistPage from '@/components/ArtistPage'
import image from '@/assets/images/artists/frida.jpg'

export default {
  scrollToTop: true,

  components: {
    ArtistPage
  },

  mounted () {
    this.$emit('image', image)
    this.$emit('video', 'uHAGrXUuW5c')
  }
}
</script>
