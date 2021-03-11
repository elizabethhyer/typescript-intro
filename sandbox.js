// let character = "luigi";
// let age = 30;
// let isBlackBelt = false;
// // You cannot reassign values with a different type
// // character = 20;
// character = "mario";
// // age = 'luigi';
// age = 40;
// // isBlackBelt = 'yes'
// isBlackBelt = true;
// console.log(character);
// const inputs = document.querySelectorAll("input");
// inputs.forEach((input) => {
//   console.log(input);
// });
// // const circ = (diameter) => {
// //   return diameter * Math.PI;
// // };
// // console.log(circ("hello")); // NaN
// // We can still run this even though the argument doesn't make sense
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(7.5)); // 23.561944901923447
// // Type script allows us to type check during development, leading to less errors in the browser
// // ARRAYS
// let names = ["luigi", "mario", "yoshi"];
// names.push("toad");
// // names.push(23); // Argument of type 'number' is not assignable to parameter of type 'string'
// // Whenever we get one of these errors, it will NOT compile the code into JavaScript
// let numbers = [10, 20, 30, 40];
// numbers.push(25);
// // numbers.push("liz"); // Argument of type 'string' is not assignable to parameter of type 'number'
// let mixed = ["ken", 4, true, 10, "liz"];
// mixed.push("ryan");
// mixed.push("15");
// // This will work if the array is declared with mixed types at the start
// // OBJECTS
// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 30,
// }; // These work the same as variables. Once a property is declared as a certain type, it cannot be changed.
// // ninja.skills = ["fighting"]; //Property 'skills' does not exist on type '{ name: string; belt: string; age: number; }'.
// // Also, once we have defined an object, we cannot add new properties to it.
// ninja = {
//   name: "yoshi",
//   belt: "white",
//   age: 68,
//   // skills: "fighting", //Type '{ name: string; belt: string; age: number; skills: string; }' is not assignable to type '{ name: string; belt: string; age: number; }'.
//   // // Object literal may only specify known properties, and 'skills' does not exist in type '{ name: string; belt: string; age: number; }'
// }; // We can overwrite the object, but it has to be the same structure as the original object
// // explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// // Now we can still assign the variable after the fact, but still control the type when we declare it.
// // arrays
// let ninjas: string[] = [];
// ninjas.push("shaun");
// // union types
// let mixed: (string | number)[] = [];
// mixed.push(20);
// mixed.push("liz");
// // mixed.push(false); // Type '{ name: string; belt: string; age: number; skills: string; }' is not assignable to type '{ name: string; belt: string; age: number; }'.
// let uid: string | number; // We need the parenthesis if we are declaring an array as a union type, but we do not need it for normal variables
// // objects
// let ninjaOne: object;
// ninjaOne = { name: "yoshi", age: 30 };
// let ninjaTwo: {
//   name: string;
//   age: number;
//   beltColor: string;
// };
// // Any types
// let age: any = 25;
// // Let age be any type in the future, but initialize it as a number
// age = true;
// console.log(age); // true
// let mixed: any[] = [];
// mixed.push(2);
// mixed.push("mario");
// mixed.push(true);
// console.log(mixed); //  [2, "mario", true]
// let greet = () => {
//   console.log("hello world");
// };
// greet = "hello world"; //  [2, "mario", true]
// let greet: Function // Must be declared with a capital 'F'
// // Optional parameters
// const add = (a: number, b: number, c: number | string = 10) => {
//   console.log(a + b);
//   console.log(c);
// }; // return is void, which is different than undefined
// add(5, 10);
