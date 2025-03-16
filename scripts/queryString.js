// Function to get URL query parameters
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Set difficulty from URL on page load
document.addEventListener("DOMContentLoaded", function () {
    const selectedDifficulty = getQueryParameter("difficulty");

    if (selectedDifficulty) {
        const difficultySelect = document.getElementById("difficulty-dropdown");
        if (difficultySelect) {
            difficultySelect.value = selectedDifficulty;
            setDifficulty(); // Apply the selected difficulty
            console.log(`Difficulty set from URL: ${selectedDifficulty}`);
        } else {
            console.warn("Difficulty dropdown not found.");
        }
    }
});

