/** 
 * Arrow Function
 */
//normal function
// const calculateSum = function(x,y){
//   return x+y;
// }
// console.log(calculateSum(10,12));

//fat arrow function
// const addition = (x,y) =>{
//   return x+y;
// }
// console.log(addition(20,30));

/**
 * Advantages:
 * 
 */

//Value of the exp can be automatically returned in the following manner
// const add1 =(x,y) => x+y;
// console.log(add1(10,30));

const sum1 = (x,y) => x>y ? x-y: x+y; //using ternary opr
let sum11 = sum1(10,20);
console.log(sum11);
let sum12 = sum1(40,20)
console.log(sum12);
