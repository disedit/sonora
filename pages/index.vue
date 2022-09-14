<template>
  <main class="home">
    <sonora-header class="header" />
    <div class="content">
      <ul class="menu">
        <li class="menu-artistes">
          <nuxt-link to="/artistes">
            <span>Artistes</span>
          </nuxt-link>
        </li>
        <li class="menu-programa">
          <nuxt-link to="/programa">
            <span>Programa</span>
          </nuxt-link>
        </li>
        <li class="menu-circuit">
          <nuxt-link to="/el-circuit">
            <span>El circuit</span>
          </nuxt-link>
        </li>
        <li class="menu-contacte">
          <nuxt-link to="/contacte">
            <span>Contacte</span>
          </nuxt-link>
        </li>
      </ul>
      <client-only>
        <moveable
          v-bind="moveable"
          @drag="handleDrag"
          @drag-start="handleDragStart"
          @drag-end="handleDragEnd"
          :style="stickerPos"
          class="sticker"
        >
          <img src="~assets/images/stickers/dates.png" alt="Del 22 d'ocubre de 2022 al 23 de març de 2023">
        </moveable>
      </client-only>
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
      },
      stickerPos: null
    }
  },

  created () {
    this.setStickerPos()
  },

  methods: {
    setStickerPos () {
      const top = '-10%'
      const right = '30%'
      this.stickerPos = { top, right }
    },

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
.home {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - #{$footer-height});
  gap: 3rem;
  overflow: hidden;
}

.content {
  position: relative;
  margin-top: auto;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    display: block;
    border-top: 2px $black solid;
    padding: .25rem $viewport-x-padding;
    font-size: clamp(2.5rem, 4vw, 5rem);
    text-decoration: none;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.6;

    span {
      display: block;
      margin-bottom: -0.2em;
    }
  }

  &-artistes {
    background: $pink;
  }

  &-programa {
    background: $blue;
    text-align: right;
  }

  &-circuit {
    background: $brown;
  }

  &-contacte {
    background: $yellow;
  }
}

.sticker {
  position: absolute;
  width: 12vw;
  min-width: 140px;
  z-index: 500;
  cursor: grab;
  transform: rotate(-13deg);

  img {
    width: 100%;
    transition: .5s ease;
  }

  &.dragging img {
    transform: scale(1.1) rotate(4deg);
  }
}
</style>

<style lang="scss">
.moveable-control-box {
  --moveable-color: transparent;
}
</style>
