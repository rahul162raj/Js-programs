export function StopWatch() {
  // private
  let interval;
  let running = false;
  let tens = 0;
  let seconds = 0;
  const setError = function (error) {
    document.getElementById("stopwatchError").innerHTML = error;
  };
  const setTens = function (value) {
    document.getElementById("tens").innerHTML = value;
  };
  const setSeconds = function (value) {
    document.getElementById("seconds").innerHTML = value;
  };
  const startTimer = function () {
    tens++;
    if (tens <= 9) {
      setTens("0" + tens);
    } else if (tens > 9 && tens <= 99) {
      setTens(tens);
    } else if (tens > 99 && seconds <= 9) {
      tens = 0;
      seconds++;
      setSeconds("0" + seconds);
    } else if (tens > 99 && seconds > 9) {
      tens = 0;
      seconds++;
      setSeconds(seconds);
    }
  };
  // public
  this.start = function () {
    if (!running) {
      setError("");
      interval = setInterval(startTimer, 10);
      running = true;
    } else {
      setError("*** Stopwatch already started ***");
    }
  };
  this.stop = function () {
    if (running) {
      setError("");
      clearInterval(interval);
      running = false;
    } else {
      setError("*** Stopwatch is not running ***");
    }
  };
  this.reset = function () {
    tens = 0;
    seconds = 0;
    setError("");
    clearInterval(interval);
    setTens("0" + tens);
    setSeconds("0" + seconds);
    running = false;
  };
}
