const card = {

  addMainDiv() {
    const main = document.querySelector('main');
    const mainCard = document.createElement('div');
    mainCard.id = 'main-card';
    main.appendChild(mainCard);

    return mainCard;
  },

  addLogo() {
    const mainCardElement = document.getElementById('main-card');
    const cardLogo = document.createElement('div');
    cardLogo.id = 'card-logo';
    mainCardElement.appendChild(cardLogo);
    const logo = document.createElement('img');
    logo.id = 'img-logo';
    logo.src = 'img/CA2021-horizontal-logo.png';
    logo.alt = 'logo copa america'
    cardLogo.appendChild(logo);
    mainCardElement.classList.add('center');

    return mainCardElement;
  },

  addDescription(mainCardElement) {
    const cardDesc = document.createElement('div');
    cardDesc.id = 'card-description';
    cardDesc.classList.add('center');
    mainCardElement.appendChild(cardDesc);

    return mainCardElement;
  },

  addPromoText() {
    const descDiv = document.getElementById('card-description');
    const promoText = 'Disfruta todos los partidos de la Copa América 2021 en Streaming por $99 usd ';
    const promoDiv =  document.createElement('div');
    promoDiv.id = 'promo-text';
    promoDiv.classList.add('text', 'blue');
    promoDiv.textContent = promoText;
    descDiv.appendChild(promoDiv);

    return descDiv;
  },

  addStepText(descDiv) {
    const stepText = 'Paso 1: escríbe el número de tu tarjeta de crédito para continuar ';
    const stepDiv =  document.createElement('div');
    stepDiv.id = 'step-text';
    stepDiv.classList.add('text', 'blue');
    stepDiv.textContent = stepText;
    descDiv.appendChild(stepDiv);
  },

  addCardForm(mainCardElement) {
    const form = document.createElement('div');
    form.id = 'form-validation';
    mainCardElement.appendChild(form);
    const formEl = document.getElementById('form-validation');

    return formEl;
  },

  addCardInput(formEl) {
    const inputDiv =  document.createElement('div');
    inputDiv.id = 'input-container';
    inputDiv.classList.add('center');
    formEl.appendChild(inputDiv);

    const inputEl = document.createElement('input');
    inputEl.id ='card-number';
    inputEl.type = 'number';
    inputEl.required = true;
    inputEl.minLength = 10;
    inputEl.placeholder = 'número de tarjeta de crédito (sólo números)';
    const inputDivEl = document.getElementById('input-container');
    inputDivEl.appendChild(inputEl);

    return formEl;
  },

  addValidateButton(formEl) {
    const validateDiv =  document.createElement('div');
    validateDiv.id = 'validate-button-container';
    validateDiv.classList.add('center');
    formEl.appendChild(validateDiv);

    const button = document.createElement('button');
    button.id = 'validate-button';
    button.textContent = 'Validar';
    button.classList.add('text', 'center');
    const validateDivEl = document.getElementById('validate-button-container');
    validateDivEl.appendChild(button);
  },

  addResultValidationView(mainCardElement) {
    const result = document.createElement('div');
    result.id = 'result-validation';
    result.classList.add('hide');
    mainCardElement.appendChild(result);
    const resultEl = document.getElementById('result-validation');

    return resultEl;
  },

  addCardNumberResult(resultEl) {
    const cardHiddenDiv =  document.createElement('div');
    cardHiddenDiv.id = 'card-hidden';
    cardHiddenDiv.classList.add('center', 'white');
    resultEl.appendChild(cardHiddenDiv);

    return resultEl;
  },

  addBackButtonDiv (resultEl){
    const backButtonDiv =  document.createElement('div');
    backButtonDiv.id = 'back-button-container';
    backButtonDiv.classList.add('center');
    resultEl.appendChild(backButtonDiv);
  },

  addBackButton(backButtonDivEl) {
    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.textContent = 'Regresar';
    backButton.classList.add('text', 'center');
    backButtonDivEl.appendChild(backButton);

    return backButtonDivEl;
  },

  addContinueButton (backButtonDiv){
    const nextButton = document.createElement('button');
    nextButton.id = 'next-button';
    nextButton.textContent = 'Continuar';
    nextButton.classList.add('text', 'center', 'hide');
    backButtonDiv.appendChild(nextButton);
  },

  addFooter(mainCard) {
    const footer = document.querySelector('footer');
    const footerText = document.createElement('span');
    footerText.id = 'footer-text';
    footerText.classList.add('card', 'text');
    footerText.textContent = 'Card Validation © 2021 - todos los derechos reservados';
    const main = document.querySelector('main');
    main.appendChild(mainCard);
    footer.appendChild(footerText);
    footer.classList.add('center', 'blue');
  },

  createCard() {
    const mainCard = card.addMainDiv();

    let mainCardElWithLogo = card.addLogo();

    const mainCardElement = card.addDescription(mainCardElWithLogo);

    const descDivCreated = card.addPromoText();

    card.addStepText(descDivCreated);

    const formElEmpty = card.addCardForm(mainCardElement);

    const formEl = card.addCardInput(formElEmpty);

    card.addValidateButton(formEl);

    const resultElEmpty = card.addResultValidationView(mainCardElement);

    const resultEl = card.addCardNumberResult(resultElEmpty);

    card.addBackButtonDiv(resultEl);
    const backButtonDivEl = document.getElementById('back-button-container');

    const backButtonDiv = card.addBackButton(backButtonDivEl);

    card.addContinueButton(backButtonDiv);

    card.addFooter(mainCard);
  }
}

export default card;
