const buttons = document.querySelectorAll('.pattern-button');
const startButton = document.getElementById('start-game');
const messageDisplay = document.getElementById('message');
const scoreDisplay = document.getElementById('score');

let gamePattern = [];
let userPattern = [];
let gameMode = []; 
let gameScore = 0;
let gameLevel = 1;
let startMessage = 'Press Start To Begin'
let gameMessage = 'Watch The Pattern Closely!'
let gameOverMessage = `Game Over! You Guesses Wrong.\n Final Score: ${gameScore}\n Press Start To Try Again.`
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
    messageDisplay.textContent = `${gameMessage}`;
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
        if (userPattern.length === gamePattern.length) {
            score++;
            scoreDisplay.textContent = `Current Score: ${score}`;
            userPattern = [];
            setTimeout(() => {
                messageDisplay.textContent = `${gameMessage}`;
                generatePattern();
            }, 1000);
        }
    } else {
        messageDisplay.textContent = `${gameOverMessage}`;
    }
}
