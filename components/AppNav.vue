<template>
  <b-navbar toggleable="md" type="light" fixed="top">
    <b-navbar-brand to="/">
      <Logo />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about">
          Què és
        </b-nav-item>
        <b-nav-item to="/artists">
          Artistes
        </b-nav-item>
        <b-nav-item to="/schedule">
          Programació
        </b-nav-item>
        <b-nav-item to="/contact">
          Contacte
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://www.facebook.com/GVAInstitutValenciadeCultura/" target="_blank" rel="noopener noreferrer">
          <fa :icon="['fab', 'facebook-square']" /> <span class="sr-only">Facebook</span>
        </b-nav-item>
        <b-nav-item href="https://twitter.com/GVAivc" target="_blank" rel="noopener noreferrer">
          <fa :icon="['fab', 'twitter-square']" /> <span class="sr-only">Twitter</span>
        </b-nav-item>
        <b-nav-item href="https://www.instagram.com/sonora_circuit/" target="_blank" rel="noopener noreferrer">
          <fa :icon="['fab', 'instagram']" /> <span class="sr-only">Instagram</span>
        </b-nav-item>
        <b-nav-item href="https://www.youtube.com/channel/UCOJWX2GnBA8M8z0Uvajh86Q" target="_blank" rel="noopener noreferrer">
          <fa :icon="['fab', 'youtube']" /> <span class="sr-only">Youtube</span>
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
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .navbar-light {
    background: $background;
    border-bottom: 2px $primary solid;

    .navbar-nav {
      a.nav-link {
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

  .artist-full-page {
    .navbar-light {
      background: $primary;

      .navbar-brand:hover {
        .lt {
          fill: $background;
        }
      }
    }

    .navbar-nav {
      a.nav-link {
        color: $background;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .navbar {
      &-nav {
        padding: 1rem 0;
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
  }
</style>
