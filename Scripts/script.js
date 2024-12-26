const difficultySelect = document.getElementById('difficulty-select');
const startButton = document.getElementById('start-game');
const buttonsContainer = document.querySelector('.game-container');
const startMessageDisplay = document.getElementById('startMessage');
const endMessageDisplay = document.getElementById('endMessage');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.querySelector('.game-info-bar h1');

let buttons; // Will store the current active grid buttons
let gameSpeed = 1; // Default speed
let gamePattern = [];
let userPattern = [];
let gameScore = 0;
let gameLevel = 1;
let gameMessage = 'Watch the pattern closely!';
let gameOverMessage = 'Game Over! You guessed wrong.';
let gameActive = false;

// Speed Configuration
const speedSettings = {
    1: { playPattern: 1100, activateButton: 300 }, // Default Speed
    2: { playPattern: 700, activateButton: 200 },  // 2x Speed
    3: { playPattern: 300, activateButton: 100 },  // 4x Speed
};

// Function to initialize the game grid based on difficulty
function setDifficulty() {
    // Clear any previous game state
    resetGame();
    
    // Get selected difficulty
    const difficulty = difficultySelect.value;

    // Hide all button grids
    document.getElementById('grid-easy').style.display = 'none';
    document.getElementById('grid-medium').style.display = 'none';
    document.getElementById('grid-hard').style.display = 'none';

    // Show the selected difficulty grid
    const selectedGrid = document.getElementById(`grid-${difficulty.toLowerCase()}`);
    selectedGrid.style.display = 'grid';

    // Update buttons based on the current grid
    buttons = selectedGrid.querySelectorAll('.pattern-button');
}

// Load Settings from LocalStorage
function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('gameSettings')) || { gameSpeed: 1 };
    
    // Validate and set gameSpeed
    if (speedSettings[savedSettings.gameSpeed]) {
        gameSpeed = savedSettings.gameSpeed;
    } else {
        gameSpeed = 1; // Fallback to default if invalid speed
    }

    console.log(`Game Speed Loaded: ${gameSpeed}`);
}

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

// Generate Random Pattern
function generatePattern() {
    const randomIndex = Math.floor(Math.random() * buttons.length);
    gamePattern.push(buttons[randomIndex].dataset.id);
    playPattern();
}

// Play Pattern Sequentially with Dynamic Speed
function playPattern() {
    let index = 0;
    startMessageDisplay.textContent = gameMessage;

    const intervalDuration = speedSettings[gameSpeed]?.playPattern || 1100; // Default to 1100ms if undefined

    const interval = setInterval(() => {
        activateButton(gamePattern[index]);
        index++;
        if (index === gamePattern.length) {
            clearInterval(interval);
            startMessageDisplay.textContent = 'Your Turn!';
        }
    }, intervalDuration);
}

// Activate Button Flash with Dynamic Speed
function activateButton(buttonId) {
    const button = document.querySelector(`[data-id="${buttonId}"]`);
    if (!button) return;

    const flashDuration = speedSettings[gameSpeed]?.activateButton || 300; // Default to 300ms if undefined

    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), flashDuration);
}


// Start game event listener
startButton.addEventListener('click', () => {
    loadSettings();
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
            }, 50);
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
