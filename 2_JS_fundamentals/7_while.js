/**
 * while loop - executed the number of times the condition is true
 * do while loop- executed once regardless if the condition is true or not
 */

// 


//Question : User enters a number, if this number is less than 50 then ask the user to enter the number again.

let readlineSync = require("readline-sync")
let number = readlineSync.question("Enter a number less than 50 - ")
while(number>= 50){
  number = readlineSync.question("Enter a number less than 50 - ")
}
console.log("Number accepted!");
