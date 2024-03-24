'use strict';

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    textOutput.textContent = 'Anonymous';
    // return;
  } else {
    textOutput.textContent = event.currentTarget.value.trim();
  }
});
