import throttle from 'lodash.throttle';

const formBox = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const buttonSubmit = document.querySelector('button');
const textInMemory = localStorage.getItem('feedback-email-state');
const formObjectForStorage = {};

formBox.addEventListener('submit', sendFormSubmit);
formBox.addEventListener('input', throttle(addEmailToLocalStorage, 500));

function addEmailToLocalStorage(event) {
  formObjectForStorage[event.target.name] = event.target.value;
  localStorage.setItem('feedback-message-state', JSON.stringify(formObjectForStorage));
}

function sendFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    if (value === '') {
      alert('no empty fields allowed');
    }
    console.log('name:', name);
    console.log('value:', value);
  });
  event.target.reset();
  localStorage.removeItem('feedback-message-state');
}

function safeNoSendForm() {
  const savedFormData = localStorage.getItem('feedback-message-state');
  const parsedFormData = JSON.parse(savedFormData);
  if (parsedFormData) {
    inputEmail.value = parsedFormData.email || '';
    textareaMessage.value = parsedFormData.message || '';
  }
}
safeNoSendForm();
