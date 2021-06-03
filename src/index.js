import validator from './validator.js';
import card from './card.js';

// create the card
card.createCard();

const showDiv = (id) => {
  const element = document.getElementById(id);
  element.classList.remove('hide');
}

const hideDiv = (id) => {
  const element = document.getElementById(id);
  element.classList.add('hide');
}


const validateCardNumber = () => {

  const cardNumber = document.getElementById('card-number').value;

  if(cardNumber.length > 11){
    const isValidCard = validator.isValid(cardNumber) ? 'es una tarjeta válida' : 'no es una tarjeta válida';
    const maskedCard = validator.maskify(cardNumber);
    const result = `${maskedCard} ${isValidCard}`;

    const cardHidden = document.getElementById('card-hidden');
    cardHidden.classList.add('text');
    cardHidden.textContent = result;

    hideDiv('form-validation');
    showDiv('result-validation');
  }

}

const comeBack = () => {
  showDiv('form-validation');
  hideDiv('result-validation');
}

const formButton = document.getElementById('validate-button');
formButton.addEventListener('click', () => {
  validateCardNumber();
});

const resultButton = document.getElementById('back-button');
resultButton.addEventListener('click', () => {
  comeBack();
});