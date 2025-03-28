## 🧪 Testing

Testing for the "Do You Remember" game focused primarily on manual testing to ensure robust game logic and an optimal user experience, with automated testing considered only for core logic functions. The following sections outline the various testing procedures used throughout development.

### Overview
Manual testing (user testing) was conducted by interacting with the game—clicking buttons, entering sequence lengths, and verifying real-time feedback—to ensure that the game logic, responsiveness, and UI elements work as intended. Although automated testing using frameworks such as Jest was explored for core functions (e.g. `generatePattern`, `resetGame`, `checkUserInput`), it was not fully implemented so that more development time could be dedicated to refining the game experience.

### Table Of Contents
1. [HTML Validation](#html-validation)
2. [CSS Validation](#css-validation)
3. [JavaScript Validation](#javascript-validation)
4. [Accessibility](#-accessibility)
   - [Landing Page](#landing-page-accessibility)
   - [404 Page](#404-page-accessibility)
5. [Performance](#performance)
6. [Browser Compatibility](#browser-compatibility)
7. [Testing User Stories](#testing-user-stories)
8. [Manual Testing](#manual-testing)
   - [General UI and Navigation](#general-ui-and-navigation)
   - [Game Logic and Interaction](#game-logic-and-interaction)
   - [Game Difficulty and Score Multiplier](#game-difficulty-and-score-multiplier)
   - [Leaderboard Functionality](#leaderboard-functionality)
9. [Automated Testing (Optional)](#automated-testing)
10. [Project Documentation](README.md)

---

### HTML Validation
HTML was validated using the [W3C HTML Validation Service](https://validator.w3.org/). Both the main game page and any auxiliary error pages passed validation with no critical errors or warnings.

<details>
  <summary>HTML Validation</summary>

![HTML Validation](/resources/html-check-validation.png)
</details>

### CSS Validation
CSS validation was performed via the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). Minor vendor-specific warnings were reviewed and determined to be acceptable for ensuring cross-browser compatibility and meeting design requirements.

<details>
  <summary>CSS Validation</summary>

![CSS Validation](/resources/css-check-validation.png)
</details>

### JavaScript Validation
The JavaScript code was tested using [JSLint](https://www.jslint.com/) to identify potential issues and enforce best practices. The validation process flagged several stylistic warnings, including preferences for var over let, enforcing alphabetical property order, and restricting line lengths. However, these warnings were primarily cosmetic and did not impact functionality, readability, or performance. Additionally, .toFixed(2) was incorrectly flagged as an unexpected expression despite its valid use in rounding calculations. After reviewing these warnings, only those that provided meaningful improvements to the code were implemented, while unnecessary stylistic suggestions were intentionally ignored. This ensured that the core game functions—such as pattern generation, user input verification, and score tracking—worked as expected without introducing unnecessary modifications.

<details>
  <summary>difficulty-select.js JSLint Results</summary>

![Difficulty Warnings](/resources/difficulty-select.png)
</details>

JSLint returned no issues, confirming that the JavaScript code meets its validation standards.

<details>
  <summary>gameSound.js JSLint Results</summary>

![Sound Warnings](/resources/gameSound.png)
![Sound Options](/resources/gameSound-options.png)
</details>

JSLint returned no issues, confirming that the JavaScript code meets its validation standards.

<details>
  <summary>leaderboard.js JSLint Results</summary>

![leaderboard Warnings](/resources/leaderboard.png)
![leaderboard Options](/resources/leaderboard-options.png)
</details>

JSLint returned no issues, confirming that the JavaScript code meets its validation standards.

<details>
  <summary>queryString.js JSLint Results</summary>

![Query Warning](/resources/queryString.png)
![Query Warning](/resources/quertyString-options.png)

</details>

The linter provided several stylistic warnings that do not affect the functionality, readability, or performance of the code. First, it enforced the use of var instead of let, despite let being the modern best practice due to its block-scoped behavior, which prevents unintended modifications. 

- *The linter flagged an unexpected issue with .toFixed(2), despite it being a valid method for rounding numbers to two decimal places. Since this does not affect execution, and modern JavaScript engines handle it correctly, this warning has been intentionally ignored, as it does not indicate a real issue.*

<details>
  <summary>script.js JSLint Results</summary>

![Script Warning](/resources/script.png)
![Script Options](/resources/settings-options.png)

</details>

The linter flagged warnings for lines exceeding 80 characters, but these do not impact functionality or readability in a meaningful way. Breaking long lines is primarily a stylistic preference and is not required by JavaScript for correct execution. In this case, the flagged lines involve JSON parsing and template literals, both of which remain clear and easy to understand in their current form. Splitting them would introduce unnecessary line breaks, making the code less readable rather than improving clarity. Given that modern editors handle long lines well with automatic wrapping, these warnings have been intentionally ignored, as they do not provide any functional benefit.

<details>
  <summary>settings.js JSLint Results</summary>

![Settings Warning](/resources/settings.png)
![Settings Warning](/resources/settings-options.png)
</details>

JSLint returned no issues, confirming that the JavaScript code meets its validation standards.

<details>
  <summary>redirect.js JSLint Results</summary>

![Redirect Warning](/resources/redirect.png)
</details>

JSLint returned no issues, confirming that the JavaScript code meets its validation standards.

### ♿ Accessibility

Accessibility was considered throughout the development of the **Do You Remember...?** project. Both the **Landing page** and the **404 page** were tested manually and evaluated using the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/).

#### **Landing Page Accessibility**

| Feature                  | Result                                                                 |
|--------------------------|------------------------------------------------------------------------|
| **Keyboard Navigation**  | All interactive elements (buttons, settings, modals) are accessible using keyboard navigation (Tab, Enter). |
| **Semantic HTML**        | Proper use of HTML structure such as `<header>`, `<main>`, and `<footer>`. |
| **Alt Text**             | Visual elements include appropriate or intentionally omitted `alt` attributes based on context. |
| **Color Contrast**       | Buttons and text maintain good contrast ratios for readability.        |
| **Focus Management**     | Modals trap focus and allow smooth keyboard interaction when active.   |

**WAVE Summary (Landing Page):**  
No major accessibility issues were found. Minor alerts such as redundant link references (logo linking to homepage in both header and footer) were noted but do not interfere with usability.

<details>
  <summary>Accessibility Results: Homepage</summary>

![Accessibility Landing Page](/resources/accessibility-game.png)

- *The 9 contrast errors reported here are most likely caused by design-specific hover effects that temporarily reduce color contrast between text and background when users interact with buttons or icons.*

</details>



#### **404 Page Accessibility**

| Feature                        | Result                                                                |
|--------------------------------|-----------------------------------------------------------------------|
| **Clear Messaging**            | “404” is visually prominent, and accompanying text clearly describes the error. |
| **Navigation Recovery**        | Page resets back to a valid URL which is the landing page.  |
| **Color Contrast & Typography**| Text is easy to read with sufficient contrast and spacing.            |

**WAVE Summary (404 Page):**  
Minor alerts appeared due to repetitive links, but no critical issues were found. The page remains fully navigable and accessible to users.

<details>
  <summary>Accessibility Results: 404</summary>

![Accessibility Results: 404](/resources/accessibility-404.png)
</details>

---

### Performance
Performance was measured using [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools. The game scored well across performance metrics, including load time and accessibility. Tests on a variety of devices (laptops, tablets, and mobile devices) confirmed that the game remains responsive and visually consistent.

### Browser Compatibility
The game was tested on multiple browsers, including:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

![Lighthouse Test](/resources/lighthouse-performance.png)


All major features—from game logic and sound integration to responsive layout—functioned consistently across these browsers.

### Responsiveness Testing
The game's layout and elements were tested across various devices to ensure proper responsiveness and usability on different screen sizes. The design adapts fluidly to desktop, tablet, and mobile views to offer a consistent and accessible experience.

| Device Type | Screen Sizes Tested | UI Layout & Scaling | Interactions | Modal Behavior | Scroll/Overflow | Audio & Visual Feedback | Result |
|-------------|----------------------|----------------------|--------------|----------------|------------------|--------------------------|--------|
| **Desktop** | 1920x1080, 1440x900 | Full horizontal layout with centered game area and balanced spacing | Mouse clicks and hover effects are responsive | Modals appear centered and overlay the screen cleanly | No overflow; fits within viewport | Hover animations and sound effects trigger instantly | ✅ Pass |
| **Tablet** | 768x1024 (portrait), 1024x768 (landscape) | Layout adjusts slightly to fit tighter width; elements still readable | Touch input is smooth; buttons responsive | Modals scale well and remain centered | Slight scroll within modal content (expected) | Button sound and visuals remain intact | ✅ Pass |
| **Mobile** | 375x667, 414x896, 360x640 | Single-column stacking; buttons fill width and are finger-friendly | Tap targets behave well; smooth response time | Full-width modals appear vertically centered and easily dismissible | Main game area scrolls as needed; no broken layout | Feedback sounds and animations function consistently | ✅ Pass |

**Result:** The game is fully responsive and performs as intended on desktop, tablet, and mobile devices, ensuring accessibility and playability across platforms.** The game is fully responsive and performs as intended on desktop, tablet, and mobile devices, ensuring accessibility and playability across platforms.** The game is fully responsive and performs as intended on desktop, tablet, and mobile devices, ensuring accessibility and playability across platforms.

### Testing User Stories
User stories guided testing to ensure the game meets user expectations:
- **First-Time Visitor:** Clear instructions are provided via the "How to Play" modal.
- **Returning Visitor:** Quick game restarts and persistent high scores are confirmed.
- **Competitive Player:** The leaderboard accurately records and displays high scores.
- **General User:** Real-time feedback (both visual and audio) confirms correct or incorrect guesses.

### Manual Testing

Manual testing involves a human tester executing test cases by interacting directly with the application. It is useful for evaluating user experience, layout behavior, and real-time interactions. In this project, manual testing was used extensively to verify gameplay logic, validate UI responsiveness across devices, test score tracking, settings persistence, and ensure all modals, buttons functioned as expected in a real-world usage scenario.

#### General UI and Navigation
| Feature            | Action                                          | Expected Result                                                                | Status  | Comments          |
|--------------------|-------------------------------------------------|--------------------------------------------------------------------------------|---------|-------------------|
| Navigation Bar     | Resize window to below 767px                    | Logo resizes and stacks above navigation icons with appropriate alignment      | Passed  | N/A               |
| Site Logo          | Click on the site logo                          | Page refreshes to the game landing screen                                      | Passed  | N/A               |
| How-to-Play Icon   | Hover then click                                | Icon hover effect occurs; "How to Play" modal appears with clear game instructions | Passed  | N/A               |

#### Game Logic and Interaction
| Feature                  | Action                                                    | Expected Result                                                                                                       | Status  | Comments                            |
|--------------------------|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|---------|-------------------------------------|
| Play Now (Start Game)    | Enter a valid sequence length and click "Start Game"        | The game generates a random pattern, displays the sequence length, and hides the play button and selector             | Passed  | N/A                                 |
| User Input (Correct)     | Replicate the generated pattern correctly                 | Score increases, level advances, and a new pattern is generated                                                       | Passed  | N/A                                 |
| User Input (Incorrect)   | Input an incorrect sequence                               | Game over modal appears with final score; game resets after a brief delay                                             | Passed  | N/A                                 |
| Reset Functionality      | Click "Start Game" at various game stages                        | Game area resets, score and level revert to initial state, and UI elements reappear                                    | Passed  | N/A                                 |

#### Leaderboard Functionality
The leaderboard records the **top 5 scores** only. When a player achieves a high score, they are prompted to enter their name, which will be displayed on the leaderboard alongside their score and ranking. Players also have the ability to reset the leaderboard, removing all stored scores and names.

| Feature                     | Action                                     | Expected Result                                              | Status  | Comments |
|-----------------------------|--------------------------------------------|--------------------------------------------------------------|---------|----------|
| High Score Entry            | Complete a game with a high score          | Prompt appears for name entry if score qualifies for top 5  | Passed  | N/A      |
| Player Score Entry                 | Complete a game with a score under top 5   | Prompt appears for score                                     | Passed  | N/A      |
| Leaderboard Display         | View the leaderboard                       | Displays top 5 scores sorted in descending order             | Passed  | N/A      |
| Name and Score Visibility   | Enter a name with a high score             | Name and score appear correctly on the leaderboard           | Passed  | N/A      |
| Leaderboard Reset           | Click the reset leaderboard button         | All names and scores are cleared from the leaderboard       | Passed  | N/A      |

#### Game Difficulty and Score Multiplier
The game's difficulty setting directly impacts the score multiplier. The difficulty levels (Easy, Medium, and Hard) adjust the pattern complexity and speed of the game. Additionally, the game speed setting, which can be adjusted in the settings menu, further modifies the score multiplier.

| Feature                | Action                              | Expected Result                                      | Status  | Comments |
|------------------------|------------------------------------|------------------------------------------------------|---------|----------|
| Adjust Game Difficulty | Select different difficulty levels | Score multiplier increases with higher difficulties | Passed  | N/A      |
| Change Game Speed      | Adjust game speed in settings      | Score is calculated based on speed multiplier       | Passed  | N/A      |

### Automated Testing
While the bulk of testing was manual, automated testing was considered for future enhancements. Core game logic functions (e.g., `generatePattern`, `resetGame`, `checkUserInput`) are candidates for unit tests using frameworks such as Jest.

Automated testing involves writing scripts or using tools to execute test cases without human intervention. It allows for repetitive, consistent, and fast validation of the software’s functionality, making it ideal for catching regressions (bugs introduced after changes).

#### When to Use Automated Testing in Do You Rememeber?:

Testing Core Game Logic: 

- Write unit tests (e.g., using Jest for JavaScript) to validate core game functions such as:
  - Generating random sequences correctly.
  - Storing and retrieving scores from localStorage.
  - Verifying if the user’s input matches the generated sequence.
- Performance Testing: Automated tools can check how the game handles different difficulty levels and speed settings.
- Regression Testing: If you update the game (e.g., changing difficulty settings), automated tests ensure existing features still work as expected.

---

This hybrid testing section confirms that the "Do You Remember" game has undergone rigorous validation, ensuring a robust and enjoyable game experience.
