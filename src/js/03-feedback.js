import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formObj = {
  email: '',
  message: '',
};

changeForm();

emailInput.addEventListener(
  'imput',
  throttle(() => {
    formObj.email = emailInput.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formObj));
  }, 500)
);

messageInput.addEventListener(
  'imput',
  throttle(() => {
    formObj.message = messageInput.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formObj.message));
  }, 500)
);

form.addEventListener('submit', sendingForm);

function changeForm() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    formObj.email = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
    formObj.message = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEY)
    ).message;
    emailInput.value = formObj.email;
    messageInput.value = formObj.message;
  } else {
    return;
  }
}

function sendingForm(event) {
  event.preventDefault();

  formObj = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formObj);
  localStorage.clear();
  event.currentTarget.reset();
}
