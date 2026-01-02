/**
 * indexOf Method
 */
const displayMsg = "I am an aspiring software developer"
// console.log(displayMsg.indexOf("d"));
// console.log(displayMsg.indexOf("s",10)); //starts searching from 10 
// console.log(displayMsg.indexOf("b")); // -1, since b is not present

//function to find char
// function findCharacter(text, char){
//   let index =  text.indexOf(char);
//   if(index === -1){
//     return "Char not found";
//   }else{
//     return index;
//   }
// }

//arrow function
let findCharacter = (text, char) => text.indexOf(char) === -1 ? "char not found" : text.indexOf(char);


let result = findCharacter(displayMsg,"z");
console.log(result);
let result1 = findCharacter(displayMsg,"f");
console.log(result1);
