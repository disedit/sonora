<template>
  <footer class="sonora-footer">
    <div class="sonora-logo">
      <sonora-logo class="logo" />
    </div>
    <ul class="social d-none d-lg-block">
      <li><a href="" target="_blank" rel="noopener noreferer">Spotify</a></li>
      <li><a href="" target="_blank" rel="noopener noreferer">Instagram</a></li>
      <li><a href="" target="_blank" rel="noopener noreferer">Twitter</a></li>
    </ul>
    <ul class="social d-none d-lg-block">
      <li><a href="" target="_blank" rel="noopener noreferer">Facebook</a></li>
      <li><a href="" target="_blank" rel="noopener noreferer">Youtube</a></li>
    </ul>
    <div class="address">
      <p class="ivc">
        &copy; Institut Valencià de Cultura
      </p>
      <address>
        Plaça de l'Ajuntament, 17<br>46002 València
      </address>
    </div>
    <div class="contact">
      <p>Tel. <a href="tel:+34963539300">963 539 300</a></p>
      <p>E-mail <a href="mailto:circuit_sonora@gva.es">circuit_sonora@gva.es</a></p>
      <p><a href="https://ivc.gva.es/val/ivc-val/qui-som-ivc/avis-legal-val/politica-de-privadesa/nota-legal-val" class="legal-notice" target="_blank" rel="noopener noreferrer">Nota Legal</a></p>
    </div>
    <a class="institutions" href="https://ivc.gva.es/" target="_blank" rel="noopener noreferer">
      <img src="../assets/images/logos/institucionals.svg" class="ivc" alt="IVC - Fes Cultura">
    </a>
  </footer>
</template>

<style lang="scss">
.sonora-footer {
  border-top: 2px $black solid;
  padding: 1.5rem $viewport-x-padding;
  height: $footer-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .logo {
    height: 4rem;
  }

  .institutions img {
    height: 4rem;
  }

  .social,
  .address,
  .contact {
    align-self: flex-start;
  }

  .social {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p, address {
    margin: 0;
  }
}
</style>
