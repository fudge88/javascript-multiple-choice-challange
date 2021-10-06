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

// timer
let counter = 50;
let currentQuestionIndex = 0;
const startBtn = document.getElementById("startBtn");
const startContainer = document.getElementById("start-container");

const startQuiz = function () {
  // clicking start button - start-container ID should

  startContainer.innerHTML = "";
  renderQuestion();
  console.log("it works");
  const timer = setInterval(countDown, 1000);
};

startBtn.addEventListener("click", startQuiz);

// - start timer
// - render question

const verifyAnswer = function (event) {
  const currentTarget = event.currentTarget;
  const target = event.target;
  if (target.getAttribute("class") === "myButton") {
    const chosenAnswer = target.getAttribute("data-message");
    const correctAnswer = questionsArray[currentQuestionIndex].correctAnswer;
    if (chosenAnswer === correctAnswer) {
      // move onto next question
      currentQuestionIndex++;
      if (currentQuestionIndex < questionsArray.length - 1) {
        startContainer.innerHTML = "";
        renderQuestion();
      } else {
        // go to game over
      }
    } else {
      counter -= 5;
    }
  }
};

const renderQuestion = function () {
  const currentQuestion = questionsArray[currentQuestionIndex];

  const question = document.createElement("h1");
  question.setAttribute("class", "sm-question-font");
  question.textContent = currentQuestion.questions;

  const answerDiv = document.createElement("div");
  answerDiv.setAttribute("class", "answer-btn-container");

  const answerLoop = function (each, i, array) {
    const answerButton = document.createElement("button");
    answerButton.setAttribute("data-message", each);
    answerButton.setAttribute("class", "myButton");
    answerButton.textContent = each;
    answerDiv.appendChild(answerButton);
  };

  currentQuestion.answers.forEach(answerLoop);

  startContainer.appendChild(question);
  startContainer.appendChild(answerDiv);
  answerDiv.addEventListener("click", verifyAnswer);
};

// verifyAnswer();
// currentQuestion++
// when answer is clicked
// -check if it is the correct answer
// -remove question-container
// -render new question

// ADD CLICK EVENT HANDLER

// const questionsDiv = document.getElementById("questions-container");

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

const registerScore = function () {
  const playerInitials = document.getElementById("playerInitials");
  if (playerInitials < 5 || playerInitials > 0) {
    alert("Please enter a no more then 5 characters");
    const playerInitialArray = [];
    if (!playerInitialArray) {
      return "no high scores stored";
    } else if (playerInitials) {
      playerInitialArray.push(playerInitials);
      console.log(playerInitialArray);
    }
  }
};
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

// local storage
// get
// set
// remove
// clear

const clearLocalStorage = function () {};

const counterSpan = document.getElementById("timer");
const counterDiv = document.getElementById("counter-div");
const mainElement = document.getElementById("main");
// const gameOverImg = "../assets/images/anime-blood.png";

const gameOver = function () {
  counterDiv.remove();
  questionsDiv.remove();
  // const img = document.createElement("img");
  // img.setAttribute(gameOverImg);
  // mainElement.append(gameOverImg);
};
// div showing game over
// append to main

// timer function
const countDown = function () {
  if (counter < 0) {
    clearInterval(timer);
    gameOver();
  } else {
    counterSpan.textContent = counter;
    counter -= 1;
  }
};
// const timer = setInterval(countDown, 1000);
// if timer reaches 0 render gameOver
