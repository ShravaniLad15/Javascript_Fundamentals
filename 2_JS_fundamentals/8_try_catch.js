/**try catch block
 * 
 * try{
 *   some line of code...
 * }catch(error){
 *   console.log(error)
 * }
 */

let userName = "Shravani"
// console.log(myName);
// console.log(userName);
//the above code gives error - since myName is not declared, even tho the line after it can be correctly executed.
//Here, try-catch is used.

// try{
//   console.log(myName);
// }catch(err){
//   console.log("error occured!");
// }
// console.log(userName);

/** 
 * Try- tries the code block. If it executes successfuly, moves out of the try-cactch block and continues ahead.
 * If try block throws an error- Catch block catches it and handles it.
 * But even after catching an error, the execution continues to the next line.
 */


try{
  someFunction();

}catch(error){
  console.log(error.name); //Error type
  console.log(error.message); //Error message
  console.log(error.stack); //Name + Message + Where the error occured.
}finally{
  console.log("Finally Executed!");
}
console.log(userName)
