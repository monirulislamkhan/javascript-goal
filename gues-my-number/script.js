// Refactored Guess My Number - best-practice style
// Centralized DOM access, helper functions and clearer variable names.

const DOM = {
  guessInput: document.getElementById('guessValue'),
  message: document.querySelector('.message'),
  numberBox: document.querySelector('.number'),
  scoreDisplay: document.querySelector('.score'),
  highscoreDisplay: document.querySelector('.highscore'),
  checkBtn: document.querySelector('.check'),
  againBtn: document.querySelector('.again'),
  body: document.body,
};

let secretNumber = generateRandom(1, 20);
let score = 20;
let highScore = 0;

// Initialize UI
DOM.scoreDisplay.textContent = score;
DOM.numberBox.textContent = '?';

function generateRandom(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}

function displayMessage(msg) {
  DOM.message.textContent = msg;
}

function resetUIToDefault() {
  DOM.body.style.backgroundColor = '#222';
  DOM.numberBox.style.width = '15rem';
  DOM.numberBox.textContent = '?';
}

function updateScoreDisplay() {
  DOM.scoreDisplay.textContent = score;
}

function updateHighscore() {
  if (score > highScore) {
    highScore = score;
    DOM.highscoreDisplay.textContent = highScore;
  }
}

// Check button handler
DOM.checkBtn.addEventListener('click', function () {
  const guess = Number(DOM.guessInput.value);

  if (!guess) {
    displayMessage('⛔ No number!');
    return;
  }

  if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    DOM.numberBox.textContent = secretNumber;
    DOM.body.style.backgroundColor = '#60b347';
    DOM.numberBox.style.width = '30rem';
    updateHighscore();
    return;
  }

  // Wrong guess
  if (score > 1) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    updateScoreDisplay();
  } else {
    displayMessage('💥 You lost the game!');
    score = 0;
    updateScoreDisplay();
    // Reveal the number when player loses
    DOM.numberBox.textContent = secretNumber;
  }
});

// Again / reset game handler
DOM.againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = generateRandom(1, 20);
  resetUIToDefault();
  DOM.guessInput.value = '';
  updateScoreDisplay();
  displayMessage('Start guessing...');
  // Note: remove the console.log before deploying so secret stays hidden
});

// End of refactor
