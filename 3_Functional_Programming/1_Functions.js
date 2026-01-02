
//Function Declaration
// function greetMessage(){
//   console.log("Hello World!");
// }

//Calling a Function
// greetMessage();
// greetMessage();

//Function with parameters
// function greetMessage(userName, userCity){ //userName , userCity -> Parameter
//   console.log(`Hello ${userName}!`);
//   console.log(`Thank you for joining from ${userCity}`);

// }
// greetMessage("Shravani", "Mumbai"); //Shravani, Mumbai -> Argument  
// greetMessage("Prachi" , "Pune"); 
// greetMessage("Sadhana", "Bangalore"); 

/**
 * Javascript feature:
 * It runs the code in 2 phases ->
 * One of which is memory alloc, where it basically scans the whole code for variables and functions and allocate them memory with initially assigning it the value undefined till we define it.
 * Hence, if we do not assign a value to a variable, it will not throw error. It will return undefined in its place.
 * 
 */
// greetMessage("Monica"); //This will return "undefined" in place of the city.

//Program to print sum of all numbers within the given range
function printSum(min, max){
  let sum = 0;
  for(let i=min; i<=max; i++){
    sum+=i;
  }
  console.log(`The sum of all the numbers from ${min} to ${max} is ${sum}`);
}

printSum(1,100);