const clock = document.getElementById('clock');
const date = document.getElementById('date');

function clockDisplay() {
  const today = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  clock.textContent = today.toLocaleTimeString('en-US');
  date.textContent = today.toLocaleDateString('en-US', options);
}
clockDisplay();
setInterval(clockDisplay, 1000);
