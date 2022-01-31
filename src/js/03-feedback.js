import throttle from 'lodash.throttle';

const formBox = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const KEY_LOCALSTORAGE = 'feedback-form-state';
const textInMemory = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
const inputObject = {};

if (textInMemory) {
  inputEmail.value = textInMemory.email;
  textareaMessage.value = textInMemory.message;
}

formBox.addEventListener('input', throttle(addInfoToLocal, 500));
formBox.addEventListener('submit', sendForm);

function addInfoToLocal() {
  inputObject[inputEmail.name] = inputEmail.value;
  inputObject[textareaMessage.name] = textareaMessage.value;
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(inputObject));
}

function sendForm(event) {
  event.preventDefault();
  console.log(inputObject);
  event.currentTarget.reset();
  localStorage.clear();
}
