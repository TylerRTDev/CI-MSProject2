// Get elements
const colorsRange = document.getElementById('colors-per-turn');
const colorsValue = document.getElementById('colors-value');
const speedRange = document.getElementById('game-speed');
const speedValue = document.getElementById('speed-value');
const saveButton = document.getElementById('save-settings');

// Load settings from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedColors = localStorage.getItem('colorsPerTurn') || 1;
    const savedSpeed = localStorage.getItem('gameSpeed') || 1;

    colorsRange.value = savedColors;
    speedRange.value = savedSpeed;

    colorsValue.textContent = savedColors;
    speedValue.textContent = `${getSpeedMultiplier(savedSpeed)}x`;
});

// Update displayed values on input change
colorsRange.addEventListener('input', () => {
    colorsValue.textContent = colorsRange.value;
});

speedRange.addEventListener('input', () => {
    speedValue.textContent = `${getSpeedMultiplier(speedRange.value)}x`;
});

// Function to calculate speed multiplier
function getSpeedMultiplier(speed) {
    switch (parseInt(speed)) {
        case 1: return 1; // Default speed
        case 2: return 2; // Double the default speed
        case 3: return 4; // Double the speed of level 2
    }
}

// Save settings to localStorage
saveButton.addEventListener('click', () => {
    localStorage.setItem('colorsPerTurn', colorsRange.value);
    localStorage.setItem('gameSpeed', speedRange.value);
    alert('Settings saved!');
});