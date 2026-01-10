/**Object Methods :
 * existence => property in object ? true : false
 */

//Existence
const student = {
  name: "Shravani",
  age: 20,
  city: "Mumbai"
}
// const isPropertyFound = "name" in student;
// console.log(isPropertyFound);

// for(let key in student){
//   console.log(key,student[key]);
// }


//entries -> return an array of arrays of key and value pairs-> [['key1','value1'],['key2','value2']]
const entries = Object.entries(student);
console.log(entries);

//keys->returns an array of keys
const keys = Object.keys(student);
console.log(keys);

//values->returns an array of values
const values = Object.values(student);
console.log(values);

