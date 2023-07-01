import throttle from 'lodash.throttle'

const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
console.log(form);

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', submitForm);

let dataForm = JSON.parse(localStorage.getItem(LS_KEY)) || {};
const { email, message } = form.elements;

function inputData() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LS_KEY, JSON.stringify(dataForm));
//   console.log(dataForm);
}

renewalPage();

function renewalPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function submitForm(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LS_KEY);
  e.currentTarget.reset();
}



