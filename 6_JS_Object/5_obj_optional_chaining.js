/**
 * Optional Chaining
 * ?. (not an opr, it is syntax construct)
 * used for nested objects
 */

const user = {
  name: "Shravani",
  age: 20,
  // address: {
  //   city: Mumbai,
  //   street: "Kalina"
  // },
  hobbies: ["Sing","Read", "Chess", "Sleep", "Code"],
  getDisplayMessage(){
    console.log("Welcome User!");
  }
}

//Problem
// console.log(user.address);//undefined
// console.log(user.address.city);//error - cannot retrieve properties of undefined

//Solution 1:
// if(user.address != undefined){
//   console.log(user.address.city);
// }else{
//   console.log("Address not found");
// }

//Solution 2:
// console.log(user.address?.city);

// user.getDisplayMessage();

// user.getDisplayAddress();//error
// user.getDisplayAddress?.();//no error
// console.log(user.getDisplayAddress?.());//returns undefined if function not present

//console.log(user.hobbies?.) // error- only works with nested *objects*