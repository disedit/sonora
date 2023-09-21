<template>
  <article :class="['concert', `venue-${concert.venue}`, { dimmed: inThePast }]">
    <h3 class="concert-artists">
      <div v-for="({ sys: { id }, fields: artist }) in concert.artists" :key="id">
        <nuxt-link :to="`/artistes/${artist.slug}`" class="artist-name">
          <img v-if="artist.image" :src="artist.image.fields.file.url" alt="">
          {{ artist.name }}
        </nuxt-link>
      </div>
    </h3>

    <div class="concert-date mt-4">
      {{ concert.date | niceDate }}<br>
      {{ concert.date | niceTime }}
    </div>

    <div class="concert-venue">
      {{ concert.venue }}<br>
      {{ municipality }}
    </div>

    <div class="concert-book">
      <span v-if="dimmed" class="text">
        Concert realitzat
      </span>
      <a
        v-else-if="concert.tickets_url"
        :href="concert.tickets_url"
        class="sonora-button"
        target="_blank"
        rel="noopener noreferer"
      >
        <span>Entrada</span>
      </a>
      <span v-else class="text">
        {{ concert.text || 'Entrades properament' }}
      </span>
    </div>
  </article>
</template>

<script>
import { niceDate, niceTime } from '@/plugins/nicedate'

export default {
  name: 'Concert',

  filters: {
    niceDate (datetime) {
      return niceDate(datetime)
    },

    niceTime (datetime) {
      return niceTime(datetime)
    }
  },

  props: {
    concert: {
      type: Object,
      required: true
    }
  },

  computed: {
    inThePast () {
      const now = new Date()
      const concert = new Date(this.concert.date)

      return now > concert
    },

    municipality () {
      return this.$store.state.venues[this.concert.municipality]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
