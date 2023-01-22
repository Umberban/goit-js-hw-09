const btnStartEl = document.querySelector("button[data-start]");
const btnStopEl = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body")
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
function disableToggle(stopBool, startBool){
    btnStopEl.disabled=stopBool;
    btnStartEl.disabled=startBool;
}
function startColorChange(){
    timerId = setInterval(()=>{bodyEl.style.backgroundColor = getRandomHexColor()},1000);
    disableToggle(false,true);
}
function stopColorChange(){
    clearInterval(timerId);
    disableToggle(true,false);
}
btnStartEl.addEventListener('click', startColorChange);
btnStopEl.addEventListener('click', stopColorChange);
console.log(btnStopEl);
console.log(btnStartEl);