/**Array Methods - Push & Concat */

/**
 * Mutable Objects - that can be modified/changed. eg : array
 * Immutable Object - that cannot be changed eg : string
 */

// let Bag = ["apple","mango","banana"]
// console.log(Bag);
// Bag.push("berries");

// Bag.push("kiwi","guava","melons");
// console.log(Bag)


/**Concat */
let arr1 = [1,2,3]
let arr2 = [4,5]
let arr3 = [6,7,8]
let arr4 = arr1.concat(arr2);
let arr5 = arr1.concat(arr2,arr3)
console.log(arr4);
console.log(arr5)