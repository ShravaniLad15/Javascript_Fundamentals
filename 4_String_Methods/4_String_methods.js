/**
 * string.includes()
 * -> always returns boolean value
 * -> used to check whether a char/string is present in the string
 */

const msg = "I love to code in light mode"
// console.log(msg.includes("light"));//false

// if(msg.includes("light")){
//   console.log("person loves to strain their eyes");
// }else{
//   console.log("person cares about their eyes");
// }

const vowels = "aeiouAEIOU"
let containsVowel= false
let vowelCount = 0;
for(let char of msg){
  if(vowels.includes(char)){
    containsVowel = true;
    //break
    vowelCount +=1;

  }
}
if(containsVowel){
  //console.log("String contains vowels");
  console.log(`String contains ${vowelCount} vowels.`);
}else{
  console.log("String does not contain vowels");
}


