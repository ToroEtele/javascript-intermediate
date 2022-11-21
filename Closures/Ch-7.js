/*
Write a function rollCall that accepts an array of names and returns a function. 
The first time the returned function is invoked, it should log the first name to the console. 
The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. 
Once all names have been called, it should log 'Everyone accounted for'.
*/

function rollCall(names) {
  let index = 0;
  return (() => {
    index < names.length ? (console.log(names[index])) : console.log('Everyone accounted for');
    index++;
  })
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'