console.log("Functions in JS")

//Q1 - What is function Declartion or function statement?
// Ans- 
// function myFunction(){

// }


// Q2 - What is function expression?
// Ans - When we store function inside a variable
//Note: The difference between function declaration and function expression is that
//  function declaration is hoisted to the top of the code, while function expression is not hoisted.

// const multiply = function(a,b){
//     return a*b;
// }


//Q3 - What are first class functions?
//Ans - The ability to use function as values and pass to another function and
//  return from another function is called first class functions.


// Q4 - What is IIFE

// ((function() {
//     console.log("IIFE executed");
// })());


// Scope

// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// }

//Output - 0,1,2,3,4, because let have block scope


// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// }

//Output - 5,5,5,5,5, because var have function scope

// This var is declared inside global scope
//var a=20

// function test(){
//     console.log(a)
// This var is declared inside local scope and it will shadow the global variable
//     var a=21;
// }

// test()


// function test(){
//     // In this case, one one var variable is created in local scope and both points to same 
//     var a=20
//     if(true){
//             console.log(a)
//     var a=21;
//     }

// }

// test()

//Spread VS Rest
// Rest operator
// function sum(...nums){
//   console.log(nums)
// }

// let arr = [3,4,5,6]

// sum(1,2,...arr) //Spread operator


// Uncaught SyntaxError: Rest parameter must be last formal parameter

// Rest and spread should always be last one
// const fn = (a, x,...numbers,y, ) => {
//     console.log(x, y)
// };
// fn(5,6,7,8);

//CallBack Function:A callback function is a function passed into another function
//  as an argument, which is then invoked inside the outer function to complete some kind of routine or action.


// Question 9 : Arrow functions
// Arrow have implicit return feature.
// We can not have arguments keyword inside arrow function
// const myFuc = ()=>{

// }

// arguments keyword
// Normal function have arguments array
// function funArr(){
//     console.log(arguments)
// }

// funArr(1,2,3,4,5) //Output - [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }



// Question 10 : this

let user = {
    name: "Roadside Coder",
    //this inside arrow function points to the parent object
    rc1: () => {
      console.log("Subscribe to " + this.name);
    },
    // this inside normal function points to current object
    rc2() {
      console.log("Subscribe to " + this.name);
    },
};

user.rc1()
user.rc2()