// Get elements
const colorsRange = document.getElementById('colors-per-turn');
const colorsValue = document.getElementById('colors-value');
const speedRange = document.getElementById('game-speed');
const speedValue = document.getElementById('speed-value');
const saveButton = document.getElementById('save-settings');

// Load settings from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedSettings = JSON.parse(localStorage.getItem('gameSettings')) || {
        colorsPerTurn: 1,
        gameSpeed: 1,
    };

    colorsRange.value = savedSettings.colorsPerTurn;
    speedRange.value = savedSettings.gameSpeed;

    colorsValue.textContent = savedSettings.colorsPerTurn;
    speedValue.textContent = `${getSpeedMultiplier(savedSettings.gameSpeed)}x`;
});

// Update displayed values on slider input
colorsRange.addEventListener('input', () => {
    colorsValue.textContent = colorsRange.value;
});

speedRange.addEventListener('input', () => {
    speedValue.textContent = `${getSpeedMultiplier(speedRange.value)}x`;
});

// Calculate speed multiplier
function getSpeedMultiplier(speed) {
    switch (parseInt(speed, 10)) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 4;
        default: return 1;
    }
}

// Save settings to localStorage
saveButton.addEventListener('click', () => {
    const settings = {
        colorsPerTurn: parseInt(colorsRange.value, 10),
        gameSpeed: parseInt(speedRange.value, 10),
    };

    localStorage.setItem('gameSettings', JSON.stringify(settings));
    alert('Settings Saved Successfully!');
});
