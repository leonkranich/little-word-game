import { wordIncluded } from "./wordIncluded";

const showResult = () => {
  const result = document.getElementById("result");
  // const form = document.getElementById("search-form");
  // const included = wordIncluded();
  // console.log(included);
  
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault(); // <-- to prevent <form>'s native behaviour
  //   const input = event.currentTarget.querySelector('.form-control');
  //   // results.innerHTML = '';
  //   const word = input.value.toUpperCase();
  // });


  // if (included === true) {
  //   result.insertAdjacentHTML("beforeend", ` <p>You're a genuis!</p>`);
  // } else {
  //   result.insertAdjacentHTML("beforeend", ` <p>dunmbass</p>`);
  // }
  
}

export { showResult };