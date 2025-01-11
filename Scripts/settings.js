// Get elements
const speedRange = document.getElementById('game-speed');
const speedValue = document.getElementById('speed-value');
const saveButton = document.getElementById('save-settings');

if (window.location.pathname.endsWith('settings.html')) {
        // Load settings from localStorage
    document.addEventListener('DOMContentLoaded', () => {
        const savedSettings = JSON.parse(localStorage.getItem('gameSettings')) || {
            colorsPerTurn: 1,
            gameSpeed: 1,
        };

        speedRange.value = savedSettings.gameSpeed;

        speedValue.textContent = `${getSpeedMultiplier(savedSettings.gameSpeed)}x`;
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
            gameSpeed: parseInt(speedRange.value, 10),
        };
        saveBtn();

        localStorage.setItem('gameSettings', JSON.stringify(settings));
        alert('Settings Saved Successfully!');
    });

}



