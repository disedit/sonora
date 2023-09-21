<template>
  <nav :class="['sonora-nav', { shown: navShown, scrolled: scrolled && $route.name !== 'index' }]" aria-label="Navegació">
    <div class="sonora-navbar d-lg-none">
      <nuxt-link to="/" class="logo" aria-label="Sonora (Pàgina principal)">
        <sonora-logo />
      </nuxt-link>
      <button @click="navShown = !navShown" class="toggler d-none">
        <hamburger-icon v-if="!navShown" />
        <close-icon v-else />
        <span class="visually-hidden">
          {{ !navShown ? 'Obrir menú' : 'Tancar menú' }}
        </span>
      </button>
      <div />
      <transition name="slide">
        <div v-if="$route.name === 'index' || navShown" class="sonora-title">
          Circuit de la<br>
          Música Valenciana
        </div>
      </transition>
    </div>

    <div id="navMenu" class="menu">
      <ul class="menu-items d-none">
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
            El circuit
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contacte">
            Contacte
          </nuxt-link>
        </li>
        <li class="footer-logos">
          <a href="https://ivc.gva.es" target="_blank" rel="noopener noreferer">
            <img src="../assets/images/logos/generalitat.svg" alt="Generalitat Valenciana. Vicepresidència Primera i Conselleria de Cultura i Esport. Institut Valencià de Cultura">
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import HamburgerIcon from '@/assets/images/icons/hamburger.svg?inline'
import CloseIcon from '@/assets/images/icons/close.svg?inline'

export default {
  components: {
    HamburgerIcon,
    CloseIcon
  },

  data () {
    return {
      navShown: false,
      scrolled: false
    }
  },

  watch: {
    '$route' () {
      this.navShown = false
    },

    navShown (shown) {
      if (shown) {
        document.documentElement.classList.add('nav-shown')
      } else {
        document.documentElement.classList.remove('nav-shown')
      }
    }
  },

  mounted () {
    document.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (e) {
      this.scrolled = window.scrollY > 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .sonora-navbar {
    display: grid;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: .5rem $mobile-padding;
    z-index: 1100;
    grid-template-columns: 1fr auto;

    .logo svg {
      height: 2.25rem;
    }

    .toggler {
      appearance: none;
      border: 0;
      background: transparent;
      padding: .5rem $mobile-padding;
      margin: -.5rem -1.25rem;
      margin-left: auto;

      &:focus-visible {
        outline: 4px $blue solid;
      }
    }

    .sonora-title {
      font-size: 1.5rem;
      line-height: .9;
      margin-top: .75rem;
    }
  }

  .menu {
    visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    opacity: 0;
    z-index: 1000;
    transition: visibility 0s linear .25s, opacity .25s ease, transform .25s ease;
    transform: translateY(-150px);
    background: $body-bg;
    padding: $mobile-padding;
    padding-top: 8rem;

    &-items {
      list-style: none;
      flex-direction: column;
      border: 0;
      padding: 0;

      a {
        display: block;
        text-decoration: none;
        font-size: 1.5rem;
        text-transform: uppercase;
        border-top: 1px $black solid;
        padding: .75rem 0;

        &:focus-visible {
          background: $blue;
          outline: 0;
        }
      }
    }
  }

  .shown {
    .menu {
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
      transform: translateY(0);
    }
  }

  .scrolled {
    .sonora-navbar {
      background: $white;
    }
  }

  .footer-logos {
    img {
      max-height: 3.5rem;
      width: auto;
      max-width: 100%;
      object-fit: contain;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all .25s;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-20%);
  }
</style>
