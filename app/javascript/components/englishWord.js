const englishWord = () => {
  const form = document.getElementById("search-form");
  
  const searchWord = (word) => {
    fetch(`https://wagon-dictionary.herokuapp.com/${word}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data['found']);
      if (data['found'] === true) {
        result.insertAdjacentHTML('beforeend', ` <p>...and you are a <strong>genuis!</strong> ${word.toUpperCase()} is an english word!</p>`);
      } else {
        result.insertAdjacentHTML('beforeend', ` <p>but still dunmbass, ${word.toUpperCase()} is not an english word!</p>`);
      }
    });
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // <-- to prevent <form>'s native behaviour
    const input = event.currentTarget.querySelector('.form-control');
    // results.innerHTML = '';
    searchWord(input.value);
  });

}

export { englishWord };