const card = {

  createCard() {
    //add main div
    const main = document.querySelector('main');
    const mainCard = document.createElement('div');
    mainCard.id = 'main-card';
    main.appendChild(mainCard);

    // add logo
    const mainCardElement = document.getElementById('main-card');
    const cardLogo = document.createElement('div');
    cardLogo.id = 'card-logo';
    mainCardElement.appendChild(cardLogo);
    mainCardElement.classList.add('center');

    //add description
    const cardDesc = document.createElement('div');
    cardDesc.id = 'card-description';
    cardDesc.classList.add('center');
    mainCardElement.appendChild(cardDesc);

    //add promo text
    const descDiv = document.getElementById('card-description');
    const promoText = 'Disfruta todos los partidos de la Copa América 2021 en Streaming por $99 usd ';
    const promoDiv =  document.createElement('div');
    promoDiv.id = 'promo-text';
    promoDiv.classList.add('text', 'blue');
    promoDiv.textContent = promoText;
    descDiv.appendChild(promoDiv);

    // add step text
    const stepText = 'Paso 1: escríbe el número de tu tarjeta de crédito para continuar ';
    const stepDiv =  document.createElement('div');
    stepDiv.id = 'step-text';
    stepDiv.classList.add('text', 'blue');
    stepDiv.textContent = stepText;
    descDiv.appendChild(stepDiv);

    // add card validation form
    const form = document.createElement('div');
    form.id = 'form-validation';
    mainCardElement.appendChild(form);
    const formEl = document.getElementById('form-validation');

    // add card number inputs
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

    // add validate button
    const validateDiv =  document.createElement('div');
    validateDiv.id = 'validate-button-container';
    validateDiv.classList.add('center');
    formEl.appendChild(validateDiv);

    const button = document.createElement('button');
    button.id = 'validate-button';
    button.textContent = 'validar';
    button.classList.add('text', 'center', 'white');
    const validateDivEl = document.getElementById('validate-button-container');
    validateDivEl.appendChild(button);

    // add result validation validation view
    const result = document.createElement('div');
    result.id = 'result-validation';
    result.classList.add('hide');
    mainCardElement.appendChild(result);
    const resultEl = document.getElementById('result-validation');

    // add card number result
    const cardHiddenDiv =  document.createElement('div');
    cardHiddenDiv.id = 'card-hidden';
    cardHiddenDiv.classList.add('center', 'white');
    resultEl.appendChild(cardHiddenDiv);

    // add back button div
    const backButtonDiv =  document.createElement('div');
    backButtonDiv.id = 'back-button-container';
    backButtonDiv.classList.add('center');
    resultEl.appendChild(backButtonDiv);

    const backButtonDivEl = document.getElementById('back-button-container');

    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.textContent = 'regresar';
    backButton.classList.add('text', 'center');
    backButtonDivEl.appendChild(backButton);

    // add footer
    const footer = document.querySelector('footer');
    const footerText = document.createElement('span');
    footerText.id = 'footer-text';
    footerText.classList.add('card', 'text');
    footerText.textContent = 'Card Validation © 2021 - todos los derechos reservados';
    main.appendChild(mainCard);
    footer.appendChild(footerText);
    footer.classList.add('center', 'blue');
  }
}

export default card;
