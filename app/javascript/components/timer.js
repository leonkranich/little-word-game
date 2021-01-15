const timer = () => {
  const startButton = document.getElementById("start-button");
  const endButton = document.getElementById("end-button");
  const form = document.getElementById("end-submit");

  startButton.addEventListener("click", (event) => {
    let startTime = performance.now();
    endButton.addEventListener("click", (event) => {
      const endTime = performance.now();
      let timeDiff = endTime - startTime;
      timeDiff /= 1000;
      const seconds = timeDiff.toFixed(3);
      console.log(seconds);
    });
  });
  
}

export { timer };
