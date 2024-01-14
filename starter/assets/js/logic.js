// GIVEN I am taking a code quiz


// WHEN I click the start button
// THEN a timer starts and I am presented with a question
const start = document.getElementById('start');
const timeEl = document.getElementById('time');
let duration = 120;
let intervalId;

start.addEventListener('click', function() {
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

  // Display the first question
  randomQuestion();
});

function randomQuestion() {
  // Select a random question from the questions array
  var randomIndex = Math.floor(Math.random() * questions.length);
  var question = questions[randomIndex].question;
  var choices = questions[randomIndex].choices;

  // Display the question and choices
  var questionTitle = document.getElementById('question-title');
  var answerChoices = document.getElementById('choices');

  questionTitle.textContent = question;
  answerChoices.textContent = choices.join(', ');
}



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over



// WHEN the game is over
// THEN I can save my initials and score