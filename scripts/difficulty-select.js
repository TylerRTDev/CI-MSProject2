function changeDifficulty() {
    const difficulty = document.getElementById("difficulty-select").value;

    // Hide all button grids
    document.getElementById("grid-easy").style.display = "none";
    document.getElementById("grid-medium").style.display = "none";
    document.getElementById("grid-hard").style.display = "none";

    if (difficulty === "Easy") {
        document.getElementById("grid-easy").style.display = "grid";
    } else if (difficulty === "Medium") {
        document.getElementById("grid-medium").style.display = "grid";
    } else if (difficulty === "Hard") {
        document.getElementById("grid-hard").style.display = "grid";
    }

}



