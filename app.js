const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

refs.stopBtn.addEventListener("click", onStopBtnClick);
refs.startBtn.addEventListener("click", () => {
  refs.startBtn.setAttribute("disabled", "disabled");
  const promises = colors.map(switchColors);
  intervalId = setInterval(() => {

  }, 1000)
});

function onStopBtnClick() {
  refs.startBtn.removeAttribute("disabled");
  clearInterval(intervalId)
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function switchColors(color) {
  return new Promise((resolve, reject) => {
      const randomColor = randomIntegerFromInterval(colors)
    setTimeout(() => {
        resolve(color)
        refs.body.style.backgroundColor = randomColor;
    }, 1000);
  });
}
