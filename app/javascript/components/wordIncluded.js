import { Resultarray } from './randomWordArray';

const wordIncluded = () => {
  const form = document.getElementById("search-form");

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // <-- to prevent <form>'s native behaviour
    const input = event.currentTarget.querySelector('.form-control');
    // results.innerHTML = '';
    const word = input.value.toUpperCase();
    const wordArray = word.split('');
    const allFounded = (wo, ar) => {
      return wo.every( letter => ar.includes(letter) );
    };
    const included = allFounded(wordArray, Resultarray);
    if (included === true) {
      result.insertAdjacentHTML('afterbegin', ` <p>Almost genuis! ${word} is included</p>`);
    } else {
      result.insertAdjacentHTML('afterbegin', ` <p>dunmbass</p>`);
    }
  });

}

export { wordIncluded };
