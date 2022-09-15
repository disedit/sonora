<template>
  <nav :class="['sonora-nav', { shown: navShown }]" aria-label="Navegació">
    <div class="sonora-navbar d-md-none">
      <nuxt-link to="/" class="logo" aria-label="Sonora (Pàgina principal)">
        <sonora-logo />
      </nuxt-link>
      <button @click="navShown = !navShown" class="toggler">
        <hamburger-icon v-if="!navShown" />
        <close-icon v-else />
        <span class="visually-hidden">
          {{ !navShown ? 'Obrir menú' : 'Tancar menú' }}
        </span>
      </button>
    </div>

    <div id="navMenu" class="menu">
      <ul class="menu-items">
        <li class="artistes">
          <nuxt-link to="/artistes">
            <span class="a">Artistes</span>
            <span class="b" aria-hidden="true">Artistes</span>
          </nuxt-link>
        </li>
        <li class="programa">
          <nuxt-link to="/programa">
            <span class="a">Programa</span>
            <span class="b" aria-hidden="true">Programa</span>
          </nuxt-link>
          <button @click="submenuShown = !submenuShown" :class="['submenu-toggler', 'd-md-none', { shown: submenuShown }]">
            <arrow-icon />
            <span class="visually-hidden">
              {{ !submenuShown ? 'Veure localitats' : 'Tanca localitats' }}
            </span>
          </button>
          <transition name="slide">
            <ul v-if="submenuShown" class="submenu d-md-none">
              <li>
                <nuxt-link to="/programa/#orihuela">
                  Orihuela
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programa/#alzira">
                  Alzira
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programa/#aielo">
                  Aielo de Malferit
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programa/#peniscola">
                  Peníscola
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programa/#castello">
                  Castelló de la Plana
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programa/#alacant">
                  Alacant
                </nuxt-link>
              </li>
            </ul>
          </transition>
        </li>
        <li class="circuit">
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
import ArrowIcon from '@/assets/images/icons/arrow.svg?inline'
import HamburgerIcon from '@/assets/images/icons/hamburger.svg?inline'
import CloseIcon from '@/assets/images/icons/close.svg?inline'

export default {
  components: {
    IvcLogo,
    ArrowIcon,
    HamburgerIcon,
    CloseIcon
  },

  data () {
    return {
      navShown: false,
      submenuShown: false
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
  }
}
</script>

<style lang="scss" scoped>
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
          top: .15rem;
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

  @include media-breakpoint-down(md) {
    .sonora-nav {
      padding-top: $mobile-nav;
    }

    .sonora-navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      border-bottom: 1px $black solid;
      padding: .5rem $viewport-x-padding;
      background: $body-bg;
      z-index: 1100;

      .logo svg {
        height: 2rem;
      }

      .toggler {
        appearance: none;
        border: 0;
        background: transparent;
        padding: .5rem 1rem;
        margin: -.5rem -1.25rem;
        margin-left: auto;
      }
    }

    .menu {
      visibility: hidden;
      position: fixed;
      top: $mobile-nav;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      opacity: 0;
      z-index: 1000;
      transition: visibility 0s linear .2s, opacity .2s ease, transform .2s ease;
      transform: translateY(-150px);
      background: $body-bg;
    }

    .shown {
      .menu {
        visibility: visible;
        opacity: 1;
        transition-delay: 0s;
        transform: translateY(0);
      }
    }

    .menu-items {
      flex-direction: column;
      border: 0;
      padding: 0;

      & > li {
        a {
          border-bottom: 1px $black solid;
          padding: 1rem $viewport-x-padding;
          font-size: $text-base;

          &:hover,
          &.nuxt-link-active {
            .a {
              display: block;
              opacity: 1;
            }
          }

          .a {
            position: relative;
            top: .15rem;
          }

          .b {
            display: none;
          }
        }

        &.artistes span,
        &.contacte span {
          text-align: center;
        }

        &.programa {
          position: relative;

          .submenu {
            list-style: none;
            padding: 0;
            border-bottom: 1px $black solid;

            li:first-child {
              padding-top: .5rem;
            }

            li:last-child {
              padding-bottom: .25rem;
            }

            a {
              border: 0;
              text-transform: initial;
              padding: .25rem;
            }
          }

          .submenu-toggler {
            position: absolute;
            top: 0;
            right: 0;
            border: 0;
            height: 3.85rem;
            border-left: 1px $black solid;
            appearance: none;
            background: $body-bg;
            z-index: 900;
            padding: 0 $viewport-x-padding;

            svg {
              transition: .2s ease;
              transform: scaleY(-1);
            }

            &.shown {
              svg {
                transform: scaleY(1);
              }
            }
          }
        }
      }
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all .4s;
    max-height: 300px;
    overflow: hidden;
  }

  .slide-enter,
  .slide-leave-to {
    max-height: 0;
    overflow: hidden;
  }
</style>
