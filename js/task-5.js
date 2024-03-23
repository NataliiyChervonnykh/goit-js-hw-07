function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');

button.addEventListener('click', handleClick);

function handleClick() {
  const change = getRandomHexColor();

  const body = document.querySelector('body');

  body.style = `background-color: ${change}`;

  const colorSpan = document.querySelector('.color');

  colorSpan.textContent = change;
}
