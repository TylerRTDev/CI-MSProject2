# Memory Game: Pattern Matching Challenge

### Link to the Game: 
[Insert Link Here Once Deployed]

### Overview

The Memory Game is a simple yet challenging single-player web-based pattern-matching game inspired by classic games like *Simon* and *Bop It*. The goal of the game is for the player to repeat an increasingly complex sequence of visual patterns. The game starts with a simple pattern, and as the player successfully matches the pattern, the length and complexity of the pattern increase, testing the player’s memory.

### Purpose

The primary purpose of this project is to:
- Challenge users' memory and focus through an engaging and interactive pattern-matching game.
- Offer an intuitive and fun game experience where the player can attempt to beat their previous score.
- Enhance web development skills by incorporating dynamic functionality with JavaScript, HTML, and CSS.

### Value to Users

This game provides significant value to users by:
- Offering an enjoyable way to improve memory and cognitive skills through a progressively difficult challenge.
- Giving players real-time feedback on their progress, allowing them to track how well they are doing.
- Allowing users to reset and replay the game to try and achieve higher scores each time.

### How to Play

1. Press the "Start Game" button to begin the game.
2. Watch the sequence of buttons (each button corresponds to a different color) light up.
3. When the pattern finishes, repeat the sequence by clicking the buttons in the same order.
4. If you input the correct sequence, the pattern will grow by one step, and you must repeat the longer pattern.
5. If you input the wrong sequence, the game ends, and you will see your score (how many rounds you completed).
6. Try to beat your previous score by improving your memory and pattern recognition skills!

### Game Features

- **Dynamic Pattern Generation**: Each game starts with a simple pattern, but as players succeed, the pattern length increases.
- **User Interaction**: Players interact by clicking the correct sequence of buttons based on the pattern they observed.
- **Feedback System**: Immediate visual feedback is given after every button press, showing whether the player was correct or not. If incorrect, the game ends and displays the player's score.
- **Score Tracking**: The game keeps track of how many patterns the player successfully repeats, acting as the game score.
- **Responsive Design**: The game layout is designed to be responsive and playable on both desktop and mobile devices.

### Value to Site Owner

- The site owner can monitor the popularity of the game and see how well users engage with it.
- The owner can also use the game themselves to improve memory skills or to demonstrate interactive web development to potential clients or employers.
- As the game requires no backend, it is easy to deploy and maintain, and can be updated with new features (e.g., different themes, sounds, or difficulty levels) based on user feedback.

### Deployment Procedure

#### 1. Obtain the Project Files:

You can obtain the project files either by cloning the repository or downloading them directly from GitHub.

##### **Option A: Clone the Repository:**
1. **Open a terminal** on your local machine.
2. **Run the following command** to clone the repository:

```bash
git clone https://github.com/TylerRTDev/CI-MSProject2.git
cd CI-MSProject2
```
#### Option B: Download as ZIP
1. Visit the repository's GitHub page and click on the **"Code"** button.
2. Choose **"Download ZIP"** to download the entire project.
3. Extract the ZIP file on your computer and open the folder.

### ⚙️ Set Up a Local Web Server (Optional):
You can run the game on a local server for testing purposes. Simply use a built-in Python server:

```bash
python3 -m http.server 3000
```

Access the game in your browser at: [http://127.0.0.1:3000/](http://127.0.0.1:3000/).

### 🌐 View the Game in Your Browser:
Open the `index.html` file directly in your preferred web browser, or use the local server method mentioned above.

## 🏗️ Project Structure

The project is organized as follows:

```plaintext
memory-game/
│
├── css/
│   └── styles.css       # Contains all the styles for the game
│
├── js/
│   └── script.js        # Contains the JavaScript game logic
│
├── index.html           # Main HTML file containing the game layout
│
└── README.md            # You're reading it! 😄
```

## 🧠 Information Architecture

The game consists of a single HTML page with a simple, structured layout:

- **Main Game Area**: The color buttons that light up in sequence.
- **Control Section**: Includes the "Start Game" button, score display, and feedback messages.

💡 The game uses **CSS Grid** and **Flexbox** to ensure it’s responsive and adapts to different screen sizes.

## 🔧 Future Enhancements

Here are some ideas for future improvements to make the game even more exciting! 🎉

- 🔊 **Sound Effects**: Add auditory feedback for each button click.
- 🎨 **Themes**: Allow players to select different visual themes.
- 🏆 **High Score Tracking**: Use local storage to track the highest score across sessions.
- ⚙️ **Difficulty Settings**: Include levels of difficulty (e.g., faster patterns, more colors).
- 🏅 **Leaderboard**: Add a leaderboard for users to compare scores.

## 🎨 Attribution

This project was created by [Your Name]! It’s built with custom **JavaScript**, **HTML**, and **CSS**.

### External Resources & Inspirations:
- [MDN Web Docs](https://developer.mozilla.org/) – For all things web development!
- [CSS-Tricks](https://css-tricks.com/) – Great tips for responsive layouts.
- [Simon Game - Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)) – Inspiration for the game mechanics.

Feel free to contribute or suggest ideas! 😊

---

With the added fun elements, this README should engage your audience while giving them all the details they need!