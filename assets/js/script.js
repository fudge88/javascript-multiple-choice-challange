const questionsArray = [
  {
    questions: "Pablo Escobar began his criminal career as",
    answers: [
      "Gambling and prostitution ringleader",
      "Emerald and arms dealer",
      "Political corruptor",
      "Tomb and car thief",
    ],
    correctAnswer: "Tomb and car thief",
  },
  {
    questions:
      "What was Pablo Escobar doing when the Colombian police commandos surrounded and killed him",
    answers: [
      "Having a secret meeting with DEA covered agents",
      "Counting his money",
      "Talking by phone with his son",
      "Cleaning his guns",
    ],
    correctAnswer: "Talking by phone with his son",
  },
  {
    questions: "Give the nickname of the famous criminal Joaquin Guzman",
    answers: ["Baby Face", "Tony Montana", "Escobar", "El Chapo"],
    correctAnswer: "El Chapo",
  },
  {
    questions:
      "One of the closest partners of Escobar was Gonzalo Rodriguez Gacha. What was Rodriguez's nickname?",
    answers: ["El Mexicano", "Pinina", "El Sicario", "Popeye"],
    correctAnswer: "El Mexicano",
  },
];

const counterSpan = document.getElementById("timer");
const counterDiv = document.getElementById("counter-div");
const mainElement = document.querySelector(".main-container");
const gameOverImg2 = "assets/images/anime-blood.png";
const gameOverImg1 = "assets/images/anime-gun.png";

const gameOver = function () {
  setTimeout(function () {
    startContainer.remove();
  }, 600);

  const gunDiv = document.createElement("div");
  gunDiv.setAttribute("class", "gunDiv");
  setTimeout(function () {
    mainElement.append(gunDiv);
  }, 800);

  const imgGun = document.createElement("img");
  imgGun.setAttribute("src", gameOverImg1);
  imgGun.setAttribute("class", "gameOverGun");
  gunDiv.append(imgGun);
  setTimeout(function () {
    gunDiv.remove();
  }, 3800);

  const imgBlood = document.createElement("img");
  imgBlood.setAttribute("src", gameOverImg2);
  imgBlood.setAttribute("class", "gameOverImg");
  setTimeout(function () {
    mainElement.append(imgBlood);
  }, 1500);

  const gameOverWording = document.createElement("h1");
  gameOverWording.setAttribute("class", "gameOverWording");
  gameOverWording.textContent = "GAME OVER";
  setTimeout(function () {
    mainElement.append(gameOverWording);
  }, 1700);

  setTimeout(function () {
    imgBlood.remove();
    gameOverWording.remove();
  }, 4000);

  setTimeout(function () {
    renderRegisterScore();
  }, 4000);
};

// timer
let counter = 40;
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

const constructWrongAlert = function () {
  const wrongAnswer = document.createElement("div");
  wrongAnswer.setAttribute("class", "alert wrong-answer");
  wrongAnswer.textContent = "WRONG ANSWER! You lose 5 seconds";

  return wrongAnswer;
};

const constructRightAlert = function () {
  const rightAnswer = document.createElement("div");
  rightAnswer.setAttribute("class", "alert right-answer");
  rightAnswer.textContent = "WELL DONE! You have answered correctly";

  return rightAnswer;
};

const renderWrongAlert = function () {
  const alert = constructWrongAlert();
  mainElement.appendChild(alert);
  const afterDelay = function () {
    alert.remove();
    clearTimeout(delay);
  };
  const delay = setTimeout(afterDelay, 1000);
};

const renderRightAlert = function () {
  const alert = constructRightAlert();
  mainElement.appendChild(alert);
  const afterDelay = function () {
    alert.remove();
    clearTimeout(delay);
  };
  const delay = setTimeout(afterDelay, 1000);
};

const verifyAnswer = function (event) {
  const target = event.target;
  if (target.getAttribute("class") === "myButton") {
    const chosenAnswer = target.getAttribute("data-message");
    const correctAnswer = questionsArray[currentQuestionIndex].correctAnswer;
    if (chosenAnswer !== correctAnswer) {
      counter -= 5;
      renderWrongAlert();
    } else {
      renderRightAlert();
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questionsArray.length) {
      startContainer.innerHTML = "";
      renderQuestion();
      console.log("next question");
    } else {
      if (count > 0) {
        renderQuestion();
      } else {
        gameOver();
      }
      // renderRegisterScore(); register score does not appear
      console.log("register score");
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

const inputField = document.getElementById("playerInitials");

const scoreStorage = function (data) {
  const highScores = JSON.parse(localStorage.getItem("initialScore")) || [];
  highScores.push(data);
  localStorage.setItem("initialScore", JSON.stringify(highScores));
};

const startTimer = function () {
  const countDown = function () {
    if (counter <= 0 || currentQuestionIndex > questionsArray.length - 1) {
      clearInterval(timer);
      gameOver();
    } else {
      counter -= 1;
      counterSpan.textContent = counter;
    }
  };

  const timer = setInterval(countDown, 1000);
};

const startQuiz = function () {
  startContainer.innerHTML = "";
  renderQuestion();
  startTimer();
  console.log("it works");
};
startBtn.addEventListener("click", startQuiz);
