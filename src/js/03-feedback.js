// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message 
// а їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і
// використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle'

const LS_KEY = 'feedback-form-state';

formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(inputData, 500));
formEl.addEventListener('submit', submitForm);

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



