const scoreStorage = function (data) {
  const highScores = JSON.parse(localStorage.getItem(data));
  localStorage.setItem("initialScore", JSON.stringify(highScores));
};

const onLoad = function () {
  const highScoresData = highScores("initialScore", []);
  console.log(scoreStorage.key);
};

// window.addEventListener("load", onLoad);

const renderScore = function () {
  const startContainer = document.getElementById("start-container");

  const scoreHeading = document.createElement("h1");
  scoreHeading.setAttribute("class", "question-font");
  scoreHeading.textContent = "Scores Table: ";

  const scoreDiv = document.createElement("ul");
  scoreDiv.setAttribute("class", "answer-btn-container");

  const scoreLoop = function (each, i, array) {
    const scoreList = document.createElement("li");
    scoreList.setAttribute("data-message", each);
    scoreList.setAttribute("class", "myButton");
    scoreList.textContent = each;
    startContainer.appendChild(scoreList);
  };

  localStorage.initialScore.forEach(scoreLoop);

  startContainer.append(scoreHeading, scoreDiv);
  scoreDiv.appendChild(scoreList);
  // answerDiv.addEventListener("click", verifyAnswer);
};

window.addEventListener("load", onLoad);
