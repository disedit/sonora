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
        <div class="sonora-nav-footer d-lg-none">
          <nuxt-link to="/">
            <logo class="sonora-logo" />
          </nuxt-link>
          <app-social />
        </div>
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
    },

    shown (shown) {
      if (shown) {
        document.documentElement.classList.add('nav-shown')
      } else {
        document.documentElement.classList.remove('nav-shown')
      }
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
    padding: 1.25rem;
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
        height: 3rem;
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
        padding: 0;

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
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      z-index: 1000;
      top: 0;
      right: 0;
      bottom: 0;
      background: $black;
      color: $white;
      will-change: transform;
      overflow-y: auto;

      &-items {
        list-style: none;
        padding: 6rem 10rem 6rem 4rem;
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

    &-footer {
      margin-top: 4rem;

      svg {
        width: 40%;
        max-width: 150px;
        height: auto;
        margin-bottom: 1rem;
      }

      .social-links {
        justify-content: center;
      }

      a {
        color: $white;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .sonora-nav {
      &-menu {
        left: 0;
        bottom: 0;
        padding: 6rem 1rem 3rem 1rem;
        text-align: center;
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
