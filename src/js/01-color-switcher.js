const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let intervalId =null;

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onStart() {
  cangeColor();
  intervalId = setInterval(cangeColor, 1000);
  btnStop.disabled = false;
  btnStart.disabled = true;
};

function cangeColor() {
  body.style.backgroundColor = getRandomHexColor();
};

function onStop() {
  clearInterval(intervalId);
  btnStop.disabled = true;
  btnStart.disabled = false;
};


