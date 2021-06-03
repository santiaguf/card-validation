import validator from './validator.js';
import card from './card.js';

// create the card
card.createCard();


const validateCardNumber = () => {
  const cardNumber = document.getElementById('card-number').value;
  console.log(validator.isValid(cardNumber));
  console.log(cardNumber);

  const formValidation = document.getElementById('form-validation');
  const resultValidation = document.getElementById('result-validation');
  formValidation.classList.add('hide');
  resultValidation.classList.remove('hide');
}

const comeBack = () => {
  const formValidation = document.getElementById('form-validation');
  const resultValidation = document.getElementById('result-validation');
  formValidation.classList.remove('hide');
  resultValidation.classList.add('hide');
}

const formButton = document.getElementById('validate-button');
formButton.addEventListener('click', () => {
  validateCardNumber();
});

const resultButton = document.getElementById('back-button');
resultButton.addEventListener('click', () => {
  comeBack();
});