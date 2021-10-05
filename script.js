console.log(document.body.children);

const questionsArray = [
  {
    questions: "question 1",
    answers: ["Q1Answer1", "Q1Answer2", "Q1Answer3", "Q1Answer4"],
    correctAnswer: "Q1Answer1",
  },
  {
    questions: "question 2",
    answers: ["Q2Answer1", "Q2Answer2", "Q2Answer3", "Q2Answer4"],
    correctAnswer: "Q2Answer2",
  },
  {
    questions: "question 3",
    answers: ["Q3Answer1", "Q3Answer2", "Q3Answer3", "Q3Answer4"],
    correctAnswer: "Q3Answer3",
  },
  {
    questions: "question 4",
    answers: ["Q4Answer1", "Q4Answer2", "Q4Answer3", "Q4Answer4"],
    correctAnswer: "Q4Answer4",
  },
  {
    questions: "question 5",
    answers: ["Q5Answer1", "Q5Answer2", "Q5Answer3", "Q5Answer4"],
    correctAnswer: "Q5Answer1",
  },
];

const currentQuestion = 0;

const startQuiz = function () {
  // clicking start button - start-container ID should
  // - remove the container div
  const startContainer = document.getElementById("start-container");
  startContainer.remove();
  console.log("it works");
};

// - start timer
// - render question

const renderQuestion = function () {};
// when answer is clicked
// -check if it is the correct answer
// -remove question-container
// -render new question

const renderAnswers = function () {};
// take in list of answers
// loop through and create buttons
// append to div
// ADD CLICK EVENT HANDLER

const questionsDiv = document.getElementById("questions-container");

const verifyAnswer = function (event) {
  const currentTarget = event.currentTarget;
  const target = event.target;
  if (target.getAttribute("class") === "myButton") {
    const dataMsg = target.getAttribute("data-message");
    const dataMain = currentTarget.getAttribute("data-main");
    if (dataMain === dataMsg) {
      console.log("correct answer");
    } else {
      console.log("incorrect");
    }
  }
};
questionsDiv.addEventListener("click", verifyAnswer);
// get data-attribute="answer" from buttons
// get question answer from questionsObject
// compare the two
// if != deduct 5 seconds
// then render next question - if index is <= questions.length i++ o if not renderScore()
// prep event- event bubbling

const renderScore = function () {};
// remove last question to render score div
// build score container
// append to main
// ADD EVENT LISTENERS TO FORM

const registerScore = function () {};
// take the value from INPUT-
// submit event and register value in local storage
// get remaining time
// construct{initials: "sb", score: 22}
// store object in local storage

const renderHighScore = function () {};
// get high scores from local storage
// parse data "string" -> [array]
// loop over high scores- for each i++ build a div with initial and scores
// append
// append to parent

const clearLocalStorage = function () {};

const timer = function () {};
// if timer reaches 0 render gameOver

const gameOver = function () {};
// removes question
// div showing game over
// append to main
