const timer = () => {
  const startButton = document.getElementById("start-button");
  const endButton = document.getElementById("end-button");

  startButton.addEventListener("click", (event) => {
    const startTime = Date.now();
    console.log(startTime);
  });

  endButton.addEventListener("click", (event) => {
    const endTime = Date.now();
    console.log(endTime)
  });
}

export { timer };
