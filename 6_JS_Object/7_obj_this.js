/**
 * this keyword
 * Refers to the object that is executing the function
 */
// const obj ={
//   name: "Shravani",
//   displayMessage(){
//     console.log(this);
//   }
// };

// obj.displayMessage(); //returns the whole obj


// function calculateSum(){
//   console.log(this);
// }
// calculateSum(); 

// console.log(this)//returns window obj
/**When this key word is used in a function that is not being executed by an object
 * it returns a window object
 * Window OBj - a global obj
 */

/**
 * Try the following in browser console
 * window.alert("Hey Hiii");
 * this.alert("Hey Hiii");
 */

//Example
// const user1 = {
//   name: "Shravani",
//   showName(){
//     console.log(this.name);
//   }
// }
// const user2 = {
//   name: "Sadhana",
//   showName(){
//     console.log(this.name);
//   }
// }
// const user3 = {
//   name: "Sachin",
//   showName(){
//     console.log(this.name);
//   }
// }
// user1.showName();
// user2.showName();
// user3.showName();


//Arrow functions inside an object
// const user4 = {
//   name: "Shravani",
//   showName: ()=>{
//     console.log(this.name);
//   }
// }
// user4.showName();
//Since arrow functions do not point to the object that is executing them, here "this" keyword will return global function



//function inside a function inside an object
// const user5 = {
//   name: "Shravani",
//   showName(){
//     function showMessage(){
//       console.log(this);
//     }
//     showMessage();
//   }
// }
// user5.showName(); //Returns global function

//ex -01
// function displayName(){
//   console.log(this);
// }
// const admin = {
//   name:"Shravani",
//   displayName
// };
// admin.displayName(); // o/p -> { name: 'Shravani', displayName: [Function: displayName] }

//ex-02
// function displayName(){
//   console.log(this);
// };
// const admin2 = {
//   name:"Shravani",
//   showName: function(){
//     displayName();
//   }
// };
// admin2.showName(); //window function (global)

//ex- 03
// const displayName = ()=>{
//   console.log(this);
// };
// const admin3 = {
//   name:"Shravani",
// };
// displayName.apply(admin3) //object calls function
// //o/p ->window since the function is arrow function

//ex- 04
const person = {
  name:"Shravani",
  sayHi: function(){
    console.log(`Welcome ${this.name}`);
  },
};
let person2 = person.sayHi;
console.log(person2); //[Function: sayHi]
person2(); //Welcome undefined