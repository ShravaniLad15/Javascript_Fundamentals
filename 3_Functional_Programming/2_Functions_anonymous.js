// Anonymous Functions & Function Expression
let anonymousFunction = function (){
  console.log("This is Anonymous Function!")
}
anonymousFunction();
console.log(typeof anonymousFunction); //function
//Note : You cannot access an anonymous function before declaring it. 


//Named Function Expression
let namedFunction1 = function named(){
  console.log("This is Named Function Expression!")
  console.log(typeof named); //function
}
namedFunction1(); //This will execute properly.
named(); //This will throw an error. Cannot be called using the function name since it is a local function.