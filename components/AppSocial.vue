<template>
  <ul class="social-links" aria-label="Xarxes socials de Sonora">
    <li>
      <a href="https://www.facebook.com/GVAInstitutValenciadeCultura/" title="Facebook" target="_blank" rel="noreferer noopener">
        <facebook-icon />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/GVAivc" title="Twitter" target="_blank" rel="noreferer noopener">
        <twitter-icon />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/sonora_circuit/" title="Instagram" target="_blank" rel="noreferer noopener">
        <instagram-icon />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCOJWX2GnBA8M8z0Uvajh86Q" title="Youtube" target="_blank" rel="noreferer noopener">
        <youtube-icon />
      </a>
    </li>
  </ul>
</template>

<script>
import FacebookIcon from '@/assets/images/icons/facebook.svg?inline'
import InstagramIcon from '@/assets/images/icons/instagram.svg?inline'
import TwitterIcon from '@/assets/images/icons/twitter.svg?inline'
import YoutubeIcon from '@/assets/images/icons/youtube.svg?inline'

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon
  }
}
</script>

<style lang="scss" scoped>
  .social-links {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 1.5rem;
      padding-right: .75rem;
    }

    a {
      color: $white;

      &:hover {
        color: $pink;
      }
    }

    svg {
      width: 1em;
      height: 1em;
    }
  }
</style>
