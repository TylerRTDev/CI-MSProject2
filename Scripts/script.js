const difficultySelect = document.getElementById('difficulty-select');
const startButton = document.getElementById('start-game');
const buttonsContainer = document.querySelector('.game-container');
const startMessageDisplay = document.getElementById('startMessage');
const endMessageDisplay = document.getElementById('endMessage');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.querySelector('.game-info-bar h1'); // Adjust this if needed

let buttons; // Will store the current active grid buttons
let gamePattern = [];
let userPattern = [];
let gameScore = 0;
let gameLevel = 1;
let gameMessage = 'Watch the pattern closely!';
let gameOverMessage = 'Game Over! You guessed wrong.';
let gameActive = false;


// Function to reset the game
function resetGame() {
    gamePattern = [];
    userPattern = [];
    gameScore = 0;
    gameLevel = 1;
    gameActive = false;

    scoreDisplay.textContent = `Current Score: ${gameScore}`;
    levelDisplay.textContent = `Level: ${gameLevel}`;
    startMessageDisplay.textContent = '';
    endMessageDisplay.textContent = '';
}

// Function to generate a random pattern
function generatePattern() {
    const randomIndex = Math.floor(Math.random() * buttons.length);
    gamePattern.push(buttons[randomIndex].dataset.id); // Using data-id for buttons
    playPattern();
}

// Function to display the current pattern to the user
function playPattern() {
    let index = 0;
    startMessageDisplay.textContent = gameMessage;
    const interval = setInterval(() => {
        activateButton(gamePattern[index]);
        index++;
        if (index === gamePattern.length) {
            clearInterval(interval);
            startMessageDisplay.textContent = 'Your Turn!';
        }
    }, 600);
}

// Function to activate a button flash
function activateButton(buttonId) {
    const button = buttonsContainer.querySelector(`[data-id="${buttonId}"]`);
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 500);
}

// Start game event listener
startButton.addEventListener('click', () => {
    resetGame();
    setDifficulty();
    gameActive = true;
    generatePattern();
});

// Button click event listener for user input
buttonsContainer.addEventListener('click', (e) => {
    if (!gameActive) return;

    const clickedButton = e.target.closest('.pattern-button');
    if (!clickedButton) return;

    const buttonId = clickedButton.dataset.id;
    userPattern.push(buttonId);
    activateButton(buttonId);
    checkUserInput();
});

// Function to check if the user's input matches the pattern
function checkUserInput() {
    const currentStep = userPattern.length - 1;

    if (userPattern[currentStep] === gamePattern[currentStep]) {
        if (userPattern.length === gamePattern.length) {
            gameScore++;
            gameLevel++;
            scoreDisplay.textContent = `Current Score: ${gameScore}`;
            levelDisplay.textContent = `Level: ${gameLevel}`;
            userPattern = [];
            setTimeout(() => {
                startMessageDisplay.textContent = gameMessage;
                generatePattern();
            }, 1000);
        }
    } else {
        gameActive = false;
        endMessageDisplay.textContent = `${gameOverMessage} Final Score: ${gameScore}`;
        alert(`${gameOverMessage} Final Score: ${gameScore}`);
    }
};

// Initialize the game grid on page load
setDifficulty();
difficultySelect.addEventListener('change', setDifficulty);
