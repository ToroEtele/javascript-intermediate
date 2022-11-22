function userCreator(name, score) {
  const newuser = {};
  newuser.name = name;
  newuser.score = score;
  newuser.increment = function() {
    newuser.score++;
  }
  return newuser;
};
let user1 = userCreator("Will", 3);
let user2 = userCreator("Tim", 5);

user1.increment;

//We don't want so save a copy of increment function in every user object.
//We don't want to just create a function outside, because we can call that function for everything

function userCreatorNew(name, score) {
  const newuser = Object.create(userFunctionStore);
  newuser.name = name;
  newuser.score = score;
  return newuser;
}

const userFunctionStore = {
  increment: function() {
    this.score++;
  },
  //login: function(){console.log("Logged in!");}
}

user1 = userCreatorNew("Will", 3);
user2 = userCreatorNew("Tim", 5);

user1.increment;
user1.hasOwnProperty('score');