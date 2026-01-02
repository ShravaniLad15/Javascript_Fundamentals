/**
 * Set - collection of unique items.
 * unordered, no indexing.
 */

const studentID = new Set();
//methods
studentID.add(1);
studentID.add(2);
studentID.add(3);
studentID.delete(3); //deletes the value 3
//studentID.clear(); //clears the whole set
console.log(studentID.size); //length
console.log(studentID.keys());
console.log(studentID.values());
console.log(studentID.entries()); // keys and values
console.log(studentID.has(2))//true
console.log(studentID.has(5))// false
studentID.forEach((value) => {
  console.log({value});
}) //used to iterate over Set elements



//converting array to set
//  const studID = [1,2,3,4,4,4];
// const uniqueStudID = new Set(studID);
// // console.log(uniqueStudID);

// // converting set to array

// const rollNo = [...uniqueStudID];
// console.log(rollNo);
// console.log(rollNo[1]);