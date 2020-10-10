<template>
  <nav :class="['sonora-nav', { scrolled, shown }]" aria-label="Navegació">
    <div class="sonora-nav-logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>

    <div class="sonora-nav-button">
      <button @click="shown = !shown" :aria-expanded="shown ? 'true' : 'false'" aria-controls="navMenu">
        <span v-if="!shown" class="text">Menú</span>
        <span v-else class="icon"><CloseIcon /> <span class="sr-only">Cerrar menú</span></span>
      </button>
    </div>

    <div id="navMenu" class="sonora-nav-menu">
      <ul class="sonora-nav-menu-items">
        <li class="logo">
          <nuxt-link to="/">
            <Logo />
          </nuxt-link>
        </li>
        <li class="artistes">
          <nuxt-link to="/artistes">
            Artistes
          </nuxt-link>
        </li>
        <li class="programa">
          <nuxt-link to="/programa">
            Programa
          </nuxt-link>
        </li>
        <li class="el-circuit">
          <nuxt-link to="/el-circuit">
            El Circuit
          </nuxt-link>
        </li>
        <li class="contacte">
          <nuxt-link to="/contacte">
            Contacte
          </nuxt-link>
        </li>
      </ul>
      <div class="sonora-nav-social">
        <Logo class="sonora-nav-social-logo" />

        <app-social />
      </div>
    </div>
  </nav>
</template>

<script>
import CloseIcon from '@/assets/images/icons/close.svg?inline'
import Logo from './Logo'
import AppSocial from './AppSocial'

export default {
  name: 'AppNav',

  components: {
    Logo,
    CloseIcon,
    AppSocial
  },

  data () {
    return {
      scrolled: false,
      shown: false
    }
  },

  watch: {
    '$route' () {
      this.shown = false
    },

    shown (newVal) {
      const bodyTag = document.getElementsByTagName('body')[0]

      if (newVal) {
        bodyTag.classList.add('nav-shown')
      } else {
        bodyTag.classList.remove('nav-shown')
      }
    }
  },

  beforeMount () {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (event) {
      this.scrolled = (window.scrollY > 0)
    }
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .sonora-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: .2s ease;
    border-bottom: 1px $black solid;
    background: $white;
    z-index: 1000;

    @at-root .page-index & {
      border-color: transparent;
      background: transparent;
    }

    &-logo,
    &-button,
    &-social {
      display: none;
    }

    &-menu {
      &-items {
        display: flex;
        list-style: none;
        margin: 0;
        padding: .5rem 0;
        justify-content: space-around;
        align-items: center;
        text-align: center;

        li {
          flex-shrink: 0;
          flex-grow: 1;
          width: 20%;
        }

        a {
          font-family: $font-headings;
          font-variation-settings: $font-headings-light;
          font-size: 1rem;
          color: $black;
          padding: 1rem;
          text-decoration: none;

          &:hover {
            color: $secondary;

            .lt {
              fill: $secondary;
            }
          }

          &.nuxt-link-active {
            text-transform: uppercase;
          }
        }
      }

      .logo {
        order: 3;

        svg {
          height: 48px;
          width: 125px;
        }

        .lt {
          transition: .2s ease;
        }
      }

      .artistes {
        order: 1;
      }

      .programa {
        order: 2;
      }

      .el-circuit {
        order: 4;
      }

      .contacte {
        order: 5;
      }
    }

    &.scrolled {
      border-bottom: 1px $black solid;
      background: $white;
    }
  }

  @include media-breakpoint-down (sm) {
    .sonora-nav {
      display: flex;
      align-items: center;
      padding: .5rem;
      border-bottom: transparent;
      background: transparent;

      &.scrolled {
        border-bottom: 1px $black solid;
        background: $white;
      }

      &-logo {
        display: block;

        svg {
          height: 42px;
          width: 100px;
        }
      }

      &-button {
        position: relative;
        display: flex;
        margin-left: auto;
        align-items: center;
        z-index: 2000;

        button {
          appearance: none;
          background: transparent;
          border: 0;
          text-align: right;
          font-family: $font-family-sans-serif;

          .text {
            display: block;
            padding: .5rem 0;
          }

          .icon {
            display: block;
            font-size: 1.65rem;
            padding: 0;
          }
        }
      }

      &-menu {
        display: flex;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: $quaternary;
        z-index: 1500;
        padding-top: $navbar-safe-area;
        transform: translateX(100%);
        visibility: hidden;
        transition: .5s ease;
        flex-direction: column;
        overflow-y: auto;

        &-items {
          flex-direction: column;
          align-items: center;

          li {
            width: 100%;
          }

          a {
            display: block;
            font-size: 1.75rem;
            text-align: center;
            padding: 1rem;
            line-height: 1;

            &:hover {
              color: $secondary;
            }
          }
        }

        .logo {
          display: none;
        }
      }

      &-social {
        display: block;
        margin-top: auto;
        margin-bottom: 4rem;

        &-logo {
          display: block;
          width: 90%;
          margin: 1rem auto;
          max-width: 120px;
          height: auto;

          .lt {
            fill: currentColor;
          }
        }

        ul {
          justify-content: center;

          a {
            color: $black;

            &:hover {
              color: $secondary;
            }
          }
        }
      }

      &.shown {
        .sonora-nav-menu {
          transform: translateX(0);
          visibility: visible;
        }
      }
    }
  }
</style>
