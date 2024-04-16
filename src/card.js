const card = {
  createCard() {
    const cardHTML = `
      <div id="main-card" class="center">
        <div id="card-logo">
          <img id="img-logo" src="img/CA2021-horizontal-logo.png" alt="logo copa america">
        </div>
        <div id="card-description" class="center">
          <div id="promo-text" class="text blue">
            Disfruta todos los partidos de la Copa América 2021 en Streaming por $99 usd
          </div>
          <div id="step-text" class="text blue">
            Paso 1: escríbe el número de tu tarjeta de crédito para continuar
          </div>
        </div>
        <div id="form-validation">
          <div id="input-container" class="center">
            <input id="card-number" type="number" required minlength="10" placeholder="número de tarjeta de crédito (sólo números)">
          </div>
          <div id="validate-button-container" class="center">
            <button id="validate-button" class="text center">Validar</button>
          </div>
        </div>
        <div id="result-validation" class="hide">
          <div id="card-hidden" class="center white"></div>
          <div id="back-button-container" class="center">
            <button id="back-button" class="text center">Regresar</button>
            <button id="next-button" class="text center hide">Continuar</button>
          </div>
        </div>
      </div>
    `;

    const main = document.querySelector('main');
    main.innerHTML = cardHTML;

    const footer = document.querySelector('footer');
    footer.innerHTML = `
      <span id="footer-text" class="card text center blue">
        Card Validation © 2021 - todos los derechos reservados
      </span>
    `;
  }
}

export default card;
