const buttons = document.querySelectorAll('.pattern-button');
const startButton = document.getElementById('start-game');
const resetButton = document.getElementById('');
const startMessageDisplay = document.getElementById('startMessage');
const endMessageDisplay = document.getElementById('endMessage');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level')


let gamePattern = [];
let userPattern = [];
let gameMode = []; 
let gameScore = 0;
let gameLevel = 1;
let gameMessage = 'Watch The Pattern Closely!';
let gameOverMessage = 'Game Over! You Guesses Wrong. \n ';
let levelMultiplier = 0;

// Function to generate a random pattern
function generatePattern() {
    const randomIndex = Math.floor(Math.random() * buttons.length);
    gamePattern.push(buttons[randomIndex].id);
    playPattern();
}

// Function to display the current pattern to the user
function playPattern() {
    let index = 0;
    const interval = setInterval(() => {
        activateButton(gamePattern[index]);
        index++;
        if (index === gamePattern.length) {
            clearInterval(interval);
        }
    }, 600);
}

// Function to activate button flash
function activateButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 300);
}

// Start game event listener
startButton.addEventListener('click', () => {
    score = 0;
    gamePattern = [];
    userPattern = [];
    scoreDisplay.textContent = `Current Score: ${gameScore}`;
    startMessageDisplay.textContent = `${gameMessage}`;
    generatePattern();
});

// Button click event listener for user input
buttons.forEach(button => {
    button.addEventListener('click', () => {
        userPattern.push(button.id);
        activateButton(button.id);
        checkUserInput();
    });
});

// Function to check if the user's input matches the pattern
function checkUserInput() {
    const currentStep = userPattern.length - 1;
    if (userPattern[currentStep] === gamePattern[currentStep]) {
        // levelDisplay.textContent = gameLevel++;
        if (userPattern.length === gamePattern.length) {
            gameScore++;
            scoreDisplay.textContent = `Current Score: ${gameScore}`;
            userPattern = [];
            setTimeout(() => {
                startMessageDisplay.textContent = `${gameMessage}`;
                generatePattern();
            }, 1000);
        }
    }
    else
    {
        endMessageDisplay.textContent = `${gameOverMessage} Final Score: ${gameScore}`;
    }
}
