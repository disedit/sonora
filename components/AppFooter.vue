<template>
  <footer>
    <div class="app-footer">
      <div class="sonora">
        <logo />
        <div>© Institut Valencià de Cultura</div>
        <div>
          <a href="https://ivc.gva.es/val/ivc-val/qui-som-ivc/avis-legal-val/politica-de-privadesa/nota-legal-val" target="_blank" rel="noopener noreferrer">Nota Legal</a>
        </div>
      </div>
      <div class="address">
        <address>
          Plaça de l'Ajuntament, 17 46002 València
        </address>
        <div>
          <span>Tel. <a href="tel:+34963539300">963 539 300</a></span>
          <span>E-mail <a href="mailto:ivc@gva.es">ivc@gva.es</a></span>
        </div>
      </div>
      <div class="logos">
        <img src="../assets/images/logos/generalitat.svg" style="width: 200px; margin-right: 1rem;"alt="Conselleria d'Educació">
        <img src="../assets/images/logos/ivc-cultura.png" style="width: 210px;" alt="IVC - Fes Cultura">
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'AppFooter',

  components: {
    Logo
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
    display: grid;
    grid-template-columns: 1fr 1fr 1.75fr;
    gap: 1rem;
    margin: 2rem 0;
    align-items: end;
    padding: 1rem 3rem;
    border-top: 1px solid $black;

    address {
      margin-bottom: .25rem;
    }

    svg {
      height: auto;
      width: 100px;
      margin: 1rem 0;
    }

    .logos {
      justify-self: end;
    }
  }

  @include media-breakpoint-down(lg) {
    .app-footer {
      grid-template-columns: 1fr 1fr;

      .logos {
        justify-self: start;
        grid-column: span 2;
        margin-top: 1rem;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .app-footer {
      grid-template-columns: 1fr;

      .logos {
        justify-self: start;
        grid-column: span 1;
      }
    }
  }
</style>
