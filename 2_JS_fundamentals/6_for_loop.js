/**for loop 
 * for(initializing, condition, incremental / decremental)
*/
//Print hello 10 times
// for(let i = 1; i<=10; i++){
//   console.log(`Hello...${i}`);
// }

// //Print each letter of a string in a new line.
// var userName = "Shravani Lad"
// const len = userName.length;
// for(let i=0; i<len; i++){
//   console.log(userName[i]);
// }


/**Nested For loops
 * one that is continuously changing becomes inner loop
 * one that is changing because of the inner loop becomes outer loop
 */

//Print tables from 1 to 10.
// for(let i=1; i<=10; i++){
//   for(let j=1; j<=10; j++){
//     console.log(`${i} x ${j} = ${i*j}`);
//   }
// }

//check if objects in the first array are present in second array.
// let arr = ['apple','mango'];
// let arr1 = ['mango','banana'];
// let arr_len = arr.length;
// let arr1_len = arr1.length;
// for(i=0; i<arr_len; i++){
//   let found = false;
//   for(j=0; j<arr1_len; j++){
//     if(arr[i]==arr1[j]){
//       console.log(`${arr[i]} found in second array at ${j} location.`)
//       found = true;
//     }
//   }
//   if(!found){
//     console.log(`${arr[i]} not found in second array`);
//   }
// }


//Print the following pattern
// *
// * *
// * * *
// * * * *
// * * * * *
// const symbol = "* "
// for(let i=1; i<=5; i++){
//   console.log(symbol.repeat(i));
// }

// //Reverse the above pattern
// for(let i=4; i>=1; i--){
//   console.log(symbol.repeat(i));
// }

//Given a range of numbers from 1 to 101, find all the even numbers.
let even = []
// for(let i=2; i<=101;i=i+2){
//   even.push(i);
// }
// console.log(even);

//another approach
// for(let i=1;i<=101; i++){
//   if(i%2==0){
//     even.push(i);
//   }
// }
// console.log(even)

//Check whether the given string contains vowels or not.
const inputString = "My name is Shravani Lad";
const vowels = "aeiou";
let found=false;
for(let i=0;i<vowels.length;i++){
  for(let j=0; j<inputString.length;j++){
    if(vowels[i] == inputString[j]){
      found = true;
      break;
    }
  }
}
if(found){
  console.log("String contains vowels!")
}