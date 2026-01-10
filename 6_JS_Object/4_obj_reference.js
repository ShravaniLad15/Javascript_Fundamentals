/**
 * Object Reference & Shallow Copy
 * Shallow Copy vs Deep Copy
 * Shallow Copy : Changing nested data affects both copies
 * Deep Copy : Changes in one copy never affect the other
 */
const person1 = {
  name: "Shravani",
  age: 20,
  address: {
    city: "Mumbai",
    state: "MH"
  }
}
// const person2 = person1;
// console.log("Original P1 : ",person1);
// console.log("Original P2 : ",person2);

// person2.name = "Sadhana";
// console.log("Updated P1 : ",person1);
// console.log("Updated P2 : ",person2);

//copy using assign
const person2 = Object.assign({},person1);
console.log(person2)
person1.age = 21 //Only person1 changes
person2.name= "Sadhana" //Only person2 changes
person2.address.city= "Pune" //Here, (in nested objects) both change, so it does not create a deep copy.
console.log(person2);
console.log(person1);