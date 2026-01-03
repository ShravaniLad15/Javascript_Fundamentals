/**
 * Arrays -> non-primitive data type
 */
//let studentName1 = ["Shravani", "Midhat", "Roshani","Prachi", "Vedika", 1, 2, 3, ["HTML", "CSS","JAVASCRIPT"], {schoolName: "UMIT"}]

let studentName = ["Shravani", "Midhat", "Roshani","Prachi", "Vedika"]
// console.log(studentName);
// console.log(studentName[1]);
// for(let i=0; i<studentName.length; i++){
//   console.log(studentName[i]);
// }

// for let of - gives elements

// for(let name of studentName){
//   console.log(name);
// }

/** for let in - gives index*/

for(let name in studentName){
  console.log(name)
}
