<template>
  <b-navbar :class="{ scrolled, shown }" toggleable="md" type="light" fixed="top" label="Navegació">
    <b-navbar-brand to="/" class="d-md-none">
      <Logo aria-hidden="true" />
      <span class="sr-only">Sonora (pàgina principal)</span>
    </b-navbar-brand>

    <b-navbar-toggle @click="shown = !shown" label="Obrir menú" target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" class="navbar-brand d-none d-md-block">
          <Logo />
        </b-nav-item>
        <b-nav-item to="/artists" class="link-artists">
          Artistes
        </b-nav-item>
        <b-nav-item to="/schedule" class="link-schedule">
          Programa
        </b-nav-item>
        <b-nav-item to="/about" class="link-about">
          El Circuit
        </b-nav-item>
        <b-nav-item to="/contact" class="link-contact">
          Contacte
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'AppNav',

  components: {
    Logo
  },

  data () {
    return {
      scrolled: false,
      shown: false
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

  .navbar-light {
    transition: .2s ease;
    border-bottom: 1px rgba($black, 0) solid;

    .navbar-nav {
      a.nav-link {
        font-family: $font-headings;
        font-variation-settings: $font-headings-light;
        font-size: 1rem;
        color: $black;
        padding: 0;
        transition: .2s ease;

        &:hover {
          color: $primary;
        }

        &::after {
          display: none;
        }
      }
    }

    .navbar-brand {
      margin-right: 0;
      padding: 0;

      svg {
        height: 48px;
        width: 125px;
      }

      .lt {
        transition: .2s ease;
      }

      &::after {
        display: none;
      }

      &:hover {
        .lt {
          fill: $primary;
        }
      }
    }

    &.scrolled {
      border-bottom: 1px $black solid;
      background: $white;
    }
  }

  @include media-breakpoint-up(md) {
    .navbar-light {
      .navbar-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;

        a.nav-link {
          display: block;
          text-align: center;
          padding: 1rem;
        }
      }

      .navbar-brand {
        order: 3;

        a.nav-link {
          padding: 0;
        }
      }

      .link-artists {
        order: 1;
      }

      .link-schedule {
        order: 2;
      }

      .link-about {
        order: 4;
      }

      .link-contact {
        order: 5;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .navbar-light {
      .navbar {
        &-brand {
          svg {
            height: 38px;
            width: 80px;
          }
        }

        &-nav {
          margin-top: 1rem;

          a.nav-link {
            font-size: 1.5rem;
            padding: .5rem 0;
          }
        }

        &-toggler {
          border: 0;

          &-icon {
            background-image: none !important;
            position: relative;

            &::before,
            &::after {
              content: '';
              position: absolute;
              background: $text;
              height: 2px;
              left: 3px;
              right: 3px;
              top: 25%;
              transition: .4s ease-in-out;
            }

            &::after {
              content: '';
              top: auto;
              bottom: 25%;
            }
          }

          &[aria-expanded="true"] {
            .navbar-toggler-icon {
              &::after {
                transform: rotate(45deg) translateY(-9px);
              }

              &::before {
                transform: rotate(-45deg) translateY(8px);
              }
            }
          }
        }
      }

      &.shown {
        border-bottom: 1px $black solid;
        background: $white;
      }
    }
  }
</style>
