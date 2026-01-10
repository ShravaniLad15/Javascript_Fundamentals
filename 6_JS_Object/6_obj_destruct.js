/**
 * Destructuring Objects
 * used when there are nested objects and u need a specific one of them
 * //used in api
 */
// const user = {
//   name: "Shravani",
//   age: 20,
//   address: {
//     city: "Mumbai",
//     street: "Kalina"
//   },
//   hobbies: ["Sing","Read", "Chess", "Sleep", "Code"]
// }

//let {name,address,hobbies} = user; //use the same key names as used in the obj
//console.log(address);
// let {name, ...rest} = user;
// console.log(name);
// console.log(rest);

//If u want another variable name (usually preferred for shortening the length of variable names)
// let{name: userName, address: userAddress} =user;
// console.log(userName);
// console.log(userAddress);

// let {address : {city}} = user; //returns city
// console.log(city);

//let {name, address: {street: userStreet}, hobbies} = user;
//console.log(userStreet);




//Examples
const employees = {
  engineers: {
    e1:{
      id: 1,
      name:"Shravani",
      occupation: "Front End Engineer"
    },
    e2:{
      id: 2,
      name:"Sadhana",
      occupation: "Data Scientist"
    },
  },
    placement:{
    e3:{
      id:3,
      name:"Sachin",
      occupation: "Sr. Executive"
    },
  },
  youtube:{
    e4:{
      id:4,
      name:"Shaunak",
      occupation: "Youtube Manager"
    }
  }
  }

//let {engineers: {e2: {name,occupation}}} = employees;
//console.log(name,occupation);

let{youtube:{e4: {id,occupation}}} = employees;
console.log(id, occupation);


















