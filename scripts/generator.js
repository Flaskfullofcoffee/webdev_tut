var body = document.getElementById('background');
var color01 = document.getElementById('color01');
var color02 = document.getElementById('color02');
var gradient = document.getElementById('gradient');

function setGradient() {
  body.style.background =
  'linear-gradient(to right, '
   + color01.value
   + ', '
   + color02.value
   + ')';

   gradient.textContent = body.style.background + ';'
}

color01.addEventListener('input', setGradient)

color02.addEventListener('input', setGradient)

function isUserValid(bool) {
  return bool;
}

var automatedAnswer = 'Your account # is ' + (isUserValid(false) ? '1234' : 'not available');
