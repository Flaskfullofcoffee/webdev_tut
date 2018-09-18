// // ADVANCED FUNCTIONS
//
// // OLD WAY OF DOING FUNCTIONS
// // function first() {
// //   var greet = 'Hi';
// //   function second() {
// //     alert(greet);
// //   }
// //   return second;
// // }
// //
// // var newFunc = first();
// // newFunc();
//
// // CURRENT METHOD FOR FUNCTIONS
// const first = () => {
//   const greet = 'Hi';
//   const second = () => {
//     alert(greet);
//   }
//   return second;
// }
// const newFunc = first();
// // newFunc();
//
// // CLOSURES - Children will always ahave access to the parents scope but the parents will never have access to their children's scope.
//
//
//
// ////////////// CURRYING ////////////////////
//
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// const multiplyBy5 = curriedMultiply(5);
//
//
//
// //////////// COMPOSE //////////////////
// // - The act of putting two functions together to form a third function Where the output of one function is input of the other
//
// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1; // varibable sum = num, num = num + 1
// compose(sum, sum)(5);
//
//
//
// ////////// ADVANCED ARRAYS ///////////////
//
// const array = [1, 2, 10, 16];
// const double = [];
// const newArray = array.forEach((num) => {
//   double.push(num * 2);
// })
// // console.log(double);
//
//
//
// // Map, Filter, Reduce ––––––– SUPER IMPORTANT SHIT

const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

////////////// MAPPING /////////////////

// OLD WAY – USING LOOPS
// let animal_names = [];
//
// for (var i = 0; i < animals.length; i++) {
//   animal_names.push(animals[i].name);
// }

// USING MAPS
let animal_names = animals.map((animal, index, animals) => {
  return animal.name;
})

////////////// FILTERING //////////////////

// OLD WAY – USING LOOPS
// let small_animals = [];
//
// for (var i = 0; i < animals.length; i++) {
//   if (animals[i].size === 'small') {
//     small_animals.push(animals[i]);
//   }
// }

// USING FILTER
let small_animals = animals.filter((animal) => {
  return animal.size === 'small';
})

////////////// REDUCE ////////////////

// OLD WAY – USING LOOPS
// let total_weight = [];
//
// for (var i = 0; i < animals.length; i++) {
//   total_weight += animals[i].weight;
// }

// USING REDUCE
let total_weight = animals.reduce((weight, animal, index, animals) => {
  return weight += animal.weight;
},0)



/////////// ADVANCED OBJECTS ////////////////

// INSTANTIATION
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hello I'm ${this.name} & I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEEEEEEE I'm a ${this.type}`);
  }
}
const Wizard1 = new Wizard('shelli', 'Healer');
const Wizard2 = new Wizard('Jacob', 'Dark mage');



/////////// ES7 UPDATES //////////////

// Includes

const pets = ['fish', 'dog', 'cat', 'bird'];

// square

const square = (x) => x**2;
const cube = (y) => y**3;


////////// ES8 UPDATES ////////////////

Object.values
Object.entries
Object.keys


let obj = {
  username01: 'Santa',
  username02: 'rudolph',
  username03: 'Mr. Grinch'
}

// keys
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
})

// values
Object.values(obj).forEach(values => {
  console.log(values);
})

// entries
Object.entries(obj).forEach(entries => {
  console.log(entries);
})

Object.entries(obj).map(value => {
  return value[1] + value[0].replace('username', '');
})

// DEBUGGING

// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//   (a, b) => a.concat(b), []);


  // const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  //   (accumulator, array) => {
  //     debugger
  //       return [].concat([0, 1])
  //     }, []);


////////////// ASYNCHRONOUS ///////////////////

// CALL STACK

// WEB API

// CLAABACK QUEUE

// EVENT LOOP
