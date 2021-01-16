import { Resultarray } from './randomWordArray';

const wordIncluded = () => {
  console.log(Resultarray);
  const form = document.getElementById("search-form");

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // <-- to prevent <form>'s native behaviour
    const input = event.currentTarget.querySelector('.form-control');
    // results.innerHTML = '';
    const word = input.value.toUpperCase();
    console.log(word);
    const wordArray = word.split('');
    const allFounded = (wo, ar) => {
      return wo.every( letter => ar.includes(letter) );
    };
    console.log(allFounded(wordArray, Resultarray));
    return allFounded(wordArray, Resultarray);
  });

}

export { wordIncluded };