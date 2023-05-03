import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');
const btnSubmit = document.querySelector('[type="submit"]');
const LocalKey = 'feedback-form-state';

const submitForm = event => {
  event.preventDefault();
  console.log({
    email: emailEl.value,
    message: messageEl.value,
  });
  localStorage.removeItem(LocalKey);
  event.currentTarget.reset();
};

const inputForm = evt => {
  const objct = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LocalKey, JSON.stringify(objct));
};

const defForm = () => {
  const locolData = localStorage.getItem(LocalKey);
  if (!locolData) {
    return;
  }
  const { email, message } = JSON.parse(locolData);

  form.elements.email.value = email;
  form.elements.message.value = message;
};

form.addEventListener('submit', submitForm);
form.addEventListener('input', throttle(inputForm, 500));
defForm();
