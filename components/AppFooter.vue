<template>
  <footer>
    <div class="app-footer">
      <div class="sonora">
        <logo class="sonora-logo" />
        <app-social class="d-none d-md-flex" />
      </div>
      <div class="address">
        <div class="mb-1">
          <span class="ivc">&copy; Institut Valencià de Cultura</span>
        </div>
        <address>
          Plaça de l'Ajuntament, 17 46002 València
        </address>
        <div>
          <span>Tel. <a href="tel:+34963539300">963 539 300</a></span>
          <span>E-mail <a href="mailto:ivc@gva.es">ivc@gva.es</a></span>
        </div>
        <a href="https://ivc.gva.es/val/ivc-val/qui-som-ivc/avis-legal-val/politica-de-privadesa/nota-legal-val" class="legal-notice" target="_blank" rel="noopener noreferrer">Nota Legal</a>
      </div>
      <a class="logos" href="https://ivc.gva.es/" target="_blank" rel="noopener noreferer">
        <img src="../assets/images/logos/generalitat.svg" class="gva" alt="Conselleria d'Educació">
        <img src="../assets/images/logos/ivc-cultura.png" class="ivc" alt="IVC - Fes Cultura">
      </a>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'
import AppSocial from '@/components/AppSocial'

export default {
  name: 'AppFooter',

  components: {
    Logo,
    AppSocial
  },

  methods: {
    showContact () {
      this.$root.$emit('bv::show::modal', 'contact', '#footerContactButton')
    }
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .app-footer {
    --footer-padding: 2rem 3rem;
    font-size: .875rem;
    display: grid;
    grid-template-columns: .75fr 1fr 1.75fr;
    gap: 1rem;
    align-items: center;
    padding: var(--footer-padding);
    border-top: 1px solid $black;
    background: $white;

    br {
      display: none;
    }

    address {
      margin-bottom: .25rem;
    }

    .sonora {
      &-logo {
        height: auto;
        width: 100px;
      }
    }

    a.legal-notice {
      color: $black;
      text-decoration: underline;
    }

    .logos {
      justify-self: end;
      text-align: right;

      .gva {
        width: 200px;
        margin-right: 1rem;
      }

      .ivc {
        width: 210px;
      }
    }
  }

  @include media-breakpoint-down(lg) {
    .app-footer {
      --footer-padding: 1.5rem;
      grid-template-columns: 1fr 1fr;

      .logos {
        grid-area: 2 / 2;
      }

      .address  {
        grid-area: 2 / 1;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .app-footer {
      --footer-padding: 1.5rem 1rem;
      grid-template-columns: 1fr;
      text-align: center;

      br {
        display: inline;
      }

      span {
        display: block;
      }

      .address {
        grid-area: 2;
      }

      .logos {
        grid-area: 3;
        justify-self: center;
        text-align: center;

        .gva,
        .ivc {
          width: 150px;
        }
      }
    }
  }
</style>
