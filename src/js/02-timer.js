import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    //   console.log(selectedDates[0]);
    if(selectedDates[0]<    new Date()){
        btnStartEl.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future");
    }else{btnStartEl.disabled = false;}
    },
  };
const btnStartEl = document.querySelector("button[data-start]");
const inputDateEl = document.getElementById("datetime-picker");
const containerEl = document.querySelector(".timer")
let timerid = null;
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
  function addLeadingZero(value){
    value = String(value);
    if(value.length<2){
        value  = value.padStart(2, 0)
        return value;  }
    return value; 
  }
  const dateTime = flatpickr(inputDateEl,options);
  function timer(){
    const date = new Date();
    const x = dateTime.selectedDates[0].getTime()-date.getTime();
    if(x<=0){
        return;
    }
    const { days, hours, minutes, seconds } = convertMs(x);
    containerEl.querySelector("[data-days]").textContent = addLeadingZero(days);
    containerEl.querySelector("[data-hours]").textContent = addLeadingZero(hours);
    containerEl.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
    containerEl.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
  }
  function clickHandler(){
    timerId = setInterval(timer,1000)
    btnStartEl.disabled=true;
  }
  btnStartEl.addEventListener('click',clickHandler)
  