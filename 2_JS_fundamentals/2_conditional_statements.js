/**Conditional Statements
 * If
 * If-else
 * Ladder if-else
 * Nested if-else
 */
const readLineSync = require("readline-sync");

/**If condition 
// if(condition/expression){
//   body/action to be performed
// }

// const isLoggedIn = true;

// if(isLoggedIn){
//   console.log("Hello. Login Successful!")
// } */


/**If-else condition
// const userAge = readLineSync.question("How old are you?");

// if(userAge > 18){
//   console.log("You are an adult.")
// }else{
//   console.log("You are not an adult.")
// }*/


/** Ladder if-else(if + else if + else)  
// const number = Number(readLineSync.question("Can you tell me a number?"));

// if((number % 3) === 0){
//   console.log("Fizzz");
// }else if((number % 5) === 0){
//   console.log("Buzzz");
// }else{
//   console.log("Nahh");
// }

// const logInUserName = readLineSync.question(" Please enter your name: ");
// const logInPassword = readLineSync.question(" Enter a password to login : ");

// const signUpUserName = "Shravani"
// const signUpPassword = "user@123"

// if(logInUserName === signUpUserName && logInPassword === signUpPassword){
//   console.log("Login Successful!");
// }
// else if(logInUserName != signUpUserName && logInPassword != signUpPassword){
//   console.log("Incorrect username and password! Please try again.")
// }
// else if(logInPassword != signUpPassword){
//   console.log("Incorrect Password! Please Try again");
// }
// else if(logInUserName != signUpUserName){
//   console.log("Incorrect username! Please try again.")
// }


//  Please enter your name: Shravani
//  Enter a password to login : user@123
// Login Successful!

//  Please enter your name: shravani
//  Enter a password to login : user@123
// Incorrect username! Please try again.

//  Please enter your name: Shravani
//  Enter a password to login : User@123
// Incorrect Password! Please Try again

//  Please enter your name: shravani
//  Enter a password to login : User@123
// Incorrect username and password! Please try again.*/


/**Nested if-else 
// const num = Number(readLineSync.question("Enter a number : "));

// if(num % 2 === 0){
//   console.log(`${num} is an even number.`);
//   if(num % 4 === 0){
//     console.log(`${num} is divisible by 4.`)
//   }else{
//     console.log(`${num} is not divisible by 4.`)
//   }
// }else{
//   console.log(`${num} is an odd number.`)
//   if(num % 5 === 0){
//     console.log(`${num} is divisible by 5.`)
//   }else{
//     console.log(`${num} is not divisible by 5.`)
//   }
// }*/

/**Exercise*/
//A program that reads 3 string and print the smallest string
// using .length property

const first = "apple";
const second = "banana";
const third = "cherry";

if(first.length < second.length && first.length < third.length){
  console.log("First is smallest.");
}
else if(second.length < first.length && second.length < third.length){
  console.log("second is smallest.");
}
else if(third.length < first.length && third.length < second.length){
  console.log("third is smallest.");
}else{
  console.log("Found two or more strings of the same length.");
}



 






