function changeDifficulty() {
    const difficulty = document.getElementById('difficulty-select').value;
    const multiplier = document.getElementById('multiplier');
    
    // Set the multiplier based on the selected difficulty
    if (difficulty === "Easy") {
        multiplier.innerText = " 1x";
    } else if (difficulty === "Medium") {
        multiplier.innerText = " 2x";
    } else if (difficulty === "Hard") {
        multiplier.innerText = " 4x";
    }

    // Optionally, handle any other game logic here (e.g., reloading the game or adjusting grid)
    console.log("Selected Difficulty:", difficulty);
}