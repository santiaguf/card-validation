import validator from './validator.js';

console.log(validator);

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

// add card number inputs
const inputDiv =  document.createElement('div');
inputDiv.id = 'input';
inputDiv.classList.add('center');
mainCardElement.appendChild(inputDiv);

const inputEl = document.createElement('input');
inputEl.type = 'number';
inputEl.required = true;
inputEl.minLength = 10;
inputEl.placeholder = 'número de tarjeta de crédito (sólo números)';
const inputDivEl = document.getElementById('input');
inputDivEl.appendChild(inputEl);

// add validate button
const validateDiv =  document.createElement('div');
validateDiv.id = 'validate-button';
validateDiv.classList.add('center');
mainCardElement.appendChild(validateDiv);

const button = document.createElement('button');
const validateDivEl = document.getElementById('validate-button');
validateDivEl.appendChild(button);

const buttonEl = document.querySelector('button');
buttonEl.textContent = 'validar';
buttonEl.classList.add('text', 'blue', 'center');


// add footer
const footer = document.querySelector('footer');
const footerText = document.createElement('span');
footerText.id = 'footer-text';
footerText.classList.add('card', 'text');
footerText.textContent = 'Card Validation © 2021 - todos los derechos reservados';
main.appendChild(mainCard);
footer.appendChild(footerText);
footer.classList.add('center');