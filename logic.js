// GIVEN I am taking a code quiz

// Import the questions array from questions.js
import { questions } from './questions.module.js';

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
const start = document.getElementById('start');
const timeEl = document.getElementById('time');
let duration = 60;
let remainingTime;
let intervalId;
let score = 0;

start.addEventListener('click', function () {
    timeEl.textContent = duration;
    remainingTime = duration;
    intervalId = setInterval(countDown, 1000);

    function countDown() {
        remainingTime--;
        timeEl.textContent = remainingTime;

        if (remainingTime === 0 || questions.length === 0) {
            clearInterval(intervalId);
            // Show the end screen and hide the question container
            var endScreen = document.getElementById('end-screen');
            var questionContainer = document.getElementById('question-container');
            endScreen.style.display = 'block';
            questionContainer.style.display = 'none';
            var finalScore = document.getElementById('final-score');
            finalScore.textContent = score;

        }
    }

    var startScreen = document.getElementById('start-screen');
    var questionContainer = document.getElementById('question-container');
    startScreen.style.display = 'none';
    questionContainer.style.display = 'block';

    // Display the first question
    randomQuestion();
});


function randomQuestion() {
    if (questions.length === 0) {
        // All questions have been displayed
        // Handle end of quiz - add code...
        return;
    }

    var randomIndex = Math.floor(Math.random() * questions.length);
    var selectedQuestion = questions[randomIndex];
    questions.splice(randomIndex, 1);

    var question = selectedQuestion.question;
    var choices = selectedQuestion.choices;
    var correctAnswer = selectedQuestion.answer;

    var questionTitle = document.getElementById('question-title');
    questionTitle.textContent = question;

    var answerChoices = document.getElementById('choices');
    answerChoices.innerHTML = '';

    var resultMessage = document.getElementById('result-message');
    resultMessage.style.display = 'block';

    choices.forEach(function (choice) {
        var choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        answerChoices.appendChild(choiceButton);

        choiceButton.addEventListener('click', function () {
            if (choice === correctAnswer) {
                choiceButton.classList.add('correct');
                resultMessage.textContent = 'Correct!';
            } else {
                choiceButton.classList.add('wrong');
                resultMessage.textContent = 'Wrong!';
                remainingTime -= 10;
            }
            if (questions.length === 0) {
                // All questions have been displayed
                // Handle end of quiz - add code...
                return;
                
            }
            randomQuestion();
        });

        function checkAnswer(choice, correctAnswer) {
            if (choice === correctAnswer) {
                score++; // Increment the score for correct answer
                return true;
            }
            return false;
            // display the final score
        }
        
        
        
        
        
        
    });
    
    
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

if (remainingTime === 0 || questions.length === 0) {
    clearInterval(intervalId);
    // Show the end screen and hide the question container
    var endScreen = document.getElementById('end-screen');
    var questionContainer = document.getElementById('question-container');
    endScreen.style.display = 'block';
    questionContainer.style.display = 'none';
    // Handle end of quiz - add code...

}



// WHEN the game is over
// THEN I can save my initials and score