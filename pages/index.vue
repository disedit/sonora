<template>
  <main class="home">
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
  layout: 'home',
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
      const randomT = Math.floor(Math.random() * (40 + 1)) - 10
      const randomR = Math.floor(Math.random() * (80 + 1))
      const top = `${randomT}%`
      const right = `${randomR}%`

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
}

.content {
  position: relative;
  margin-top: auto;
  padding-top: 3rem;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    display: block;
    border-top: 2px $black solid;
    font-size: 4.5rem;
    font-weight: 300;
    padding: 0 $viewport-x-padding;
    text-decoration: none;
    text-transform: uppercase;

    span {
      position: relative;
      top: .125em;
    }

    &:hover {
      background: $black;
      color: $gray;
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
    background: $green;
  }

  &-contacte {
    background: $yellow;
  }
}

.sticker {
  position: absolute;
  width: 10vw;
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

@include media-breakpoint-down(lg) {
  .menu a {
    font-size: clamp(2rem, 6.5vw, 4.5rem);
  }
}

@include media-breakpoint-down(md) {
  .home {
    min-height: calc(100vh - 8.625rem - 3rem);
  }

  .menu {
    a {
      border-width: 1px;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  .sticker {
    top: -1rem !important;
    right: .5rem !important;
  }
}
</style>
