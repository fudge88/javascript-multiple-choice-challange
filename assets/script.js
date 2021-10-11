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

const counterSpan = document.getElementById("timer");
const counterDiv = document.getElementById("counter-div");
const mainElement = document.querySelector(".main-container");
const gameOverImg2 = "assets/images/anime-blood.png";
const gameOverImg1 = "assets/images/anime-gun.png";

const gameOver = function () {
  // counterDiv.remove();
  // questionsDiv.remove();
  startContainer.remove();

  const gunDiv = document.createElement("div");
  gunDiv.setAttribute("class", "gunDiv");
  mainElement.append(gunDiv);

  const imgGun = document.createElement("img");
  imgGun.setAttribute("src", gameOverImg1);
  imgGun.setAttribute("class", "gameOverGun");
  gunDiv.append(imgGun);
  // gun image and delayed remove
  setTimeout(function () {
    gunDiv.remove();
  }, 3500);
  // delayed blood image and remove
  // setTimeout(function () {
  //   gunDiv.remove();
  // }, 3500);
  // delayed render score

  // redirect to start

  const imgBlood = document.createElement("img");
  imgBlood.setAttribute("src", gameOverImg2);
  imgBlood.setAttribute("class", "gameOverImg");
  // mainElement.append(imgBlood);
  setTimeout(function () {
    mainElement.append(imgBlood);
  }, 1500);
  setTimeout(function () {
    imgBlood.remove();
  }, 4000);
  return;
};

// timer
let counter = 50;
let currentQuestionIndex = 0;
const startBtn = document.getElementById("startBtn");
const startContainer = document.getElementById("start-container");

const renderRegisterScore = function () {
  const initialBtn = document.createElement("button");
  initialBtn.setAttribute("class", "input-btn");
  initialBtn.setAttribute("type", "submit");
  initialBtn.setAttribute("value", "Submit");
  initialBtn.textContent = "Save";

  const initialInput = document.createElement("input");
  initialInput.setAttribute("type", "text");
  initialInput.setAttribute("id", "playerInitials");
  initialInput.setAttribute("placeholder", "Initial here to save score");

  const scoreForm = document.createElement("form");

  const scoreSpan = document.createElement("span");
  scoreSpan.textContent = counter;

  const yourScore = document.createElement("p");
  yourScore.textContent = "You Scored: ";

  const scoreInputHeading = document.createElement("h1");
  scoreInputHeading.textContent = "Challenge Complete!";

  const scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("class", "start-container");
  scoreDiv.setAttribute("id", "score-container");

  yourScore.appendChild(scoreSpan);
  scoreForm.appendChild(initialInput);
  scoreForm.appendChild(initialBtn);

  scoreDiv.appendChild(scoreInputHeading);
  scoreDiv.appendChild(yourScore);
  scoreForm.addEventListener("submit", registerScore);
  scoreDiv.appendChild(scoreForm);

  mainElement.appendChild(scoreDiv);
};

const verifyAnswer = function (event) {
  const target = event.target;
  if (target.getAttribute("class") === "myButton") {
    const chosenAnswer = target.getAttribute("data-message");
    const correctAnswer = questionsArray[currentQuestionIndex].correctAnswer;
    if (chosenAnswer !== correctAnswer) {
      counter -= 5;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsArray.length) {
      startContainer.innerHTML = "";
      renderQuestion();
    } else {
      renderRegisterScore();
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

const renderScore = function () {};
// remove last question to render score div
// build score container
// append to main
// ADD EVENT LISTENERS TO FORM

const registerScore = function (event) {
  console.log(event);
  event.preventDefault();
  const playerInitials = document.getElementById("playerInitials").value;
  const playerScore = counter;
  console.log(playerInitials, playerScore);
  const data = {
    initials: playerInitials,
    score: playerScore,
  };
  scoreStorage(data);
};

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
const nameInitial = "fa";
const inputField = document.getElementById("playerInitials");

const scoreStorage = function (data) {
  const highScores = JSON.parse(localStorage.getItem("initialScore")) || [];
  highScores.push(data);
  localStorage.setItem("initialScore", JSON.stringify(highScores));
};

const startTimer = function () {
  const countDown = function () {
    if (counter < 0 || currentQuestionIndex > questionsArray.length - 1) {
      clearInterval(timer);
      gameOver();
    } else {
      counterSpan.textContent = counter;
      counter -= 1;
    }
  };

  const timer = setInterval(countDown, 1000);
};

const startQuiz = function () {
  // clicking start button - start-container ID should
  startContainer.innerHTML = "";
  renderQuestion();
  startTimer();
  console.log("it works");
  // const timer = setInterval(countDown, 1000);
};
startBtn.addEventListener("click", startQuiz);
