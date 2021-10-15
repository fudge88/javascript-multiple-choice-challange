const highScores = JSON.parse(localStorage.getItem("initialScore")) || [];

const onLoad = function () {
  renderScore();
};

const renderScore = function () {
  const mainContainer = document.getElementById("main-container");

  const scoreHeading = document.createElement("h1");
  scoreHeading.setAttribute("class", "question-font");
  scoreHeading.textContent = "Scores Table: ";

  const scoreDiv = document.createElement("ul");
  scoreDiv.setAttribute("class", "answer-btn-container");

  const scoreLoop = function (each, i, array) {
    const scoreList = document.createElement("li");
    scoreList.setAttribute("class", "myButton");
    scoreList.textContent = each.initials + "," + each.score;
    scoreDiv.appendChild(scoreList);
  };
  highScores.forEach(scoreLoop);

  mainContainer.append(scoreHeading, scoreDiv);
};

window.addEventListener("load", onLoad);
