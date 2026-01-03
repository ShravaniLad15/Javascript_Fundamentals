/**
 * Array Sort 
 * 
 */

// const fruits = ["apple","cherry", "orange", "banana","mango", "melons"];
// console.log(fruits);
// fruits.sort();// sorts in chronological order
// console.log(fruits); 

const nums = [1,4,3,5,7,6,11,41,31,61]
nums.sort(); //problem -> converts the num into string -> acts similar to sorting of aphabets ->1, 11, 3, 31, 4, 41,  5, 6, 61, 7
console.log(nums);
//How to solve this problem ->
function sortAscending(a,b){
  return a-b
}
nums.sort(sortAscending); 
/**What it does :
 * If Diff (a,b) -> positive : it swaps them
 * if diff(a,b) -> negative/0 : does not swap 
 */
console.log(nums);