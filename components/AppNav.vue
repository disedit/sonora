<template>
  <nav :class="['sonora-nav', { shown }]" aria-label="Navegació">
    <nuxt-link to="/" class="sonora-nav-logo" aria-label="Sonora">
      <logo />
    </nuxt-link>

    <div class="sonora-nav-button">
      <button @click="shown = !shown" :aria-expanded="shown ? 'true' : 'false'" aria-controls="navMenu">
        <menu-icon />
        <span v-if="!shown" class="sr-only">Obri menú</span>
        <span v-else class="sr-only">Tanca menú</span>
      </button>
    </div>

    <transition name="menu">
      <div id="navMenu" v-if="shown" class="sonora-nav-menu">
        <ul class="sonora-nav-menu-items">
          <li>
            <nuxt-link to="/artistes">
              Artistes
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/programa">
              Programa
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/el-circuit">
              El Circuit
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contacte">
              Contacte
            </nuxt-link>
          </li>
          <li>
            <a href="https://ivc.gva.es" class="ivc" target="_blank" rel="noopener noreferer">
              <ivc-logo />
              <span class="sr-only">Institut Valencià de Cultura</span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
    <div v-if="shown" @click="shown = false" class="backdrop" />
  </nav>
</template>

<script>
import MenuIcon from '@/assets/images/icons/menu.svg?inline'
import IvcLogo from '@/assets/images/logos/ivc.svg?inline'

export default {
  name: 'AppNav',

  components: {
    MenuIcon,
    IvcLogo
  },

  data () {
    return {
      shown: false
    }
  },

  watch: {
    '$route' () {
      this.shown = false
    }
  }
}
</script>

<style lang="scss">
  .sonora-nav {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $navbar-safe-area;
    padding: 1rem;
    z-index: 1000;

    &-logo {
      color: $black;

      &:hover {
        color: $white;

        @at-root .page-artistes-artist & {
          color: $black;
        }
      }

      svg {
        height: 3.5rem;
        width: auto;
      }
    }

    &-button {
      position: relative;
      z-index: 1500;
      margin-left: auto;

      button {
        appearance: none;
        background: transparent;
        border: 0;
        color: $pink;
        transition: color .25s ease, transform .5s ease-in;
        animation: rotation 8s infinite linear;

        &:hover {
          color: $white;
          animation-play-state: paused;
        }

        &:focus {
          outline: 0;
        }

        &:focus-visible {
          outline: 5px solid $yellow;
        }

        &[aria-expanded='true'] {
          color: $white;
          animation-play-state: paused;
        }
      }

      svg {
        height: 3rem;
        width: 3rem;
      }

      /* Exceptions for menu handle */
      @at-root .page-programa-venue & button {
        color: $black;

        &:hover,
        &[aria-expanded='true'] {
          color: $white;
        }
      }

      @at-root .page-artistes-artist & button {
        color: $pink;

        &:hover {
          color: $blue;
        }

        &[aria-expanded='true'] {
          color: $white;
        }
      }
    }

    &-menu {
      position: fixed;
      z-index: 1000;
      top: 0;
      right: 0;
      background: $black;
      color: $white;
      padding: 6rem 10rem 10rem 4rem;
      will-change: transform;

      &-items {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin: 0;
          padding: 0;
          line-height: 1.25;
        }

        a {
          display: block;
          font-weight: bold;
          font-size: 3rem;
          color: $white;
          text-transform: uppercase;
          transition: .25s ease;
          letter-spacing: 0.03em;

          &:hover {
            color: $pink;
          }
        }
      }
    }
  }

  .backdrop {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .menu-enter-active, .menu-leave-active {
    transition: .5s ease;
  }

  .menu-enter, .menu-leave-to {
    transform: translateX(100%);
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
