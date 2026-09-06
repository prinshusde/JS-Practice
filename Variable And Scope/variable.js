console.log("Hello Variables")

//Scope
//Scope is certain region of a program where defined variables exist can be recongnined and beyond scope can not
// The scope is the current context of execution in which values and expressions are "visible" or can be referenced.
//  If a variable or expression is not in the current scope, it will not be available for use.
//   Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

//Types Of scope

//1. Function scope

// function af(){

    
// }


// 2. Block Scope

{

}

// 3. Global scope: The default scope for all code running in script mode.

// This Is in global scope
// Var is function scope
// var a=5

// console.log(a)

// var → attaches to global object
// let/const → stay in script scope, not on global object


// var x = 10;
// let y = 20;

// console.log(window.x); // 10
// console.log(window.y); // undefined ❗



// Let and const are block scope, but var can be access outside of block

// {
//     var a=5;
//     let a=10;
//     const b=10;
// }

// Getting Uncaught ReferenceError: a is not defined. for let and const
 //console.log(b)


 // Shadowing
 /*Variable Shadowing: When a varibale declared in a inner scope(like inside of a function or block)
  has same name as a variable in an outer scope. The inner variablle "Shadows"(hides) outer one within the scope  */

  /*Block Scope Shadowing: 
  -> let and const have block scope shadowing
  -> Variable declared within block have block scope and in the function has local scope and in global have script scope.
  -> var variable declared out of block and declared inside of block {}, point to the same variable.
   Only one variable will be created inside global scope & both points to the same.
  -> In case of function scope, function var has function scope & outer have there own different scope
   */

//  function test(){
//     let a="Hello"

//     if(true){
       // this a variable shodows  above a
//         let a="Hii"
//         console.log(a)
//     }
//     console.log(a)
//  }

//  test()

 // While shadowing, it can not cross boundry of scope. That is we can shadow var variable with let but can not do opposite
 // IF we try to show let by var then it is illegal shadowing


//   function test(){
//     var a="Hello"
//     let b="bye"

//     if(true){
//         let a="Hii"
//         // illegal shadowing, can not do let by var
//         var b="GoodBye"
//         console.log(a)
//         console.log(b)
//     }
    
//  }

//  test()


// Declaration

// var can be redclare in same scope
// var a;
// var a
// let and const can not redeclared in same scope
// let a
// let a

// Declaration without initialisation

// const can not declare without initialization and give errror "Missing initializer in const declaration"
//const a;

// Re- Initailization

// Can not re-initialization const and throw error "Uncaught TypeError: Assignment to constant variable."
// const a=5
// a=10



// Hoisting 

/*During creation phase, JS engine move variable declaration and functions at top of code and this is knows as Hoisting */



/*
JavaScript code is executed in two steps. First step is the memory creation phase and second is the execution step.
When js code runs, a Global execution context is created and there is two part of execution context.
First one is "memory creation phase" and second is "code execution phase".
-> When GEC is created, this is created along with it, even for the functional execution context

1. Memory Creation

In creation step, 3 things happents, first it create window or global object.
Global object: The global object is a real JavaScript object that holds globally accessible things.
Anything declared globally becomes a property of this object
In browsers → window
In Node.js → global
Modern standard → globalThis (works everywhere)
👉 Inside the Global Execution Context, this points to the global objec

👉 Window is a global object which is created along with the global execution context.
 And window is equivalent to this. When a JS code is run, a global execution context is created.
  A global object window is created, and along with that this variable is created.

In second step, it setups memory heap  for variables and fucntion references, it takes variables and functions and
 store inside window object

In Third step, it initialises those variables undefined  and functions with there defenition 


1. Code execution

-> In this phase, program is executed line by line, assgning values to variables and execute function call
-> Functions are works like a new program in JavaScript. When a function is invoked,
 a new execution context is created altogether, and memory is allocated to parameters,
  variables in functions. When all line is executed in a program,
   then all execution contexts will be deleted. When all line is executed, then global execution context will be deleted also.

*/

// console.log(a)
// var variable is declared and hoited in global scope
// var a=10


// let and const are declared in script scope and it is in Temporal Dead Zone also
/*
Temporal Dead Zone: It is time since when this let and const variables was hoisted & till initialized some value to it,
 the time b/w that is call is called Temporal Dead Zone.
 When try to access variable in TDZ, it will give ReferenceError, Cannot access 'a' before initialization
*/
console.log(a)
const a=10

