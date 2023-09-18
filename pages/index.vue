<template>
  <main class="home">
    <div class="venues">
      <HomeVenue
        v-for="venue in venues"
        :key="venue.key"
        :venue="venue"
      />
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      venues: [
        {
          key: 'guardamar',
          name: 'Guardamar del Segura',
          artists: [
            { name: 'Nacho Casado' },
            { name: 'Smoking Souls' },
            { name: 'Dani Miquel' }
          ]
        },
        {
          key: 'geldo',
          name: 'Geldo',
          artists: [
            { name: 'Noèlia Llorens ‘Titana’' },
            { name: 'Sedajazz' }
          ]
        },
        {
          key: 'castello',
          name: 'Castelló de la Plana',
          artists: [
            { name: 'Screaming Pillows' },
            { name: 'Marala' },
            { name: 'Ciudad Jara' },
            { name: 'Identidade' },
            { name: 'Clara Andrés' },
            { name: 'Ales Cesarini' }
          ]
        },
        {
          key: 'alacant',
          name: 'Alacant',
          artists: [
            { name: 'Xavi Sarrià' },
            { name: 'Funkiwis' },
            { name: 'Jazzwoman' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.venues {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: calc(100vh - var(--navbar-safe-area));
  height: calc(100svh - var(--navbar-safe-area));
}
</style>
