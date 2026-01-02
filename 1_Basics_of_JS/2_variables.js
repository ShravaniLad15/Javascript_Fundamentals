/**variable- placeholder to store data 
 * 3 ways to create variable in JS:
 * var
 * let
 * const- values that will not change
*/

// var message;
// message="hello world"; //= is assignment operator
// console.log(message);
// message="hello shravani"
// console.log(message);

// let text;
// text='JS is the best!!'
// console.log(text)
// let names='Shravani Lad'
// console.log(names)

//  const num;
//  num=3;
//  console.log(num); //will give an error

// const number=23 //You have to declare and assign the value in the same line
// console.log(number);/
//-----------------------------------------------------

/**var VS let vs const
 */

// var msg='hello';
// var msg='hii';
// var msg='what';
// console.log(msg);
//SO basically, with var you can re declare and re-initialise (re-assign) the variable

//let msg='wru?';
//let msg='wbu?';
//console.log(msg);
//this will give an error bcz with let you cannot redeclare a variable, you can only re-assign
// let myname='Shravani'
// myname='Lad'
// console.log(myname);

// const word='read';
// word='write';
// console.log(word);
// will obviously give an error as const can neither be re-assigned nor re-declared

/**When to use what?
 * var- not used these days. as u can bymistakenly redeclare the same variable.
 * let- if the value can change in future
 * const- if we don't want the value to change ever.
 */
//-----------------------------------------------------

/**VARIABLE NAMING CONVENTION
*/

//1. Variable name can only be made up of alphabets, alphabets + numbers, two signs-$ or _
// let variable;
// let var23;
// let _;
// let $;
// let number_2;
// let userName;

//2.Use camel casing
// let userID;
// let userHomeAddress;

//3. Variable name should make sense and correspond to what type of data is stored in it
// let userNumber;
// let userDept;

//4. Variable names in JS are case-sensitive
