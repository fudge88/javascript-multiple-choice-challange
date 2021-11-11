// global Variables
let counter = questionsArray.length * 10;
let currentQuestionIndex = 0;
const startBtn = $("#startBtn");
const startContainer = $("#start-container");
const counterSpan = $("#timer");
const counterDiv = $("#counter-div");
const mainElement = $(".main-container");
const gameOverImg2 = "assets/images/anime-blood.png";
const gameOverImg1 = "assets/images/anime-gun.png";
const inputField = $("#playerInitials");

// game over function -renders a sequenced animation
const gameOver = () => {
  setTimeout(() => {
    startContainer.remove();
  }, 200);
  const gunDiv = `<div class="gunDiv">
  <img src=${gameOverImg1} class="gameOverGun" id="imgGun"/>
  </div>`;

  setTimeout(() => {
    mainElement.append(gunDiv);
  }, 200);

  setTimeout(() => {
    $(gunDiv).remove();
  }, 3800);

  const imgBlood = `<img src=${gameOverImg2} class="gameOverImg"/>`;
  setTimeout(() => {
    mainElement.append(imgBlood);
  }, 1500);

  const gameOverWording = `<h1 class="gameOverWording">GAME OVER</h1>`;
  setTimeout(() => {
    mainElement.append(gameOverWording);
  }, 1700);

  setTimeout(() => {
    $(imgBlood).remove();
    $(gameOverWording).remove();
  }, 4000);

  setTimeout(() => {
    renderRegisterScore();
  }, 4000);
};

// constructing and rendering the register score form
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

  mainElement.append(scoreDiv);
};

// alert construction for wrong answer
const constructWrongAlert = function () {
  const wrongAnswer = document.createElement("div");
  wrongAnswer.setAttribute("class", "alert wrong-answer");
  wrongAnswer.textContent = "WRONG ANSWER! You lose 5 seconds";

  return wrongAnswer;
};

// alert construction for right answer
const constructRightAlert = function () {
  const rightAnswer = document.createElement("div");
  rightAnswer.setAttribute("class", "alert right-answer");
  rightAnswer.textContent = "WELL DONE! You have answered correctly";

  return rightAnswer;
};

// alert function for wrong answer
const renderWrongAlert = function () {
  const alert = constructWrongAlert();
  mainElement.append(alert);
  const afterDelay = function () {
    alert.remove();
    clearTimeout(delay);
  };
  const delay = setTimeout(afterDelay, 800);
};

// alert function for wrong answer
const renderRightAlert = function () {
  const alert = constructRightAlert();
  mainElement.append(alert);
  const afterDelay = function () {
    alert.remove();
    clearTimeout(delay);
  };
  const delay = setTimeout(afterDelay, 800);
};

// function verifies is answer is correct
const verifyAnswer = function (event) {
  const target = event.target;
  if (target.getAttribute("class") === "myButton") {
    const chosenAnswer = target.getAttribute("data-message");
    const correctAnswer = questionsArray[currentQuestionIndex].correctAnswer;
    // if teh answer is incorrect take 5 seconds off the counter
    if (chosenAnswer !== correctAnswer) {
      counter -= 5;
      renderWrongAlert();
    } else {
      renderRightAlert();
    }
    // move on to the next question
    currentQuestionIndex++;
    // if no more questions or if counter is 0 go to game over
    if (currentQuestionIndex < questionsArray.length) {
      startContainer.empty();
      renderQuestion();
    } else {
      if (counter > 0) {
        renderQuestion();
      } else {
        gameOver();
      }
    }
  }
};

// construct questions container
const renderQuestion = function () {
  // use the selected choices array instead of questionsArray
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

  startContainer.append(question);
  startContainer.append(answerDiv);
  answerDiv.addEventListener("click", verifyAnswer);
};

// function to save user score against their initials
const registerScore = function (event) {
  event.preventDefault();
  const playerInitials = document.getElementById("playerInitials").value;
  const playerScore = counter;
  const data = {
    initials: playerInitials,
    score: playerScore,
  };
  scoreStorage(data);
  // redirects to high scores page once score submitted
  window.location.href = "./highScores.html";
};

// local storage
const scoreStorage = function (data) {
  const highScores = JSON.parse(localStorage.getItem("initialScore")) || [];
  highScores.push(data);
  localStorage.setItem("initialScore", JSON.stringify(highScores));
};

// timer function to go to game over if counter is 0 or no more questions to ask
const startTimer = function () {
  const countDown = function () {
    if (counter <= 0 || currentQuestionIndex > questionsArray.length - 1) {
      clearInterval(timer);
      gameOver();
    } else {
      counter -= 1;
      counterSpan.text(counter);
    }
  };
  const timer = setInterval(countDown, 1000);
};
const getQuestionType = () => {
  // function that allows teh user to select their questions
  // get value the user has selected
  // can add an empty array in GLOBAL to push teh selected choices and the SPREAD
  //
};

// start quiz function
const startQuiz = function () {
  // function that allows teh user to select their questions
  getQuestionType();
  startContainer.empty();
  renderQuestion();
  startTimer();
};
startBtn.on("click", startQuiz);
