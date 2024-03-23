const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    const boxes = Array(amount)
      .fill()
      .map((_, index) => createBox(index));
    boxesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых элементов
    boxes.forEach(box => boxesContainer.appendChild(box));
    input.value = ''; // Очищаем значение в input
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}
function createBox(index) {
  const box = document.createElement('div');
  const size = 30 + index * 10; // Увеличиваем размеры каждого следующего блока на 10px
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищаем контейнер от всех элементов
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
