let timerId;
let counter = 0;

function start() {
    if(!timerId){
    timerId = setInterval(() => {
        counter++;
        document.querySelector(".count").innerText = counter;
        console.log(counter);
    }, 1000);
    }
}

function stop() {
        clearInterval(timerId);
        timerId = null;
    }
