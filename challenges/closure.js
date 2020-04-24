
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

//nestedFunction can access const internal, because it's enclosed in myFunction() where that variable was specified --> nestedFunction is the closure

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){

  let count=0;
  
 function counter(number){
   for(i=0; i<=number; i++)
     count=count +i;
    return count;
 }
  
  return counter(number);
  
  }


console.log(summation(4));
console.log(summation(5));