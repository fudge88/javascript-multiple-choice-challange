const scoreStorage = function (data) {
  const highScores = JSON.parse(localStorage.getItem(data));
  localStorage.setItem("initialScore", JSON.stringify(highScores));
};

const onLoad = function () {
  const highScores = scoreStorage("data", []);
  console.log(highScores);
};

window.addEventListener("load", onLoad);
