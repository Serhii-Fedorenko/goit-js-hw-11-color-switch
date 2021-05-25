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
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length -1)];
  }, 1000);
  refs.startBtn.disabled = true;
});

function onStopBtnClick() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
