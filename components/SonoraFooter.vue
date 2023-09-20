<template>
  <footer class="sonora-footer">
    <div class="sonora-footer-level sonora-footer-level-1 align-items-center">
      <div class="sonora-dates reckless">
        set. 23<br>
        &mdash; març 24
      </div>
      <div class="sonora-logo">
        <sonora-logo class="logo" />
      </div>
    </div>

    <div class="sonora-footer-level sonora-footer-level-2">
      <div class="address">
        <p class="ivc">
          &copy; Institut Valencià de Cultura
        </p>
        <address>
          Plaça de l'Ajuntament, 17 <br class="d-none d-lg-inline">
          46002 València
        </address>
      </div>

      <div class="contact">
        <p>Tel. 963 539 300</p>
        <p>E-mail <a href="mailto:circuit_sonora@gva.es">circuit_sonora@gva.es</a></p>
        <p><a href="https://ivc.gva.es/val/ivc-val/qui-som-ivc/avis-legal-val/politica-de-privadesa/nota-legal-val" class="legal-notice" target="_blank" rel="noopener noreferrer">Nota Legal</a></p>
      </div>

      <div class="social d-lg-none">
        <ul class="social-list">
          <li>
            <a href="https://www.instagram.com/sonora_circuit/" target="_blank" rel="noopener noreferer">
              <instagram-icon /> <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/GVAivc" target="_blank" rel="noopener noreferer">
              <twitter-icon /> <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/GVAInstitutValenciadeCultura/" target="_blank" rel="noopener noreferer">
              <facebook-icon /> <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCOJWX2GnBA8M8z0Uvajh86Q" target="_blank" rel="noopener noreferer">
              <youtube-icon /> <span>Youtube</span>
            </a>
          </li>
        </ul>
      </div>

      <ul class="social-list d-none d-lg-block">
        <li>
          <a href="https://www.instagram.com/sonora_circuit/" target="_blank" rel="noopener noreferer">
            <instagram-icon /> <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/GVAivc" target="_blank" rel="noopener noreferer">
            <twitter-icon /> <span>Twitter</span>
          </a>
        </li>
      </ul>
      <ul class="social-list d-none d-lg-block">
        <li>
          <a href="https://www.facebook.com/GVAInstitutValenciadeCultura/" target="_blank" rel="noopener noreferer">
            <facebook-icon /> <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCOJWX2GnBA8M8z0Uvajh86Q" target="_blank" rel="noopener noreferer">
            <youtube-icon /> <span>Youtube</span>
          </a>
        </li>
      </ul>

      <a class="institutions" href="https://ivc.gva.es/" target="_blank" rel="noopener noreferer">
        <img src="../assets/images/logos/generalitat.svg" class="ivc" alt="IVC - Fes Cultura">
      </a>
    </div>
  </footer>
</template>

<script>
import FacebookIcon from '@/assets/images/icons/facebook.svg?inline'
import InstagramIcon from '@/assets/images/icons/instagram.svg?inline'
import TwitterIcon from '@/assets/images/icons/twitter.svg?inline'
import YoutubeIcon from '@/assets/images/icons/youtube.svg?inline'

export default {
  components: {
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
    YoutubeIcon
  }
}
</script>

<style lang="scss">
.sonora-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem $viewport-x-padding;
  // height: $footer-height;
  font-size: $text-xs;

  &-level {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .sonora-dates {
    line-height: 90%;
    letter-spacing: -0.24px;
    font-size: 1.5rem;
  }

  .logo {
    height: 3rem;
  }

  .institutions img {
    height: 3.25rem;
  }

  .social {
    display: flex;
    gap: 1.5rem;

    &-list {
      list-style: none;
      margin: 0;
      padding: 0;

      a {
        text-decoration: none;
      }

      svg {
        display: none;
      }
    }
  }

  a {
    transition: .1s ease;

    &:hover {
      opacity: .5;
    }
  }

  p, address {
    margin: 0;
  }
}

@include media-breakpoint-down(lg) {
  .sonora-footer {
    height: auto;
    border-top: 1px $black solid;
    padding: $mobile-padding;

    &-level {
      flex-direction: column;
      align-items: center;
      gap: 0;

      &-1 {
        flex-direction: row;
      }

      &-2 {
        text-align: center;
      }
    }

    .social {
      gap: 0;
      order: -1;
      margin-bottom: 1rem;
      margin-top: .5rem;

      &-list {
        display: flex;
        gap: 1rem;

        svg {
          display: block;
          height: 1.75em;
          width: 1.75em;
          margin: 0 .5rem;
        }

        span {
          display: none;
        }
      }
    }

    .institutions {
      margin-top: 1rem;
    }
  }
}
</style>
