/**
 * Iterating over strings
 */
let displayMessage = "I am a student at UMIT"
// for (let char of displayMessage){
//   console.log(char);
// }

// for(let char of displayMessage){
//   if(char === "n"){
//     break
//   }else{
//     console.log(char);
//   }
// }

//find the number of a in a string
// let countA = 0;
// for (let char of displayMessage){
//   if(char === "a" || char === "A"){
//     countA+=1;
//   }
// }
// console.log(countA);


//Another way to do this - adv-> if u want to know the index as well

// console.log(displayMessage[0]);
// for(let i=0; i<displayMessage.length;i++){
//   console.log(displayMessage[i]);
// }

//break when u find n
// for(let i=0; i<displayMessage.length;i++){
//   if(displayMessage[i] === "n"){
//     break
//   }else{
//     console.log(displayMessage[i]);
//   }
// }

//finding the index of any char
for(let i=0;i<displayMessage.length; i++){
  if(displayMessage[i] === "i" || displayMessage[i] === "I"){
    console.log(`The char i/I is present at ${i} location.`);
  }
}
//freq of a char
let countI =0;
for(let i=0;i<displayMessage.length; i++){
  if(displayMessage[i] === "i" || displayMessage[i] === "I"){
    countI+=1;
  }
}
console.log(`the char i/I appeared ${countI} times.`);