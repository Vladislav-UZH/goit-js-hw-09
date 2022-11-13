import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
// import { padStart } from 'lodash';
const refs = {
    startBtn: document.querySelector('[data-start]'),
}


let userDate = null;
let intervalId = null
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
      checkValidUserInputDate(selectedDates[0])
      userDate = selectedDates[0]

  },
};
flatpickr('#datetime-picker', options);
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click',onTimerStart, { once: true })


function checkValidUserInputDate(selectedDate) {
    const date =  Date.now();
    if (selectedDate < date) {
        refs.startBtn.disabled = true;
        Notiflix.Notify.warning("Please choose a date in the future");
         
        return userDate = null;
    }
    refs.startBtn.disabled = false;
    Notiflix.Notify.success('OK');
}
function onTimerStart() {
     intervalId = setInterval(timerStart, 1000);
}
/**
 *
 * @returns timer logic and update web;
 */
function timerStart() {
    const currentTime = Date.now();
    if (  currentTime > userDate) {
        clearInterval(intervalId);
        return Notiflix.Notify.info("Time is up!");
    };
    const deltaTime = userDate - currentTime;
    
    const timeObj = convertMs(deltaTime);
    const timeObjkeys = Object.keys(timeObj)

    for (const key of timeObjkeys) {
        const timerEl = document.querySelector(`[data-${key}]`);
        timerEl.textContent = timeObj[key];
    };
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute)) ;
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    
    return String(value).padStart(2,'0');
}

// ------------------------------