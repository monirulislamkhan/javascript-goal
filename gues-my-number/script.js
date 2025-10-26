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
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        message.textContent = 'Number is High';
      } else {
        message.textContent = 'Number is Low';
      }
    } else {
      message.textContent = 'You lost the game!';
      scoreValue.textContent = 0;
    }
    score--;
    scoreValue.textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumberId.textContent = '?';
  guessValue.value = '';
  score = 20;
  scoreValue.textContent = score; // Added this line to update score display
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  console.log(secretNumber);
});

console.log(secretNumber);
