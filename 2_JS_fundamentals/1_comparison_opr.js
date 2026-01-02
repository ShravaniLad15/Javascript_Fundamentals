/** Comparison Operators*/
// console.log(50 < 30); //false
// console.log(30 >= 30);//true
// console.log(10 == 10);//true
// console.log(10!=10); //not equal to

// console.log("apple" > "banana");//false
// //checks based on order

// console.log("cat" > "banana");//true as c comes after b i.e. its ascii index is greater than that of b

//console.log("2" < 3);//true

//console.log("01" == 1); //true

/**String Equality */

//console.log("01" === 1); //false

// console.log(null == undefined); //true
// console.log(null === undefined); //false

// console.log(null < 1); //true
// console.log(null > 0);//false
// console.log (null == 0); //false- here null is null and 0 is actually a value

/**
 * == → Loose Equality (Abstract Equality)
Compares values only (after doing type conversion if needed). If the types are different, JavaScript tries to convert them into the same type and then compare.
 * === → Strict Equality
Compares both value and type. No type conversion happens.
 */