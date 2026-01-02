/**Logical operators :
 * OR ||
 * AND &&
 * NOT !
 * NULLISH COALESCING ??
 */


const phy = 90
const chem = 82
const maths = 92
const bio = 93

//AND && --> All conditions must be true, then it will return true. else false.
// if(phy > 85 && chem > 85 && maths > 85){
//   console.log("You are eligible for engg.");
// }else{
//   console.log("You are not eligible")
// }

//OR || --> Atleast one condition is true then it will return true.
// if(phy < 85 || chem < 85 || maths < 85){
//   console.log("You are NOT eligible for engg.");
// }else{
//   console.log("You are eligible")
// }

//NOT ! --> reverses the boolean
// const isEligible = false;
// if(!isEligible){
//   console.log("You are eligible");
// }else{
//   console.log("You are not eligible.")
// }

/**Logical Opr with truthy an falsy values */
//Truthy --> space, non-null/undefined values
// Falsy --> "", 0, null, undefined

//OR : 
 let firstName = "Lorelai";
 let nickName = "Rory";
// console.log(firstName || nickName); // o/p --> Lorelai

// firstName = ""
// nickName = "Rory"
// console.log(firstName || nickName); // o/p --> Rory

// firstName = ""
// nickName = ""
// console.log("Name - " + firstName || nickName); //Name - 

// firstName = ""
// nickName = null;
// userName = firstName || nickName
// console.log(`Name - ${userName}`); //Name - null

// firstName = null;
// nickName = undefined;
// userName = firstName || nickName
// console.log(`Name - ${userName}`); //Name - undefined

// firstName = null
// nickName = undefined
// console.log("Name - " + firstName || nickName || null); //Name - null
/**Summary : what OR does
 * converts the data in the variable into boolean values.
 * finds first truthy value in the expression and returns it.
 * if there's no truthy value at all, then returns the last falsy value of the expression.
 */

// userName = firstName || nickName || null || "Random_Name"; // This is called short circuiting.
// console.log(`Name - ${userName}`); // o/p -> Random_Name

// let a = 12;
// let b; 
// console.log(a+b); // NaN - Not a Number
// console.log(a+(b || 0)); //12


/* AND with truthy & falsey values */

// firstName = "Hermione"
// nickName = "Hermy"
// userName = firstName && nickName;
// console.log(`Name - ${userName}`);//Hermy

// firstName = "Hermione"
// nickName = " "
// userName = firstName && nickName;
// console.log(`Name - ${userName}`);// Name - 

/** Summary : what AND does
 * converts the data in the variable into boolean values.
 * finds first falsey value in the expression and returns it.
 * if there's no falsey value at all, then returns the last truthy value of the expression.
 * 
*/

/**Examples:-
 * console.log(3 || 2 || 1) -> 3
 * console.log("" || 0 || 1) -> 2
 * console.log("" || 0 || undefined) -> undefined
 * console.log(0 || "null" || 2) -> null, since null is written as a string
 * console.log(3 && 2 && 1) -> 1
 * console.log("" && 0 && 2) -> ""
 * console.log("undefined" && "null" && "") -> ""
 */