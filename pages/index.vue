<template>
  <main class="home">
    <div class="main-container">
      <div class="sticker">
        <client-only>
          <moveable v-bind="moveable" @drag="handleDrag" @drag-start="handleDragStart" @drag-end="handleDragEnd" class="sticker sticker-smiley">
            <img src="~assets/images/stickers/dates.png" alt="">
          </moveable>
        </client-only>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    Moveable: () => {
      if (process.client) {
        return import('vue-moveable')
      }
    }
  },

  data () {
    return {
      moveable: {
        draggable: true,
        resizable: false,
        keepRatio: true,
        scalable: false,
        rotatable: false,
        pinchable: false,
        origin: false
      }
    }
  },

  methods: {
    handleDrag ({ target, transform }) {
      target.style.transform = transform
    },

    handleDragStart ({ target }) {
      target.classList.add('dragging')
    },

    handleDragEnd ({ target }) {
      target.classList.remove('dragging')
    }
  }
}
</script>

<style lang="scss" scoped>
 
</style>
