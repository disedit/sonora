<template>
  <ul aria-label="Xarxes socials de Sonora">
    <li>
      <a href="https://www.facebook.com/GVAInstitutValenciadeCultura/" title="Facebook" target="_blank" rel="noreferer noopener">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/GVAivc" title="Twitter" target="_blank" rel="noreferer noopener">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/sonora_circuit/" title="Instagram" target="_blank" rel="noreferer noopener">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCOJWX2GnBA8M8z0Uvajh86Q" title="Youtube" target="_blank" rel="noreferer noopener">
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 1.5rem;
    padding-right: .75rem;
  }

  a {
    color: $black;

    &:hover {
      color: $secondary;
    }
  }
</style>
