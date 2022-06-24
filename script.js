'use strict';

var second = Number('00');
var digit = Number('00');
var minute = Number('00');

var showMinutes = document.querySelector('.minute');
var showSeconds = document.querySelector('.second');
var showDigits = document.querySelector('.digit');

var btnStart = document.querySelector('.btn-start');
var btnStop = document.querySelector('.btn-stop');
var btnReset = document.querySelector('.btn-reset');

var Interval;

btnStart.addEventListener('click', function () {
  clearInterval(Interval);
  Interval = setInterval(displayTime, 10);
});

btnStop.addEventListener('click', function () {
  clearInterval(Interval);
});

btnReset.addEventListener('click', function () {
  clearInterval(Interval);
  digit = '00';
  second = '00';
  minute = '00';
  showSeconds.textContent = second;
  showDigits.textContent = digit;
  showMinutes.textContent = minute;
});

function displayTime() {
  //digit-count starts
  digit++;
  if (digit <= 9) {
    showDigits.textContent = '0' + digit;
  }
  if (digit > 9) {
    showDigits.textContent = digit;
  }
  //second-count starts
  if (digit > 99) {
    second++;
    showSeconds.textContent = '0' + second;
    digit = 0;
    showDigits.textContent = '0' + digit;
  }
  if (second > 9) {
    showSeconds.textContent = second;
  }
  //minute-count starts
  if (second > 59) {
    minute++;
    showMinutes.textContent = '0' + minute;
    second = 0;
    showSeconds.textContent = '0' + second;
  }
  if (minute > 9) {
    showMinutes.textContent = minute;
  }
}

// day/night switch
