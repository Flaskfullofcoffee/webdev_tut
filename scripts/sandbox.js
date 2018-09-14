// Caching dom queries in a variable
var id = document.getElementById('first');

// Selecting an element from a node list
var listItems = document.getElementsByClassName('notDone');
if (listItems.length >= 1) {
  var firstItem = listItems[0];
}

// Repeating actions for an entire Nodelist
var mainList = document.querySelectorAll('li'); // Cache & Grab the <li> elements
for (var i = 0; i < mainList.length; i++) {
  mainList[i].className = 'night'; // Change them to white for "night mode"
}

// Adding a new element to the DOM tree

 // create a new element and cache it in a variable
// var newLi = document.createElement('li');
//
// // create a new text node and cache it as well
// var newItem = document.createTextNode('TEST');
//
// // Attache the text node to the element by appending them
// newLi.appendChild(newItem);
//
// // Find the position the new element should be added to
// var list = document.getElementsByTagName('ul')[0];
//
// // Insert the new element into it's new position
// list.appendChild(newLi);
//
// if (newLi.hasAttribute('class')) {
//   console.log(newLi);
// } else {
//   newLi.className = 'blue';
// }


////////////// EVENTS HANDLERS //////////////////


var btn = document.getElementById('enter');
var input = document.getElementById('userinput');

// CHECK TO SEE IF ENOUGH CHARACTERS ARE BEING ENTERED
// function checkList() {
//   if (input.value.length < 5) {
//     return input.value = 'more letters';
//   } else {
//     return input.value = '';
//   }
// }
// input.onblur = checkList;


//////////////// EVENT LISTENERS ///////////////////////

// ACCEPT ON KEYPRESS WHATEVER IS ENTERED ON INPUT

// btn.addEventListener('click', function(){
//   if (input.value.length > 0) {
//     var newLi = document.createElement('li');
//     var newItem = document.createTextNode(input.value);
//     newLi.appendChild(newItem);
//     var list = document.getElementsByTagName('ul')[0];
//     list.appendChild(newLi);
//   }
// })
////////////// REFACTORING ////////////////////////////////
function inputContent() {
  return input.value.length;
}
btn.addEventListener('click', function() {
  if (inputContent() > 0) {
    var newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(input.value));
    var ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(newLi);
    input.value = '';
  } else {
    console.log('shit is broke');
  }
})

// FIND THE KEYPRESS NUMBER BY ENTERING ANYTHING INTO THE INPUT
input.addEventListener('keypress', function(e){
  if (inputContent() >= 0) {
    console.log(e.which);
  }
})


// EVENT LISTENERS WITHOUT ANY PARAMETERS
