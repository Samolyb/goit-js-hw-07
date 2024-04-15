function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

controls.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const action = event.target.dataset.action;

  if (action === 'create') {
    createBoxes();
  } else if (action === 'destroy') {
    destroyBoxes();
  }
}

function createBoxes() {
  const input = document.querySelector('input[type="number"]');
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.innerHTML = '';
  boxesContainer.append(...boxes);
  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
