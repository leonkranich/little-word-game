// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("channels")

import 'bootstrap';
import { timerAndStart } from '../components/timerAndStart';
import { englishWord } from '../components/englishWord';
// import { randomWordArray } from '../components/randomWordArray';
import { wordIncluded } from '../components/wordIncluded';
import { showResult } from '../components/showResult';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  timerAndStart();
  englishWord();
  // randomWordArray();
  wordIncluded();
  showResult();
});