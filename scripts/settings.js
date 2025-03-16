// Get elements
const speedRange = document.getElementById("game-speed");
const speedValue = document.getElementById("speed-value");
const saveButton = document.getElementById("save-settings");

// Calculate speed multiplier (Moved outside the condition)
function getSpeedMultiplier(speed) {
    switch (parseInt(speed, 10)) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 4;
        default: return 1;
    }
}

if (window.location.pathname.endsWith("settings.html")) {
    // Load settings from localStorage
    document.addEventListener("DOMContentLoaded", function () {
        const savedSettings = JSON.parse(localStorage.getItem("gameSettings")) || {
            colorsPerTurn: 1,
            gameSpeed: 1
        };

        speedRange.value = savedSettings.gameSpeed;
        speedValue.textContent = `${getSpeedMultiplier(savedSettings.gameSpeed)}x`;
    });

    speedRange.addEventListener("input", function () {
        speedValue.textContent = `${getSpeedMultiplier(speedRange.value)}x`;
    });

    // Save settings to localStorage
    saveButton.addEventListener("click", function () {
        const settings = {
            gameSpeed: parseInt(speedRange.value, 10)
        };

        saveBtn(); // Assuming saveBtn() is defined elsewhere

        localStorage.setItem("gameSettings", JSON.stringify(settings));
        alert("Settings Saved Successfully!");
    });
}