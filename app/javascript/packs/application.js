// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("channels")

import 'bootstrap';
import { timer } from '../components/timer';
import { englishWord } from '../components/englishWord';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  timer();
  englishWord();
});