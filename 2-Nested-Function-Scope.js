function outer () {
  let counter = 0;
  function incrementCounter () {
    counter++;
  }
  incrementCounter();
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();