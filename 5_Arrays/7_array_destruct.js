/**
 * Destructuring Array
 * used when there are nested objects and u need a specific one of them
 */

// const numbers = [1,2,3];
// const[a,b,c] = [1,2,3];
// console.log(a)
// console.log(b)
// console.log(c)

//const[,,,courses] = [1,2,3,["html", "css", "js"]];
//another way
// const arr = [1,2,3,["html", "css", "js"]];
// const[,,,courses] = arr;
// console.log(courses);

const arr1= [["html", "css", "js"],1,2,3,4];
const[courses1, ...rest] = arr1;
console.log(arr1);
console.log(courses1);
console.log(rest);

/**Swap numbers */
let a = 10;
let b = 15;
[a,b] = [b,a];

console.log("a =",a);
console.log("b =",b);
