console.log("hello");

const questionsArray = [
  { questions: "", answers: ["", "", "", ""], correctAnswer: "" },
  { questions: "", answers: ["", "", "", ""], correctAnswer: "" },
  { questions: "", answers: ["", "", "", ""], correctAnswer: "" },
  { questions: "", answers: ["", "", "", ""], correctAnswer: "" },
  { questions: "", answers: ["", "", "", ""], correctAnswer: "" },
];

const currentQuestion = 0;

const timer = function () {};
// if timer reaches 0 render gameOver

const gameOver = function () {};
// removes question
// div showing game over
// append to main

const startQuiz = function () {};
// clicking start button - start-container ID should
// - remove the container div
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

const verifyAnswer = function () {};
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
