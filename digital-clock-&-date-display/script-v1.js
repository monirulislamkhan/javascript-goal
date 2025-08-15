const clock = document.getElementById('clock');
const date = document.getElementById('date');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const toggleAmPm = document.getElementById('toggleAmPm');

let timer = null;
let is12Hour = false;

function clockDisplay() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString('en-US', { hour12: is12Hour });
  date.textContent = now.toLocaleDateString('en-US', {
    day: 'numeric',
    weekday: 'short',
    month: 'long',
    year: 'numeric',
  });
}

clockDisplay();

startBtn.addEventListener('click', () => {
  if (timer) return;
  alert('Start Now');
  timer = setInterval(clockDisplay, 1000);
});

stopBtn.addEventListener('click', () => {
  if (!timer) return;
  alert('Stop Now');
  clearInterval(timer);
  timer = null;
});

toggleAmPm.addEventListener('click', () => {
  is12Hour = !is12Hour;
  clockDisplay();
});
