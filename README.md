# Do You Remember

Project: https://tylerrtdev.github.io/CI-MSProject2/

![Game Screenshot](assets/images/game-screenshot.png)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Game Logic Explanation](#game-logic-explanation)
- [Settings Integration](#settings-integration)
- [Leaderboard Functionality](#leaderboard-functionality)
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

### **Key Functions:**
1. **generatePattern:** Creates a random pattern.
2. **playPattern:** Displays the pattern sequentially.
3. **checkUserInput:** Validates the player's input against the generated pattern.
4. **resetGame:** Resets all game parameters.

---

## 🛠️ Settings Integration

Players can customize their gameplay experience via the **Settings Page:**

- **Game Speed:** Adjust playback speed (0.5x, 1x, 1.5x).
- **Difficulty Levels:** Predefined settings for Easy, Medium, and Hard modes.

All settings are stored in `localStorage`, ensuring they persist across sessions.

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


*This project was developed as part of the Level 5 Diploma in Web Application Development.*

