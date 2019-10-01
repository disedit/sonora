<template>
  <b-navbar toggleable="md" type="light">
    <b-navbar-brand href="#">
      Sonora
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to='/artists'>
          Artistes
        </b-nav-item>
        <b-nav-item href="#">
          Programació
        </b-nav-item>
        <b-nav-item to='/about'>
          About
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        Icones
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .navbar-light {
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
