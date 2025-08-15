const hourEl = document.getElementById('hour');
const mintuteEl = document.getElementById('minute');
const secondEl = document.getElementById('seccond');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');

// Controller
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const toggleAmPmBtn = document.getElementById('toggleAmPm');

let timer = null;
let is12Hour = true;

function clockDateDisplay() {
  // const now = new Date(2025, 7, 15, 3, 10, 7);
  const now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let ampm;

  /* if (hour < 10 || minute < 10 || second < 10) {
    second = '0' + second;
  } */

  if (is12Hour) {
    ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
  }

  hour = String(hour).padStart(2, '0');
  minute = String(minute).padStart(2, '0');
  second = String(second).padStart(2, '0');

  hourEl.textContent = hour;
  mintuteEl.textContent = minute;
  secondEl.textContent = second;
  ampmEl.textContent = ampm;

  dateEl.textContent = now.toLocaleDateString('en-US', {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  });
}

startBtn.addEventListener('click', () => {
  if (timer) return;
  timer = setInterval(clockDateDisplay, 1000);
  clockDateDisplay();
});

stopBtn.addEventListener('click', () => {
  if (!timer) return;
  clearInterval(timer);
  timer = null;
});

toggleAmPmBtn.addEventListener('click', () => {
  is12Hour = !is12Hour;
  clockDateDisplay();
});

clockDateDisplay();
timer = setInterval(clockDateDisplay, 1000);
