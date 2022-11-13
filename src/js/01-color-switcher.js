
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
    bodyEl: document.querySelector('body'),
    btnStartEl: document.querySelector('button[data-start]'),
    btnStopEl: document.querySelector('button[data-stop]'),
}
let intervalId = null;
function onStartBtnClick() {
     refs.btnStopEl.removeAttribute('disabled');
    refs.btnStartEl.setAttribute('disabled', '');
    intervalId = setInterval(changingBgColor, 1000)

    
}
function onStopBtnClick() {
    refs.btnStartEl.removeAttribute('disabled');
    refs.btnStopEl.setAttribute('disabled', '');
 refs.bodyEl.style.backgroundColor = "#fafafa";

    clearInterval(intervalId)
}

refs.btnStartEl.addEventListener('click', onStartBtnClick)
refs.btnStopEl.addEventListener('click', onStopBtnClick)

function changingBgColor() {
    console.log(getRandomHexColor());
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
}

