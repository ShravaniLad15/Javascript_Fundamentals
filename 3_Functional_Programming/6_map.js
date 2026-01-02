/**Map - advanced version of object 
 * key types
 * key order
 * size
 * iteration
 * performance(insertion, deletion)
 */

//declaration of a map
const newMap = new Map();
// console.log(newMap);

//adding values-> newMap.set(key,value)
newMap.set(1,'apple');
newMap.set(10,'peach');
// console.log(newMap);

// //getting values-> newMap.get(key)
// console.log(newMap.get(1));

// //deleting values-> newMap.delete(key)
// newMap.delete(1);
// console.log(newMap);

//finding size -> newMap.size
console.log(newMap.size)

console.log(newMap.keys(),newMap.values())

//for each:
newMap.forEach((value) => {
  console.log(value)
})

//to check is a value exists
console.log(newMap.has(10));
console.log(newMap.has(11));

