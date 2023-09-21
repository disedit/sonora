<template>
  <header class="header">
    <nuxt-link to="/" class="header-title">
      <h1>Circuit de la<br>Música Valenciana</h1>
    </nuxt-link>
    <nav class="header-nav">
      <ul aria-label="Navegació">
        <li>
          <router-link to="/artistes">
            Artistes
          </router-link>
        </li>
        <li>
          <router-link to="/programa">
            Programa
          </router-link>
        </li>
        <li>
          <router-link to="/el-circuit">
            El circuit
          </router-link>
        </li>
        <li>
          <router-link to="/contacte">
            Contacte
          </router-link>
        </li>
      </ul>
    </nav>
    <nuxt-link class="header-logo" to="/" aria-label="Sonora (anar a la pàgina principal)">
      <sonora-logo class="logo" />
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'SonoraMenu'
}
</script>

<style lang="scss" scoped>
.header {
  padding: $viewport-y-padding $viewport-x-padding;
  display: grid;
  grid-template-columns: 190px 1fr 190px;
  align-items: center;
  height: $navbar-safe-area;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: $white;
  z-index: 1000;

  &-title {
    text-decoration: none;

    h1 {
      line-height: .9;
      font-size: 1.5rem;
      margin: 0;
    }
  }

  &-nav {
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      list-style: none;
      margin: 0 auto;
      padding: 0;
      gap: 1rem;
      max-width: 800px;

      a {
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.5rem;
        text-align: center;

        &:hover,
        &.nuxt-link-active {
          font-family: $font-family-serif;
        }
      }
    }
  }

  &-logo {
    margin-left: auto;

    svg {
      height: 2.75rem;
    }
  }

  a:focus-visible {
    outline: 4px $blue solid;
  }
}
</style>
