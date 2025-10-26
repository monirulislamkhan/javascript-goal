/*
  Guess My Number Game 🎮
  ----------------------
  Ye game 1-20 ke beech mei ek number choose karta hai, 
  aur player ko use guess karna hota hai.
  
  Game Rules 📝:
  1. Player ko 1-20 ke beech mei number guess karna hai
  2. Har galat guess pe score 1 kam hota hai
  3. Score 0 hone pe game over
  4. High score save hota hai
*/

// Sabse pehle saare HTML elements ko variables mei store karte hai
// Isse baar baar document.querySelector() nahi likhna padega
const gameElements = {
  // Player input aur buttons
  inputField: document.getElementById('guessValue'), // Jaha player number dalega
  checkButton: document.querySelector('.check'), // Check karne ka button
  playAgainButton: document.querySelector('.again'), // Restart karne ka button

  // Display elements (jaha game ki information dikhegi)
  messageText: document.querySelector('.message'), // Player ko hints dene ke liye
  numberBox: document.querySelector('.number'), // Secret number show karne ke liye
  scoreDisplay: document.querySelector('.score'), // Current score dikhane ke liye
  highscoreDisplay: document.querySelector('.highscore'), // High score dikhane ke liye

  // Game ka background
  gameBody: document.body,
};

// Game ke main variables
let secretNumber = getRandomNumber(1, 20); // Computer ka chuna hua number
let currentScore = 20; // Player ka current score
let highScore = 0; // Ab tak ka highest score

// ---------- Helper Functions ----------

// Random number generate karne ke liye function
function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}

// Player ko message dikhane ke liye function
function showMessage(text) {
  gameElements.messageText.textContent = text;
}

// Score update karne ke liye function
function updateScore() {
  gameElements.scoreDisplay.textContent = currentScore;
}

// High score update karne ke liye function
function updateHighScore() {
  if (currentScore > highScore) {
    highScore = currentScore;
    gameElements.highscoreDisplay.textContent = highScore;
  }
}

// Game ko reset karne ke liye function
function resetGame() {
  // Background color black karna
  gameElements.gameBody.style.backgroundColor = '#222';
  // Number box ko normal size karna
  gameElements.numberBox.style.width = '15rem';
  // Question mark dikhana
  gameElements.numberBox.textContent = '?';
  // Input field khali karna
  gameElements.inputField.value = '';
}

// ---------- Game Setup ----------

// Initial game setup
updateScore(); // Score display ko set karo
gameElements.numberBox.textContent = '?'; // Number box mei question mark

// ---------- Game Controls ----------

// Check button par click hone par kya hoga
gameElements.checkButton.addEventListener('click', function () {
  // Debugger 1: Check karo ki button click ho raha hai
  debugger;

  // Player ka guess number mei convert karo
  const playerGuess = Number(gameElements.inputField.value);
  // Debugger 2: Check karo ki input value sahi se number mei convert hui
  debugger;

  // Agar koi number nahi dala hai
  if (!playerGuess) {
    showMessage('⛔ Koi number nahi dala!');
    return;
  }

  // Agar guess sahi hai
  if (playerGuess === secretNumber) {
    // Debugger 3: Winning condition check karo
    debugger;
    showMessage('🎉 Sahi jawab! Jeet gaye!');
    gameElements.numberBox.textContent = secretNumber;
    // Green background for win
    gameElements.gameBody.style.backgroundColor = '#60b347';
    // Number box bada karo
    gameElements.numberBox.style.width = '30rem';
    // High score check karo
    updateHighScore();
    return;
  }

  // Agar guess galat hai
  if (currentScore > 1) {
    // Player ko hint do - number bada hai ya chota
    showMessage(playerGuess > secretNumber ? '📈 Thoda bada ho gaya!' : '📉 Thoda chota ho gaya!');
    currentScore--; // Score kam karo
    updateScore(); // Score display update karo
  } else {
    // Game over - score 0 ho gaya
    showMessage('💥 Game Over! Aap haar gaye!');
    currentScore = 0;
    updateScore();
    // Sahi number dikha do
    gameElements.numberBox.textContent = secretNumber;
  }
});

// Again button par click hone par game restart karo
gameElements.playAgainButton.addEventListener('click', function () {
  // Score reset karo
  currentScore = 20;
  // Naya random number generate karo
  secretNumber = getRandomNumber(1, 20);
  // UI reset karo
  resetGame();
  // Score update karo
  updateScore();
  // Starting message dikaho
  showMessage('Game shuru! Number guess karo...');
});

// ---------- Game Ready! ----------
