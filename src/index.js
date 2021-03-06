import validator from './validator.js';
import card from './card.js';
import issuer from './issuer.js';

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
  const validCardText = 'es una tarjeta válida';
  const invalidCardText = 'NO es una tarjeta válida';
  let isValidCard;
  let fromIssuer = '';

  if(cardNumber.length > 11){
    //const isValidCard = validator.isValid(cardNumber) ? validCardText : invalidCardText;

    if (validator.isValid(cardNumber)) {
      isValidCard = validCardText;
      const theIssuer = issuer.getBank(cardNumber);
      fromIssuer = `de la franquicia: ${theIssuer}`;
      showDiv('next-button');
    } else {
      isValidCard = invalidCardText;
      hideDiv('next-button');
    }

    const maskedCard = validator.maskify(cardNumber);
    const result = `${maskedCard} ${isValidCard} ${fromIssuer}`;

    //show or hide continue button
    //isValidCard === validCardText ? showDiv('next-button'): hideDiv('next-button');

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