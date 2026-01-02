/**
 * uppercase() and lowercase()
 */

const msg = "I am Shravani, studying in UMIT";
console.log(msg);
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());

//Counting vowels in a string
const vowels = "AEIOU"
let containsVowel= false
let vowelCount = 0;
for(let char of msg.toLowerCase()){
  if(vowels.includes(char) ){ //chaining of methods -> vowels.toLowerCase().includes(char.toLowerCase())
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


/**
 * sub string method
 * use cases - responsive design
 * video streaming - yt titles show substring
 * other method - slicing
 */
const userName = "Rory Lorelai Gilmore";
const subString = userName.substring(0,10); //substring (x,y)-> x included, y excluded.
console.log(subString + "...");


/**
 * String.trim()
 * used to remove leading and trailing spaces.
 */
const text = "             Hola! I love Javascript        "
console.log(text);
console.log(text.length); //44

const trimmedText = text.trim();
console.log(trimmedText);
console.log(trimmedText.length);//23
console.log(text.trim().substring(0,5)+"....");//methods chaining


