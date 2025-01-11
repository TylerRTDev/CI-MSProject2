// Function to get URL query parameters
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Set difficulty from URL on page load
document.addEventListener('DOMContentLoaded', () => {
    const selectedDifficulty = getQueryParameter('difficulty');
    if (selectedDifficulty) {
        difficultySelect.value = selectedDifficulty; // Set dropdown to selected difficulty
        setDifficulty(); // Apply the selected difficulty
        console.log(`Difficulty set from URL: ${selectedDifficulty}`);
    }
});

