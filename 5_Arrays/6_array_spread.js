/**
 * spread -> unpacking the array
 * ...arr
 * used when u do not want to mutate original array
 */

const arr = [1,2,3,4,5];
// console.log("Array : ", arr);// [1,2,3,4,5]
// console.log(...arr); // 1 2 3 4 5

const arr2 = [6,7,8,9];
const arr3 = [...arr, ...arr2, 10, 11];
console.log(arr3);