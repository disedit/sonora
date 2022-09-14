<template>
  <nav :class="['sonora-nav', { shown }]" aria-label="Navegació">
    <nuxt-link to="/" class="logo d-md-none" aria-label="Sonora (Pàgina principal)">
      <sonora-logo />
    </nuxt-link>

    <div id="navMenu" class="menu">
      <ul class="menu-items">
        <li class="artistes">
          <nuxt-link to="/artistes">
            <span class="a">Artistes</span>
            <span class="b" aria-hidden="true">Artistes</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/programa">
            <span class="a">Programa</span>
            <span class="b" aria-hidden="true">Programa</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/el-circuit">
            <span class="a">El Circuit</span>
            <span class="b" aria-hidden="true">El Circuit</span>
          </nuxt-link>
        </li>
        <li class="contacte">
          <nuxt-link to="/contacte">
            <span class="a">Contacte</span>
            <span class="b" aria-hidden="true">Contacte</span>
          </nuxt-link>
        </li>
        <li class="d-md-none">
          <a href="https://ivc.gva.es" class="ivc" target="_blank" rel="noopener noreferer">
            <ivc-logo />
            <span class="visually-hidden">Institut Valencià de Cultura</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import IvcLogo from '@/assets/images/logos/ivc.svg?inline'

export default {
  components: {
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
  .menu {
    &-items {
      display: flex;
      border-top: 2px $black solid;
      border-bottom: 2px $black solid;
      list-style: none;
      margin: 0;
      padding: .5rem $viewport-x-padding;
      justify-content: space-between;

      li {
        text-align: center;
      }

      a {
        position: relative;
        display: block;
        text-decoration: none;
        font-size: 1.25rem;
        text-transform: uppercase;

        &:hover,
        &.nuxt-link-active {
          .a {
            opacity: 0;
          }

          .b {
            opacity: 1;
          }
        }

        .a {
          position: absolute;
          top: .1rem;
          left: 0;
          right: 0;
        }

        .b {
          font-family: akzidenz, sans-serif;
          font-weight: bold;
          opacity: 0;
        }
      }

      .artistes span {
        text-align: left;
      }

      .contacte span {
        text-align: right;
      }
    }
  }
</style>
