// Leaderboard Data (Simulating stored scores initially)
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

function displayLeaderboard() {
    const leaderboardBody = document.getElementById("leaderboard-body");
    leaderboardBody.innerHTML = ""; // Clear existing rows

    // Sort by Points Descending
    leaderboard.sort(function (a, b) {
        return b.points - a.points;
    });

    // Populate Table
    leaderboard.forEach(function (entry, index) {
        const row = `<tr>
            <td>${entry.name}</td>
            <td>#${index + 1}</td>
            <td>${entry.points}</td>
        </tr>`;
        leaderboardBody.insertAdjacentHTML("beforeend", row);
    });
}

// Reset Button Functionality
document.getElementById("reset-scores").addEventListener("click", function () {
    localStorage.removeItem("leaderboard");
    saveBtn();
    setTimeout(function () {
        window.location.reload();
        alert("🔄 Leaderboard Reset!");
    }, 1000);
});

// Define saveBtn to prevent undeclared error
function saveBtn() {
    console.log("Save button functionality not implemented yet.");
}


// Initialize Leaderboard on Page Load
document.addEventListener("DOMContentLoaded", displayLeaderboard);

if (window.location.pathname.endsWith("leaderboards.html")) {
    document.addEventListener("DOMContentLoaded", displayLeaderboard);
}