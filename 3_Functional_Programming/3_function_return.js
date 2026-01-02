/**Function
 * returns
 */

function calculateSum(x, y){ //Pure Function
  let sum = x+y;
  return sum;

}
console.log(calculateSum(12, 15));

const result = calculateSum(30, 20);
console.log(result);

//Pure Function -> A function that always accepts a param, returns a value, and does not change the datatype of the value accepted/ does not change the value.
// Never do console.log inside a function.