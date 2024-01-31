# SyntaxElite Game

SyntaxElite is a simple browser-based game where players click on bubbles containing random numbers to increase their score. The game also includes a timer, and players must click the correct bubble corresponding to the displayed target number to gain points.

## Table of Contents
- [Game Overview](#game-overview)
- [How to Play](#how-to-play)
- [Code Explanation](#code-explanation)
- [Usage](#usage)
- [License](#license)

## Game Overview

In SyntaxElite, players have to click on bubbles that appear at the bottom of the screen. Each bubble contains a random number. The game has a timer that starts at 59 seconds, and players must score as many points as possible within the given time.

## How to Play

1. **Click on Bubbles:** Click on the bubbles at the bottom of the screen to score points.
2. **Hit the Target:** The target number is displayed at the top. Click on the bubble with the same number to increase your score.
3. **Watch the Timer:** The game has a timer set to 59 seconds. Try to score as much as you can before the timer reaches zero.
4. **Game Over:** The game ends when the timer reaches zero. Your final score is displayed.

## Code Explanation

The game is implemented using HTML, CSS, and JavaScript. Here's an overview of the key functions:

- `increaseScore():` Increases the player's score by 5 points.
- `decreaseScore():` Decreases the player's score by 5 points, with a minimum score of 0.
- `getNewHit():` Generates a random number between 0 and 9 as the target number to hit.
- `makeBubble():` Creates 114 bubbles with random numbers and displays them at the bottom of the screen.
- `runTimer():` Implements a timer that counts down from 59 seconds. The game ends when the timer reaches zero.
- Event listener on the bubble container (`#pbtm`): Detects clicks on bubbles, checks if the clicked number matches the target, and updates the score accordingly.

## Usage

1. Clone the repository or download the code.
2. Open the `index.html` file in a web browser.
3. Play the game by clicking on bubbles and aiming for the target number within the given time.

Feel free to customize the game, add more features, or improve the design based on your preferences.
