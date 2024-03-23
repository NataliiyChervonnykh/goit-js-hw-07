'use strict';

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
// const textStart = textOutput.textContent;

textInput.addEventListener('input', event => {
  // event.currentTarget.value.trim() === '';
  if (event.currentTarget.value.trim() === '') {
    textOutput.textContent = 'Anonymous';
    // return;
  } else {
    textOutput.textContent = event.currentTarget.value.trim();
  }
  textOutput.textContent = textStart;
});
