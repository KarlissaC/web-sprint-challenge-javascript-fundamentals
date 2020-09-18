// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// Nested functions can access the internal variable because of closure. Closure allows child functions to access parent variables, but parent functions cannot access the child variables. This allows the function to keep scope while still accessing the variables it needs.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumnation (num){
  let toReturn = 0;
  return counter();

  function counter(){
    for (let i = 1; i <= num; i++){
      toReturn+=i;
    }

    return toReturn;
  }
  
}

console.log(sumnation(4));