<template>
  <main class="programa">
    <h1 class="section-title">
      Programa
    </h1>

    <ul class="programa-filters">
      <li v-for="(thisVenue, key) in venues" :key="key">
        <nuxt-link :to="`/programa/${key}`">
          {{ thisVenue }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/programa" class="all">
          Veure tot
        </nuxt-link>
      </li>
    </ul>

    <transition name="slide">
      <nuxt-child />
    </transition>
  </main>
</template>

<script>
export default {
  computed: {
    venues () {
      return this.$store.state.venues
    }
  }
}
</script>

<style lang="scss" scoped>
.programa {
  margin-top: $navbar-safe-area + 2rem;
  padding: $viewport-x-padding;

  &-filters {
    display: flex;
    list-style: none;
    column-gap: 2rem;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    flex-wrap: wrap;

    a {
      font-family: $font-family-serif;
      font-style: italic;
      text-decoration: none;
      letter-spacing: -.025em;
      white-space: nowrap;
      font-feature-settings: "ss01", "ss04", "ss11", "liga" 0, "dlig" 0;

      &:hover {
        text-decoration: underline;
      }

      &.nuxt-link-exact-active {
        text-decoration: underline;
      }

      &.all {
        font-family: $font-family-sans-serif;
        font-style: normal;
        text-transform: uppercase;
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .programa {
    margin-top: $mobile-nav;
    padding: 0;

    &-filters {
      padding: 0 $mobile-padding;
      font-size: 1.25rem;
      column-gap: 1rem;
      row-gap: .25rem;
    }
  }
}

@include media-breakpoint-up(lg) {
  .section-title {
    overflow: hidden;
    height: 0;
  }
}
</style>
