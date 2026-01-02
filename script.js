let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let running = false;

function updateDisplay() {
  const ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  const sec = seconds < 10 ? "0" + seconds : seconds;
  const min = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("display").innerText = `${min}:${sec}:${ms}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10);
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  pause();
  milliseconds = seconds = minutes = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (running) {
    const lapTime = document.getElementById("display").innerText;
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(li);
  }
}
