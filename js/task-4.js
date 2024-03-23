const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  console.log(elements);

  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };

  if (elements.email.value.trim() === '' || elements.password.value.trim() === '') {
    alert(`All form fields must be filled in`);
  }

  console.log(info);

  event.currentTarget.reset();
}
