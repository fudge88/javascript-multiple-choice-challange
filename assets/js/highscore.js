// global variables
const highScores = JSON.parse(localStorage.getItem("initialScore")) || [];

// reverts user back to start page
const playAgain = function () {
  location.assign("./index.html");
};

// clear history function
const clearScore = function () {
  localStorage.removeItem("initialScore");
  renderNoScores();
};

// if scores are cleared- removed the high score list
const renderNoScores = function () {
  document.getElementById("highScoreListUL").remove();
  el = document.querySelector(".scores-titles");
  el.innerHTML = "No high scores";
};

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
  scoreDiv.setAttribute("id", "highScoreListUL");

  // for each loops around each initial value held in the LS
  const scoreLoop = function (each, i, array) {
    const scoreList = document.createElement("li");
    scoreList.setAttribute("class", "myButton score-list");

    const userInitialDiv = document.createElement("div");
    userInitialDiv.textContent = each.initials;

    const userScoreDiv = document.createElement("div");
    userScoreDiv.textContent = each.score;

    scoreList.append(userInitialDiv, userScoreDiv);
    scoreDiv.appendChild(scoreList);
  };

  highScores.forEach(scoreLoop);

  // buttons to play again and clear score
  const btnControlContainer = document.createElement("div");
  btnControlContainer.setAttribute("class", "control-buttons-container");

  const playAgainBtn = document.createElement("button");
  playAgainBtn.setAttribute("class", "play-again-btn");
  playAgainBtn.setAttribute("id", "playAgainBtn");
  playAgainBtn.textContent = "Play again";

  const clearScoreBtn = document.createElement("button");
  clearScoreBtn.setAttribute("class", "clear-score-btn");
  clearScoreBtn.setAttribute("id", "clearScoreBtn");
  clearScoreBtn.textContent = "Clear Score";

  btnControlContainer.append(playAgainBtn, clearScoreBtn);

  startContainer.append(scoreHeading, scoreDiv, btnControlContainer);
  mainContainer.append(startContainer);

  playAgainBtn.addEventListener("click", playAgain);
  clearScoreBtn.addEventListener("click", clearScore);
};
// onload function
const onLoad = function () {
  renderScore();
};
window.addEventListener("load", onLoad);
