const questionsArray = [
  {
    questions:
      "What country has the highest murder rate in the world with 90 homicides per 100,000 people?",
    answers: ["Honduras", "Venezuela", "America", "Guatemala"],
    correctAnswer: "Honduras",
  },
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
      "Lying in bed with a famous Colombian model",
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

let currentQuestionIndex = 0;

const constructAnswersContainer = function (answers) {
  const currentQuestion = questionsArray[currentQuestionIndex];
  const answerDiv = document.createElement("div");
  answerDiv.setAttribute("class", "answer-btn-container");

  const answerLoop = function (each, i, array) {
    const answerButton = document.createElement("button");
    answerButton.setAttribute("data-message", each);
    answerButton.setAttribute("class", "myButton");
    answerButton.textContent = each;
    answerDiv.appendChild(answerButton);

    currentQuestion.answers.forEach(answerLoop);

    answerDiv.appendChild(answerButton);
    answerDiv.addEventListener("click", verifyAnswer);
  };
};

const constructQuestionsContainer = function (question) {
  //   construct main div
  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "start-container");
  // question asked
  const questionAsked = document.createElement("h1");
  questionAsked.setAttribute("class", "sm-question-font");
  questionAsked.textContent = question.questions;
  // choices container
  const choices = constructAnswersContainer(question.answers);
  console.log(choices);
  //  append to main
  //   mainContainer.appendChild(questionDiv);
  questionDiv.append(questionAsked, choices);
};

// render question container
const renderQuestionContainer = function () {
  console.log("render question");
  // get current question
  // const currentQuestion = questionsArray[0];
  const currentQuestion = questionsArray[currentQuestionIndex];
  // construct html in JS
  console.log(currentQuestion);
  constructQuestionsContainer(currentQuestion);

  // append to container in document
};

const removeStartContainer = function () {
  const startContainer = document.getElementById("start-container");
  // remove from document
  startContainer.remove();
};

// start quiz function, to run upon button call
const startQuiz = function () {
  console.log("start quiz");
  // remove start container
  removeStartContainer();
  // render questions container
  renderQuestionContainer();
};

// targeting ID on index.html
const startBtn = document.getElementById("startBtn");

// click even listener to facilitate startQuiz
startBtn.addEventListener("click", startQuiz);
