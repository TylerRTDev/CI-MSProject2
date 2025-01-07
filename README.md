# Do You Remember

![Game Screenshot](assets/images/game-screenshot.png)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Game Logic Explanation](#game-logic-explanation)
   - [Overview](#gameplay-overview)
  - [Pattern Logic Functions](#pattern-logic-functions)
- [Local Storage](#local-storage)
  - [Overview](#overview)
  - [Local Storage Functions](#local-storage-functions)
- [Settings Integration](#settings-integration)
  - [Settings Functions](#settings-functions)
- [Leaderboard Functionality](#leaderboard-functionality)
  - [Leaderboard Functions](#leaderboard-functions)
  
- [Sound Integration](#sound-integration)
  - [Web Sound Functions](#web-sound-functions)
  - [Server Sound Functions](#server-sound-functions)
- [Testing Procedures](#testing-procedures)
- [Deployment Guide](#deployment-guide)
- [Version Control Practices](#version-control-practices)
- [UX Design & Accessibility Compliance](#ux-design--accessibility-compliance)
- [Future Enhancements](#future-enhancements)
- [Author and Contact Information](#author-and-contact-information)

---

## 📌 Project Overview

The **Do You Remember** game is an interactive web-based game designed to challenge and enhance users' memory skills. Players are presented with patterns of colored buttons that they must memorize and replicate correctly to progress. The game offers adjustable difficulty settings, customizable gameplay speed, and a leaderboard to track top scores.

---

## 🚀 Features

- **Dynamic Difficulty Levels:** Easy, Medium, and Hard modes for tailored gameplay.
- **Adjustable Game Speed:** Customize speed settings for enhanced difficulty.
- **Leaderboard System:** Tracks the top 5 players' high scores.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Persistent Settings:** Settings are saved locally for seamless user experience.

---

## 💻 Technologies Used

- **HTML5:** Structure and layout.
- **CSS3:** Styling and responsive design.
- **JavaScript (ES6+):** Game logic and interactivity.
- **LocalStorage:** Persistent data storage.
- **Git & GitHub:** Version control and hosting.

---

## ⚙️ Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/TylerRTDev/CI-MSProject2.git
   ```
2. **Navigate to the Project Folder:**
   ```bash
   cd CI-MSProject2
   ```
3. **Open the Game:**
   - Open `index.html` in your preferred browser.
   - Alternatively, use a local development server.

---

## 🧠 Game Logic Explanation

### **Gameplay Overview:**
- The game generates a random sequence of colored buttons.
- Players must memorize and replicate the sequence.
- Each correct pattern increases the score and advances the level.

### **Pattern Logic Functions**

#### **1. generatePattern**
```javascript
function generatePattern() {
    const randomIndex = Math.floor(Math.random() * buttons.length);
    gamePattern.push(buttons[randomIndex].dataset.id);
    playPattern();
}
```
- **Purpose:** Generates a random pattern by selecting a button ID from the grid and adds it to `gamePattern`.
- **Dependencies:** `buttons` (updated by `setDifficulty`), `playPattern`.
- **Previous Iteration:** Earlier versions used hardcoded button IDs and failed on difficulty changes.

### **Local Storage Functions**

#### **1. loadSettings**
```javascript
function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('gameSettings')) || { gameSpeed: 1 };
    if (speedSettings[savedSettings.gameSpeed]) {
        gameSpeed = savedSettings.gameSpeed;
    } else {
        gameSpeed = 1;
    }
}
```
- **Purpose:** Loads user-selected game settings (e.g., speed, difficulty) from `localStorage`.
- **Dependencies:** `speedSettings`.
- **Previous Iteration:** Didn’t validate invalid or missing `gameSpeed` settings.

# Do You Remember

![Game Screenshot](assets/images/game-screenshot.png)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Game Logic Explanation](#game-logic-explanation)
  - [Pattern Logic Functions](#pattern-logic-functions)
  - [Settings Functions](#settings-functions)
  - [Leaderboard Functions](#leaderboard-functions)


## 💾 Local Storage

### **Overview:**
Local Storage is used throughout the game to ensure settings and player progress persist across browser sessions. Key areas of usage include:
- **Game Settings:** Game speed and difficulty preferences are stored and retrieved.
- **Leaderboard:** Player high scores are saved and displayed.
- **Session Data:** Tracks the current game state if the page is refreshed.

### **Local Storage Functions**

#### **1. loadSettings**
```javascript
function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('gameSettings')) || { gameSpeed: 1 };
    if (speedSettings[savedSettings.gameSpeed]) {
        gameSpeed = savedSettings.gameSpeed;
    } else {
        gameSpeed = 1;
    }
}
```
- **Purpose:** Loads user-selected game settings (e.g., speed, difficulty) from `localStorage`.
- **Dependencies:** `speedSettings`.

#### **2. saveHighScores**
```javascript
function saveHighScores() {
    localStorage.setItem('leaderboard', JSON.stringify(highScores));
}
```
- **Purpose:** Saves the top 5 player scores to `localStorage`.
- **Dependencies:** `highScores`.

---

## 🔊 Sound Integration

### **Overview:**
Sound enhances interactivity in the game with effects on `onclick` and `mouseover` events. Sounds include button clicks, level progression, and game over alerts.

### **Web Sound Functions**
```javascript
function clickSound() {
    var audio = new Audio('Resources/Audio/btnClick.mp3');
    audio.play();
}
```
- **Purpose:** Plays a click sound when a button is pressed.

### **Server Sound Functions**
For server compatibility, relative paths are adjusted:
<details>
  <summary>Server Sound Function Example</summary>

```javascript
function clickSound() {
    var audio = new Audio('..\\Resources\\Audio\\btnClick.mp3');
    audio.play();
}
```
</details>

- **Purpose:** Adjusted paths ensure sounds play correctly in server environments.
- **Differences:** Paths use double backslashes (`..\\`) instead of single slashes.

## 🛠️ Settings Integration

Players can customize their gameplay experience via the **Settings Page:**

- **Game Speed:** Adjust playback speed (0.5x, 1x, 1.5x).
- **Difficulty Levels:** Predefined settings for Easy, Medium, and Hard modes.

All settings are stored in `localStorage`, ensuring they persist across sessions.

### **Settings Functions**

#### **1. getSpeedMultiplier**
```javascript
function getSpeedMultiplier(speed) {
    switch (parseInt(speed, 10)) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 4;
        default: return 1;
    }
}
```
- **Purpose:** Calculates the speed multiplier based on user-selected game speed.
- **Dependencies:** `speedRange`.
- **Previous Iteration:** Lacked proper validation for invalid inputs.


---

## 🏆 Leaderboard Functionality

### **How It Works:**
- At the end of each game, scores are evaluated.
- If the player's score qualifies for the Top 5, they are prompted to enter their name.
- Scores are ranked and stored in `localStorage`.

### **Key Features:**
- Only the highest scores are recorded.
- Duplicate entries are avoided.
- Players are notified if they beat a previous high score.

### **Leaderboard Functions**

#### **1. displayLeaderboard**
```javascript
function displayLeaderboard() {
    const leaderboardBody = document.getElementById("leaderboard-body");
    leaderboardBody.innerHTML = "";
    leaderboard.sort((a, b) => b.points - a.points);
    leaderboard.forEach((entry, index) => {
        const row = `<tr><td>${entry.name}</td><td>#${index + 1}</td><td>${entry.points}</td></tr>`;
        leaderboardBody.insertAdjacentHTML('beforeend', row);
    });
}
```
- **Purpose:** Displays the leaderboard data on the UI.
- **Dependencies:** `leaderboard`.

---

---

## 🧪 Testing Procedures

### **Manual Testing:**
- Verified game logic, pattern generation, and validation.
- Checked game settings and leaderboard functionality.
- Ensured responsive design on multiple devices.

### **Tools Used:**
- Browser Developer Tools
- Manual Playthroughs
- Console Debugging

---

## 🚀 Deployment Guide

The game is deployed using **GitHub Pages:**

1. **Push Changes:** Ensure all updates are pushed to the repository.
2. **Enable GitHub Pages:**
   - Go to repository settings.
   - Select `main` branch and `/root` directory in GitHub Pages.
3. **Access the Game:**
   - Visit: `https://tylerrtdev.github.io/CI-MSProject2/`

---

## 📂 Version Control Practices

- **Feature Branches:** Used for new features and bug fixes.
- **Frequent Commits:** Regular updates with clear commit messages.
- **Tags:** Significant versions tagged for clarity.

---

## 🎨 UX Design & Accessibility Compliance

- **Semantic HTML:** Enhances clarity and accessibility.
- **Responsive Design:** Optimized for mobile and desktop.
- **ARIA Labels:** Used for improved screen reader compatibility.
- **Color Contrast:** Meets WCAG standards.

---

## 🔮 Future Enhancements

- **Multiplayer Mode:** Real-time competition.
- **Additional Levels:** Custom difficulty settings.
- **Advanced Animations:** Smooth transitions and visual effects.

---

## 👤 Author and Contact Information

**Developed by:** Tyler Kerr  
**Email:** tylerrtdev@outlook.com  
**GitHub:** [https://github.com/TylerRTDev/CI-MSProject2](https://github.com/TylerRTDev)  

---

