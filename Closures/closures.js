console.log("Closures")


/*
Closures: A closure is the combination of a function bundled together (enclosed) with references to
 its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope.
 In JavaScript, closures are created every time a function is created, at function creation time.
-> Functions along with lexical scope forms closures.
*/

// Lexical Environment: Lexical environment is the local memory along with lexical environment with its parent.
//-> When ever execution context is created, a lexical environment is also get created.
//-> Scope is direcly related to lexicl environment
// Execution Context have tree parts
// 1. Lexical Environmen:
// Lexical Environmen have two parts:
// i. Variable Environment: It is used to store variable and function declarations.
// ii. Refrence: Refrence to the parent lexical environment. 
// 2. this
// 3. metadata


// Question 1 : Lexical Scope

// Ans - Lexical scope in JS means variables defined outside of a function can be accessibles inside a another function
//  after a variable  declaration
// global scope
//     var username = 'Roadsidecoder'
// function local(){
//     // local scope

//     console.log(username)
// }
// local()


// Question 2 : Closure

// function makeFunc() {
//     var name = 'Mozilla';
//     // displayName() is the inner function, a closure
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc()



// Question 3 : Closure scope chain 


// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20


// Question 4 : Output

// let count = 0;
// (function printCount(){
//     if(count === 0){
//         let count = 1;//shadowing
//         console.log(count); //1
//     }
//     console.log(count);// 0
// })();


// Question 5 : Write function for this addSix()

// function createBase(base){
//    return (num)=>{
//        return base+num;
//    }
// }


// var addSix = createBase(6);
// console.log(addSix(10));  // returns 16
// console.log(addSix(21)); // returns 27



// Question 6 : Time Optimization

// function find(index) {
//     let a = [];
//     for (let i =0;i<1000000;i++){
//         a[i]= i*i;
//     }

//      console.log(a[index]);
// }
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("50");
// find(50);
// console.timeEnd("50");


// optimized above jusing closures

// function find() {
//     let a = [];
//     for (let i =0;i<1000000;i++){
//         a[i]= i*i;
//     }
//     return function (index) {
//         console.log(a[index]);    
//     }

// }
// const closure = find();
// console.time("6");
// closure(6);
// console.timeEnd("6");
// console.time("50");
// closure(50);
// console.timeEnd("50");



// Question 7 : Block scope and set Time out


// function a() {
//     for (var i =0;i<3;i++){
//         setTimeout(function(log) {  
//             console.log(i)  // 0,1,2
//         }, i*1000);
//     }
// }
// a();


// How to solve avove with clousers

// function a() {
//     for (var i =0;i<3;i++){
//         function inner(i){
//              setTimeout(function(log) {  
//             console.log(i)  // 0,1,2
//         }, i*1000);
//         }

//          inner(i)
        
//     }
// }
// a();



// Question 8 : How would you use a closure to create a private counter?

// function counter() {
//     var _counter = 0;

//     function add(increment) {
//         _counter += increment;
//     }

//     function retrive() {
//         return "Counter = " + _counter;
//     }
    
//     return {
//         add,
//         retrive
//     };
// }
// const c = counter();
// c.add(5)
// c.add(10)
// console.log(c.retrive());



// Question 8 : Module Pattern : 

// var module = (function (){
//     function privateMethod(){
//         console.log("private");
//     }
//     return {
//     publicMethod : function(){
//         console.log("public");
//     }
// };
    
// })();
// module.publicMethod();
// module.privateMethod();


// Question 9 : Make this run only once


// let view;
// function Like() {
//     let called = 0;

//     return function(){
//         if (called > 0){
//             console.log("Already")
//         }else{
//             view= "Roadsidecoder";
//             console.log("Subscribe", view);
//             called++
//         }
//     };
// }
// let isSub = Like();
// isSub();
// isSub();
// isSub();
// isSub();


// Question 10 : once Polyfill 

// function once(func,context) {
//     let ran;

//     return function(){
//         if(func){
//             ran = func.apply(context || this, arguments);
//             func = null
//         }
//         return ran;
//     };
// }
//  const hello = once((a,b)=>{
//     console.log("Hi",a,b)
// })
//  hello(1,2);
//  hello(1,2);
//  hello(1,2);
//  hello(1,2);


// Question 11 : Memoize Polyfill 

// function myMemoize(fn,context) {
//     const res = {};
//     return function(...args){
//         var argsCache = JSON.stringify(args);
//         if(!res[argsCache]){ 
//             res[argsCache] = fn.call(context || this, ...args);
//         }
//         return res[argsCache];    
//     };
// }

// const clumsyProduct = (num1,num2) => {
//     for (let i = 1; i <= 100000000; i++) {
//         return num1 * num2;    
//     }
// }

// const MemoizeClumsyProduct = myMemoize(clumsyProduct);

// console.time("First call");
// console.log(MemoizeClumsyProduct(9467,7649));
// console.timeEnd("First call")

// console.time("Second call");
// console.log(MemoizeClumsyProduct(9467,7649));
// console.timeEnd("Second call");



// Question 12: closure VS scope

// Ans - When we create a function within another function then the inner function is closure, this closure is returned
// and we can use outer variable any time