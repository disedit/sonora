<template>
  <div :class="['concert', { hovering, dimmed }]">
    <div class="concert-date">
      {{ concert.date | filterDayMonth }}
    </div>
    <h3 class="concert-artists">
      <span
        v-for="artist in concert.artists"
        :key="artist"
        @mouseover="hovering = true"
        @mouseleave="hovering = false"
      >
        <nuxt-link v-if="!dimmed" :to="`/artistes/${artist}`" class="artist-name">
          {{ artists[artist].name }}
        </nuxt-link>
        <span v-else class="artist-name">
          {{ artists[artist].name }}
        </span>
      </span>
    </h3>
    <div class="concert-details">
      {{ concert.date | filterTime }}<br>
      {{ concert.venue }}<br>
      <span class="concert-place">{{ concert.municipality }}</span>
    </div>
    <div class="concert-book">
      <component
        :is="dimmed ? 'span' : 'a'"
        :href="!dimmed ? 'https://forms.gle/mnhVQJAYz9G9pWn78' : false"
        :class="['btn', { 'disabled': dimmed }]"
        :aria-hidden="dimmed"
        target="_blank"
        rel="noopener noreferer"
      >
        Reservar invitació
      </component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Concert',

  filters: {
    filterTime (datetime) {
      return new Date(datetime).toTimeString().substr(0, 5)
    },

    filterDayMonth (datetime) {
      const date = new Date(datetime)
      const months = [
        'de gener', 'de febrer', 'de març', 'd\'abril', 'de maig',
        'de juny', 'de juliol', 'd\'agost', 'de setembre', 'd\'octubre',
        'de novembre', 'de desembre'
      ]
      const month = date.getMonth()
      const day = date.getDate()

      return day + ' ' + months[month]
    }
  },

  props: {
    concert: {
      type: Object,
      required: true
    },

    artists: {
      type: Object,
      required: true
    },

    dimmed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
