const x = 12;
const y = 3;

console.log(x + y); //addition operator

console.log(x - y); //subtraction operator

console.log(x * y); //multiplication operator

console.log(x / y); //division operator

console.log(x % y); //modulus operator

console.log(x ** 2); // power operator

console.log(x ** y);

//If we make x and y strings then only addition opr will change as it'll then act to concatenate --> output = 123. Rest all will stay the same as JS converts them into numbers.
// If we make only one of them into string, the result will stay the same as the point before.
// If we make:
let a = "Mango"
let b = "apple"
console.log(a + b); //Concatenation takes place

console.log(a - b); 

console.log(a * b); 

console.log(a / b); 
//rest all gives value NaN