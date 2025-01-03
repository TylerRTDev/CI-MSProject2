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
    resetGame();
    const difficulty = difficultySelect.value;
    const selectedGrid = document.getElementById(`grid-${difficulty.toLowerCase()}`);
    selectedGrid.style.display = 'grid';
    buttons = selectedGrid.querySelectorAll('.pattern-button');
}

let highScores = JSON.parse(localStorage.getItem('leaderboard')) || [];

// Load High Scores
function loadHighScores() {
    highScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
}

// Save High Scores
function saveHighScores() {
    localStorage.setItem('leaderboard', JSON.stringify(highScores));
}

// Function to check if the player's score qualifies for the leaderboard
function checkHighScore(finalScore) {
    // Retrieve the current leaderboard from localStorage
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Ensure the leaderboard is sorted and limited to Top 5
    leaderboard.sort((a, b) => b.points - a.points);
    leaderboard = leaderboard.slice(0, 5);

    // Check if the score qualifies for the leaderboard
    if (leaderboard.length < 5 || finalScore > leaderboard[leaderboard.length - 1].points) {
        const playerName = prompt("🎉 Congratulations! You achieved a new high score! 🎯\nEnter your name:");
        
        if (playerName) {
            leaderboard.push({ name: playerName, points: finalScore });
            leaderboard.sort((a, b) => b.points - a.points);
            leaderboard = leaderboard.slice(0, 5); // Keep only Top 5
            
            // Save back to localStorage
            localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        }

        alert(`🎖️ Your score of ${finalScore} has been added to the leaderboard!`);
    } else {
        alert(`Game Over! Final Score: ${finalScore}`);
    }
}

// Calculate the multiplier directly from gameSpeed
function getMultiplier(gameSpeed) {
    switch (gameSpeed) {
        case 1: return 0.5; // Default Speed
        case 2: return 1; // 2x Speed
        case 3: return 1.5; // 4x Speed
        default: return 1; // Fallback to 1x
    }
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

    // Update Multiplier in UI
    document.getElementById('multiplier').textContent = `${getMultiplier(gameSpeed)}x`;

    console.log(`Game Speed Loaded: ${gameSpeed}`);
    console.log(`Multiplier Set To: ${getMultiplier(gameSpeed)}x`);
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

    // Update Multiplier Display
    document.getElementById('multiplier').textContent = `${getMultiplier(gameSpeed)}x`;

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
            // Apply the multiplier to the score
            const multiplier = getMultiplier(gameSpeed);
            gameScore += Math.round(10 * multiplier); // Increment by 1 * multiplier, rounded to avoid float issues
            
            gameLevel++;
            scoreDisplay.textContent = `Current Score: ${gameScore}`;
            levelDisplay.textContent = `Level: ${gameLevel}`;
            userPattern = [];
            
            setTimeout(() => {
                startMessageDisplay.textContent = gameMessage;
                generatePattern();
            }, 1000 / gameSpeed);
        }
    } else {
        gameOver();
        resetGame();
    }
}

function gameOver() {
    gameActive = false;
    endMessageDisplay.textContent = `${gameOverMessage} Final Score: ${gameScore}`;
    alert(`${gameOverMessage} Final Score: ${gameScore}`);

    checkHighScore(gameScore);
}

// Initialize the game grid on page load
function initializeGame() {
    loadSettings();
    loadHighScores();
    setDifficulty();
    resetGame();
}

document.addEventListener('DOMContentLoaded', initializeGame);
difficultySelect.addEventListener('change', setDifficulty);
