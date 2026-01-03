/**
 * pop, slice, splice 
 */

// let courses = ["html", "css", "js", "reactjs", "jquery","vue.js", "angular"]
// console.log("Courses : ",courses);
// let removedItem = courses.pop(); //deletes the last element
// console.log("Removed Item :", removedItem);
// console.log("Updated Courses :", courses);

// courses.pop();
// console.log("Updated courses again-", courses);

//Slice - returns shallow copy , to return specific elements
//arr.slice(start,end) -> start included, end not included

// let value = courses.slice(3,4) //starting from 3 till 4, 4 not included
// console.log(value);
// let value1 = courses.slice(1,4); //1 to 4; 1 included, 4 not included
// console.log(value1);

// let userName = "sHRAVANI";

// let firstUpperCaseChar = userName[0].toUpperCase();
// let capitalizedName = firstUpperCaseChar + userName.slice(1).toLowerCase();
// console.log(userName)
// console.log(capitalizedName);

/**
 * Splice - can delete elements from array and if needed can replace them with others
 * arr.splice(start, no. of elements)
 */
// courses.splice(4,2)
// console.log(courses);
// courses.splice(4,100); //will only remove elements present starting from 4.
// console.log(courses);

// courses.splice(3,0,"angular"); //inserting at index 3, without removing anything
// console.log(courses);

// courses.splice(2,5,"python");//delete from 2 to 5, add python
// console.log(courses);

/**
 * arr.includes(any)
 */

const availableSize = ["S", "M", "L", "XL", "XXL", "XXXL"];
const readLineSync = require("readline-sync");
const userSize = readLineSync.question("Which size shirt do you want?(S/M/L/XL/XXL/XXXL) : ");
if(availableSize.includes(userSize.toUpperCase())){
  console.log("Size is available");
}else{
  console.log("Sorry! Size not available");
}

