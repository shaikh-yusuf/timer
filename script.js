let time = parseInt(prompt("enter time"));
let timerEle = document.getElementById("timer");
let handelrBut = document.getElementById("handler");
let timerId;
console.log(timerId);
handelrBut.innerText = "start";
handelrBut.style.fontSize = "40px";
timerEle.innerText = time;
timerEle.style.fontSize = "60px";

function togTimer() {
  if (!timerId) {
    //play finctionality
    handelrBut.innerText = "stop";
    timerId = setInterval(() => {
      if (time === 0) {
        timerEle.innerText = "time ups";
        clearInterval(timerId);
        timerId = undefined;
        return;
      }
      timerEle.innerText = --time;
    }, 1000);
  } else {
    //paus finctionality
    handelrBut.innerText = "start";
    clearInterval(timerId);
    console.log(timerId);
    timerId = undefined;
  }
}
handelrBut.addEventListener("click", togTimer);
