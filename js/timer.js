let timerId;
let counter = 0;

function displayCounter() {
  document.querySelector(".count").innerText = counter;
}

function start() {
  if (!timerId) {
    timerId = setInterval(() => {
      counter++;
      displayCounter();
    }, 1000);
  }
}

function stop() {
  clearInterval(timerId);
  timerId = null;
}

function reset() {
  counter = 0;
  stop();
  displayCounter();
}
