/**
 * new keyword and constructor functions
 * Constructor functios=ns technically are regular functions. They have 2 conventions though.
 * They are named with Capital letter first.
 * They should be executed only with the new operator. 
 */
// function User(){

// }
// const user = new User();
// console.log(user); //User{} - not a function but an object.
//So User becomes a blueprint

//If u wanna create multiple users with same properties

function Student(name,age){
  (this.name = name), (this.age = age);

}

const user1 = new Student("Shravani", 12);
const user2 = new Student("Gargi", 150);
console.log(user1);
console.log(user2);