// render question container
const renderQuestionContainer = function () {};

// start quiz function, to run upon button call
const startQuiz = function () {
  console.log("start quiz");
};

// targeting ID on index.html
const startBtn = document.getElementById("startBtn");

// click even listener to facilitate startQuiz
startBtn.addEventListener("click", startQuiz);
