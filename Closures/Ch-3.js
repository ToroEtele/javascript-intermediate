/*Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.*/

// function outer() {
//   let counter = 0; // this variable is outside incrementCounter's scope
//   function incrementCounter () {
//     counter ++;
//     console.log('counter', counter);
//   }
//   return incrementCounter;
// }

// const willCounter = outer();
// const jasCounter = outer();

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  return((input) => {
    input+=x;
    console.log(input);
    return input;
  });
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

