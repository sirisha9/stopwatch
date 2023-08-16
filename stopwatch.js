var [seconds, tens] = [0, 0];

var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var buttonReset = document.getElementById('reset');
var Interval;

buttonStart.onclick = () => {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = () => {
    clearInterval(Interval);
}


buttonReset.onclick = () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}



function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;

    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

}




