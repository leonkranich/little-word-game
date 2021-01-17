import { wordIncluded } from "./wordIncluded";

const showResult = () => {
  const result = document.getElementById("result");

  if (wordIncluded() === true) {
    result.insertAdjacentHTML("beforeend", ` <p>You're a genuis!</p>`);
  } else {
    result.insertAdjacentHTML("beforeend", ` <p>dunmbass</p>`);
  }
}

export { showResult };