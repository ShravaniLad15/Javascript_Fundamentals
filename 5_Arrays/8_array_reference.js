/**
 * Copying an Array - -> Array Reference
 */

// let arr1 = [1,2,3]; //Is referring to memory loc - abc1234;
// let arr2 = arr1; // points to the same memory loc. Therefore updating or making a change in the second array will change the value at the memory location. Since both point to same loc both the variables' value will be changed. 

// console.log("Arr1 -",arr1);
// console.log("Arr2 -",arr2);

// arr2.push(4);
// console.log("Updated arr2 -",arr1);//1,2,3,4
// console.log("Updated arr2 -",arr2);//1,2,3,4

// //Solution - Spread Opr

// let arr3 = [...arr1];
// console.log("arr3 -",arr3);
// arr3.push(5);

// console.log("Updated arr1 -",arr1);//1,2,3,4
// console.log("Updated arr3 -",arr3);//1,2,3,4,5

//using for loop
let arr4 = [1,2,3,4];
let arr5 = [];

for(let num of arr4){
  arr5.push(num);
}
arr5.push(19);
console.log("Arr4 -",arr4);//[ 1, 2, 3, 4 ]
console.log("Arr5 -",arr5);//[ 1, 2, 3, 4, 19 ]


