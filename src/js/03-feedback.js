import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

//localStorage.setItem('email', 'emailInput');
//localStorage.setItem('message', 'messageInput');

let formObj = {
  email: '',
  message: '',
};

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

function sendingForm(event) {
  event.preventDefault();
  if (emailInput.value && messageInput.value) {
    console.log(formObj);
    localStorage.clear();
    formObj = {
      email: '',
      message: '',
    };
  }
}
