const search = () => {
  const form = document.getElementById("search-form");
  
  const searchWord = (word) => {
    fetch(`https://wagon-dictionary.herokuapp.com/${word}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // <-- to prevent <form>'s native behaviour
    const input = event.currentTarget.querySelector('.form-control');
    // results.innerHTML = '';
    searchWord(input.value);
  });

}

export { search };