/**
 * String Methods
 * charAt() | charCodeAt()
 */
const displayMsg = "I am an aspiring Software Developer"
// const index = 20;
// console.log(displayMsg.charAt(index)); //t
// console.log(displayMsg.charAt()); //I
// console.log(displayMsg.charAt(100)); //index beyond the string length - empty string


//charCodeAt -  gives ASCII code of a char
// const indexASCII = displayMsg.charCodeAt(index)
// console.log(`The ASCII code of ${displayMsg.charAt(index)} is ${indexASCII}`); //116

// for(let i=0; i<displayMsg.length; i++){
//   let char = displayMsg.charAt(i);
//   let charCode = displayMsg.charCodeAt(i);
//   console.log(`The ASCII code of ${char} is ${charCode}`);
// }

/**
 * exercise to encode ->
 * geeks --> iggmu
 */
let msg ="geeks";
let newmsg ="";
for(let i=0; i<msg.length; i++){
  let msgASCII_encoded = msg.charCodeAt(i) + 2;
  let newChar = String.fromCharCode(msgASCII_encoded);
  newmsg = newmsg + newChar;

}
console.log(`${msg} converted to ${newmsg}`);




