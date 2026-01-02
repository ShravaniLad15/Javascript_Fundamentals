/**Read data from the user */
const readLineSync = require("readline-sync");
// readline-sync is a package that helps take user input.
const userName = readLineSync.question("May I know your name?"); //question is a function. 
/** Execute the above in terminal
 * write --> cd Basics_of_JS
 * then --> node <fileName> (here- 7_read_user_data)
*/
const userAge = readLineSync.question("Beautiful name! May I know your age as well?");

console.log(`Welcome ${userName} to Javascript!`);
console.log(`Your age is ${userAge}.`);

const yearOfBirth = 2025 - userAge;

console.log(`You were born in the year ${yearOfBirth}`);
console.log(typeof userAge); //string

const ageIn2030 = Number(userAge) + 5; //since it is a string we need to convert it to number or else it'll just concatenate.
console.log(`In 2030, you will be ${ageIn2030} years old.`)