// GIVEN I am taking a code quiz

// Import the questions array from questions.js
import { questions } from './questions.module.js';

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
const start = document.getElementById('start');
const timeEl = document.getElementById('time');
let duration = 120;
let intervalId;

start.addEventListener('click', function () {
    // Start the timer
    timeEl.textContent = duration;
    intervalId = setInterval(countDown, 1000);

    function countDown() {
        duration--;
        timeEl.textContent = duration;

        if (duration === 0) {
            // Stop the countdown
            clearInterval(intervalId);
            // GAME OVER - add code...
        }
    }

    // Hide the start screen
    var startScreen = document.getElementById('start-screen');
    var questionContainer = document.getElementById('question-container');
    startScreen.style.display = 'none';

    // Show the question container
    questionContainer.style.display = 'block';

    // Display the first question
    randomQuestion();
});

function randomQuestion() {
    // Select a random question from the questions array
    var randomIndex = Math.floor(Math.random() * questions.length);
    var question = questions[randomIndex].question;
    var choices = questions[randomIndex].choices;

    // Display the question
    var questionTitle = document.getElementById('question-title');
    questionTitle.textContent = question;

    // Display the choices
    var answerChoices = document.getElementById('choices');
    answerChoices.innerHTML = '';

    choices.forEach(function (choice) {
        var choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        answerChoices.appendChild(choiceButton);

        // Add event listener to each choice button
        choiceButton.addEventListener('click', function () {
            randomQuestion();
        });
    });
}

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over



// WHEN the game is over
// THEN I can save my initials and score