let secretNumber = Math.trunc(Math.random() * 20) + 1;
const guessValue = document.getElementById('guessValue');
let message = document.querySelector('.message');
let secretNumberId = document.querySelector('.number');
let scoreValue = document.querySelector('.score');
// scoreValue.textContent = 2;
let score = 20;
let highScore = 0;

// console.log(score);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessValue.value);
  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    secretNumberId.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        message.textContent = 'Number is High';
      } else {
        message.textContent = 'Number is Low';
      }
      score--;
      scoreValue.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      scoreValue.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumberId.textContent = '?';
  guessValue.value = '';
  scoreValue.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  message.textContent = 'Start guessing...';
});

console.log(secretNumber);
