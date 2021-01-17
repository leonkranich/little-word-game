import { Resultarray } from './randomWordArray';

const timerAndStart = () => {
  const startButton = document.getElementById("start-button");
  const endButton = document.getElementById("end-button");
  const letters = document.querySelector('.letters');

  startButton.addEventListener("click", (event) => {
    let startTime = performance.now();
    Resultarray.forEach((letter) => {
      const randomLetter = `<li>${letter}</li>`
      letters.insertAdjacentHTML("beforeend", randomLetter);
    });
    endButton.addEventListener("click", (event) => {
      const endTime = performance.now();
      let timeDiff = endTime - startTime;
      timeDiff /= 1000;
      const seconds = timeDiff.toFixed(3);
      console.log(seconds);
      return seconds;
    });
  });
  
}

export { timerAndStart };