// var age = prompt('What is your age?');
//
// function checkDriverAge() {
//
//   if (Number(age) < 18) {
//     alert('Access denied');
//   } else if (Number(age) > 18) {
//     alert('Powering on, drive safely');
//   } else if (Number(age) === 18) {
//     alert('Congrats on your first year of driving');
//   }
// }
var _ = require('lodash');
console.log(_);


var database = [
  {
    username: 'billy',
    password: '1234',
  },
  {
    username: 'john',
    password: '4321',
  },
  {
    username: 'jake',
    password: '0000',
  },
];

var newsfeed = [
  {
    username: 'billy',
    timeline: 'what a day!',
  },
  {
    username: 'john',
    timeline: 'I love scotch',
  },
  {
    username: 'jake',
    timeline: 'FML',
  },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if(database[i].username === username &&
        database[i].password === password) {
          return true;
    }
  }
  return false;
}
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert('Incorrect Credentials')
  }
  }

var usernamePrompt = prompt('Username: ');
var passwordPrompt = prompt('Password: ');

signIn (usernamePrompt, passwordPrompt);

// LOOPS
// var todos = [
//   'clean room',
//   'do laundry',
//   'feed doggo',
//   'take shower',
//   'groceries',
// ];
//
// var todosImportant = [
//   'clean room!',
//   'do laundry!',
//   'feed doggo!',
//   'take shower!',
//   'groceries!',
// ];
//
// function logTodos(todo, i) {
//   console.log(todos, i);
// }
//
// todos.forEach(logTodos);
// todosImportant.forEach(logTodos);
