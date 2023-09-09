let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById("startStop").textContent = "Stop";
        timer = setInterval(updateTime, 1000);
    } else {
        isRunning = false;
        document.getElementById("startStop").textContent = "Start";
        clearInterval(timer);
    }
}
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}
function displayTime() {
    const display = document.getElementById("display");
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
function reset() {
    isRunning = false;
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();

}