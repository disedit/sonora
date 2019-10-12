<template>
  <div class="main-container">
    <footer>
      <hr class="mt-4">
      <div class="logos">
        <img src="../assets/images/logos/conselleria.png" alt="Conselleria d'Educació">
        <img src="../assets/images/logos/ivc.png" alt="IVC">
        <img src="../assets/images/logos/fes-cultura.png" alt="Fes Cultura">
      </div>
      <hr class="mb-4">
      <div class="row">
        <div class="col-md-8">
          <h6>© Institut Valencià de Cultura</h6>
          <address>
            Plaça de l'Ajuntament, 17
            46002 València
          </address>
          <div>
            <span>Tel. <a href="tel:+34963539300">963 539 300</a></span>
            <span>E-mail <a href="mailto:ivc@gva.es">ivc@gva.es</a></span>
          </div>
        </div>
        <div class="col-md-4 text-right">
          <a href="https://ivc.gva.es/val/ivc-val/qui-som-ivc/avis-legal-val/politica-de-privadesa/nota-legal-val" target="_blank" rel="noopener noreferrer">Nota legal</a>
          <a id="footerContactButton" href="#" @click.prevent="showContact">Contacte</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',

  methods: {
    showContact () {
      this.$root.$emit('bv::show::modal', 'contact', '#footerContactButton')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  footer {
    margin-top: 2rem;
    color: rgba($text, .65);
  }

  .logos {
    text-align: center;
    background: $background;

    img {
      width: 200px;
      mix-blend-mode: multiply;
    }
  }
</style>
