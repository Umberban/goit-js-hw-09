const btnStartEl = document.querySelector("button[data-start]");
const btnStopEl = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body")
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
function startColorChange(){
    timerId = setInterval(()=>{bodyEl.style.backgroundColor = getRandomHexColor()},1000);
    btnStopEl.disabled=false;
    btnStartEl.disabled=true;
    disableChange();
}
function stopColorChange(){
    clearInterval(timerId);
    btnStartEl.disabled=false;
    btnStopEl.disabled=true;
}
btnStartEl.addEventListener('click', startColorChange);
btnStopEl.addEventListener('click', stopColorChange);
console.log(btnStopEl);
console.log(btnStartEl);