import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  input: document.querySelector('input#datetime-picker'),
  
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
}
const { startBtn,days,input, hours, minutes, seconds } = refs;
let timeToFinish = null;
let currentTime = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    if (options.defaultDate >= selectedDates[0]) {
      Notiflix.Notify.warning("Please choose a date in the future");
      startBtn.disabled = true;
      return;
      };
    
      startBtn.disabled = false;
      const now = Date.now();
    timeToFinish = selectedDates[0] - now;
    if (timeToFinish <= 0){
      startBtn.disabled = true;
      return;
    }
    console.log(timeToFinish);
    console.log(selectedDates[0]);
    console.log(now);
      },
};

flatpickr('#datetime-picker', {...options});


startBtn.addEventListener('click', onStart);

function onStart() {
  currentTime = timeToFinish;
  input.addEventListener('click', closeInput);
  createTime();
  updateTime();
  
};
function closeInput () {
  flatpickr('input#datetime-picker', options).close();
};

const addLeadingZero = value => value.padStart(2, '0');

function createTime() {
    const startTime = convertMs(currentTime);
    days.textContent = addLeadingZero(`${startTime.days}`);
    hours.textContent = addLeadingZero(`${startTime.hours}`);
    minutes.textContent = addLeadingZero(`${startTime.minutes}`);
    seconds.textContent = addLeadingZero(`${startTime.seconds}`);
}
function updateTime() {
    startBtn.disabled = true;

    const timerId = setInterval(() => {
        currentTime = (timeToFinish -= 1000);
        createTime();

        if (timeToFinish < 1000) {
            clearInterval(timerId);
            timeToFinish = null;
            currentTime = null;
            startBtn.disabled = false;
            input.removeEventListener('click', closeInput)
        }

    }, 1000)
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}