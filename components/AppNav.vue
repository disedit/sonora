<template>
  <b-navbar toggleable="md" type="light" fixed="top">
    <b-navbar-brand to="/">
      <Logo />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about">
          Què és Sonora?
        </b-nav-item>
        <b-nav-item to="/schedule">
          Programa
        </b-nav-item>
        <b-nav-item to="/artists">
          Artistes
        </b-nav-item>
        <b-nav-item to="/contact">
          Artistes
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
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .navbar-light {
    border-bottom: 1px $black solid;

    .navbar-nav {
      a.nav-link {
        font-family: $font-headings;
        font-variation-settings: $font-headings-light;
        font-size: 1.25rem;
        color: $primary;

        &::after {
          display: none;
        }
      }
    }

    .navbar-brand {
      svg {
        height: 36px;
        width: 87px;
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
  }

  @include media-breakpoint-down(md) {
    .navbar {
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
  }
</style>
