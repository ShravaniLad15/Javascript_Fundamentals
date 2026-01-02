/** 
 * Ternary Operators
 * --> condition ? yes : no
 */

//Normal way
const totalMarks = 50;
// if(totalMarks > 35){
//   console.log("You passed the exam!");
// }else{
//   console.log("You failed the exam");
// }

//using ternary opr
// (totalMarks < 35) ? console.log("You failed") : console.log("You passed.")

//optimizing
// const totalMarks1 = 20
// const result = totalMarks1 > 40 ? "You passed" : "You failed"
// console.log(result);

/**Excercise: */
// if(totalMarks < 35){
//   console.log("F");
// }else if(totalMarks < 60){
//   console.log("C");
// }else if(totalMarks < 80){ 
//   console.log("B");
// }else{
//   console.log("A")
// }

const result = totalMarks < 35 ? "F" : totalMarks < 60 ? "C" : totalMarks < 80 ? "B" : "A";
console.log(`You scored ${result} grade.`);
//Note: In ternary operator, there always needs to be an "else" condition.