// global variables
const highScores = JSON.parse(localStorage.getItem("initialScore")) || [];
const playAgainBtn = document.querySelector(".play-again-btn");

// onload function
const onLoad = function () {
  renderScore();
};

// // redirect function
// const redirectToPlay = function () {
//   window.location.href = "./index.html";
// };

// construct render score function
const renderScore = function () {
  const mainContainer = document.getElementById("main-container");

  const startContainer = document.createElement("div");
  startContainer.setAttribute("class", "start-container");

  const scoreHeading = document.createElement("h1");
  scoreHeading.setAttribute("class", "question-font scores-titles");
  scoreHeading.textContent = "Scores Table: ";

  const scoreDiv = document.createElement("ul");
  scoreDiv.setAttribute("class", "answer-btn-container");

  // for each loops around each initial value held in the LS
  const scoreLoop = function (each, i, array) {
    const scoreList = document.createElement("li");
    scoreList.setAttribute("class", "myButton score-list");
    scoreList.textContent = each.initials + "  -  " + each.score;
    scoreDiv.appendChild(scoreList);
  };

  highScores.forEach(scoreLoop);

  // button to play again
  const playAgainBtn = document.createElement("button");
  playAgainBtn.setAttribute("class", "play-again-btn");
  playAgainBtn.textContent = "Play again";

  startContainer.append(scoreHeading, scoreDiv, playAgainBtn);
  mainContainer.append(startContainer);
  // playAgainBtn.addEventListener("click", redirectToPlay);
};

window.addEventListener("load", onLoad);
