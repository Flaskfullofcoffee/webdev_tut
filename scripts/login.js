// var input = document.getElementById('userinput'); // defining the input source
// var button = document.getElementById('enter'); // defining the button
// var ul = document.querySelector('ul'); // defining a query selector to cache the Unordered List

// Selecting the button to create a new <li> element when it's 'Clicked'
// button.addEventListener('click', function() {
//   if (input.value.length > 0) {
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = '';
//   }
// })

// input.addEventListener('keypress', function(event){
//   if (input.value.length > 0 && event.which === 13) {
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = '';
//   }
// })

//////////////// REFACTORING ABOVE CODE ////////////////////////

// INPUT LENGTH FUNCTION
// function inputLength() {
//   return input.value.length;
// }
//
// function createListItem() {
//   var li = document.createElement('li');
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = '';
// }
//
// function addItemAfterClick() {
//     if (inputLength() > 0) {
//       createListItem();
//     }
//   }
//
// function addItemAfterKeypress(event) {
//     if (inputLength() > 0 && event.which === 13) {
//       createListItem();
//     }
//   }
//
//
// button.addEventListener('click', addItemAfterClick);
//
// input.addEventListener('keypress', addItemAfterKeypress);




/////////////// TUTORIAL TEST QUESTIONS //////////////
var input = document.getElementById('userinput'); // defining the input source
var button = document.getElementById('enter'); // defining the button
var ul = document.querySelector('ul'); // defining a query selector to cache the Unordered List

input.addEventListener('keypress', function(event) { // add an event listener to input
  if (input.value.length > 0 && event.which === 13) { // if the input value is more than nothing
    var li = document.createElement('li'); // create a new <li> element
    li.appendChild(document.createTextNode(input.value));
    li.className = 'notDone';
    ul.appendChild(li);
    input.value = '';
  }
})

button.addEventListener('click', function() {
  if (input.value.length > 0) {
  var li = document.createElement('li'); // create a new <li> element
  li.appendChild(document.createTextNode(input.value));
  li.className = 'notDone';
  ul.appendChild(li);
  input.value = '';
  }
})




var listParent = document.getElementById('listParent'); // Get the element
listParent.addEventListener('click', function(e){ // Bind element to an event listener
  if (e.target && e.target.matches('li.notDone')) { // Match the click to the <li> element
    e.target.className = 'done'; // Set onclick to change the class to "done" when clicked
  }
})
