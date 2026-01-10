/**
 * Objects -> {key: value}
 * complex data structure
 * values inside an object are called as properties
 */
const Obj = {
  name: "Shravani",
  age: 20,
  job: "Software Engineer",
  languages: ["html","js","python"],
  "is Admin": "true"
}; //Object Literal 
// //Keys will implicitly be converted to a string
// console.log(typeof(Obj));
// console.log(Obj);
// console.log(Obj.name);
// // console.log(Obj.is Admin);//Error
// console.log(Obj["is Admin"]);
// console.log(Obj["job"]);



/**
 * Function as Object Property
 */
// const funObj = {
//   name:"Shravani",
//   greetMessage: function(){//anonymous function
//     console.log(`Hello ${funObj.name}! Welcome!`);
//   },
//   bye(){
//     console.log("Leaving already? Sorry to see you go :(")
//   }
// }
// console.log(funObj);
// funObj.greetMessage();
// funObj.bye();



/**
 * Adding Property to Object
 * Computed Property
 */
Obj.city="Mumbai";
Obj.state = "MH";
console.log(Obj);

const readLineSync = require("readline-sync");

// const key = readLineSync.question("What do u want to know about the admin?(name/age/city/state/job) : ");
// console.log(`Admin's ${key} is ${Obj[key]}`);

// Obj.skills = ["Development","ML","Analytics"]
// const skill = readLineSync.question("What skills do you need the admin to have? : ");
// if(Obj.skills.includes(skill)){
//   console.log("Admin is eligible");
// }else{
//   console.log("Admin is not eligible");
// }

const info = readLineSync.question("What other info do you need? : ")// eg : phone number
Obj[info] = "not available"
console.log(Obj[info]);
console.log(Obj);
