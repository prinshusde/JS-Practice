console.log("Prototypes")

// Everything in Javascript is an Object
//Prototypes are the mechanism by which JavaScript objects inherit features from one another
// let obj = {
//     name:"Prinshu",
//     age:25
// }

// prototype in this object is same as Object.prototype
// we can get the same prototy of objecy by obj.__proto__

// Object.prototype and obj.__proto__ show object prototypes
//Note: every variables in JS is an object

let num = 10;
// If we do num.__proto__ then we get all the properties and methods of number in JS
let name = "Prinshu"
// If we do name.__proto__ then we get all the properties and methods of string in JS
let bool =true;
// If we do bool.__proto__ then we get all the properties and methods of boolean in JS
// Note: All Objects, String, number, Boolea has Object prototype as well

// Function is also object in js

// function add(a,b){
//     return a+b
// }

// console.log(add(2,3))