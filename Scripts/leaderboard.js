let playerName;
let playerScore; 

// Leaderboard Data (Simulating stored scores initially)
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [
    // { name: {playerName}, points: {playerScore} },
    // { name: {playerName}, points: {playerScore} },
    // { name: {playerName}, points: {playerScore} },
    // { name: {playerName}, points: {playerScore} },
    // { name: {playerName}, points: {playerScore} }
];

// Function to Display Leaderboard Data
function displayLeaderboard() {
    const leaderboardBody = document.getElementById("leaderboard-body");
    leaderboardBody.innerHTML = ""; // Clear existing rows

    // Sort by Points Descending
    leaderboard.sort((a, b) => b.points - a.points);

    // Populate Table
    leaderboard.forEach((entry, index) => {
        const row = `<tr>
            <td>${entry.name}</td>
            <td>#${index + 1}</td>
            <td>${entry.points}</td>
        </tr>`;
        leaderboardBody.insertAdjacentHTML('beforeend', row);
    });

    // Save Updated Leaderboard to Local Storage
    // localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Reset Button Functionality
document.getElementById("reset-scores").addEventListener("click", () => {
    localStorage.removeItem('leaderboard');
    window.location.reload();
});

// Initialize Leaderboard on Page Load
document.addEventListener('DOMContentLoaded', displayLeaderboard);