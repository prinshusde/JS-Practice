console.log("This")

//console.log(this)

// this within function refers to the owner of of the function or object which call this function.
// Arrow functions do NOT have their own this.
// They inherit this from the surrounding (lexical) scope or parent or outer scope (usually window)
// const user = {
//   name:"Prince",
//   age:25,
//   myDetails:function(){
//     // this points to current user object
//     console.log(this)
//   },
//   getDetails(){
//     console.log("Name: ",this.name)
//   },
//   childObj:{
//     newName:"Hello",
//     getDetails(){
//       // this points to childObj
//     console.log(this.newName,this.name)
//   },
//   },
//   getMyName:()=>{
//     // this inside arrow function referes to global object
//     console.log(this)
//   },
//      getMyNames:function(){
//        const nestedFun = ()=> {
//         // this inside arrow function referes to parent  object
//     console.log(this.name)
//        }
//        nestedFun()
//   }
// }

// // user.childObj.getDetails()
// // user.myDetails();
// user.getMyNames()
// user.getMyName()

// class user {
//   constructor(name){
//       this.name=name;
//   }
//   getName(){
//     console.log(this.name)
//   }
// }

// const users = new user("Prince")

// console.log(users)

// users.getName()


// Question 2 : this inside Method

// let user = {
//     name: "Piyush",
//     age: 24,
//       getDetails() {
//           console.log(this.name)
//       }
// };
  
// user.getDetails(); 


// Question 6 : What is the result of accessing its `ref`? Why?

// function makeUser() {
//     return {
//       name: "John",
//       //ref: this
//       ref: function(){
//         return this
//       }
//     };
// }
  
// let user = makeUser();
  
// console.log( user); // What's the result?
// console.log(user.ref().name); // What's the result?


// Question 7 : What logs to console the following code snippet:

// const user = {
//     name: 'Piyush Agarwa;!',
//     logMessage() {
//       console.log(this.name); 
//     }
// };

//user.logMessage()
// You are passing the function reference
// NOT calling it as user.logMessage()
// Now it's just a normal function call, not tied to user
//setTimeout(user.logMessage, 1000);
// soluction to above is

// setTimeout(function(){
//   user.logMessage()
// }, 1000);



// Question 8 : Output

// const user = {
//     name: 'Piyush',
//     greet() {
//       return `Hello, ${this.name}!`;
//     },
//     farewell: () => {
//       return `Goodbye, ${this.name}!`;
//     }
// };
// console.log(user.greet());    
// console.log(user.farewell());


// Question 9 :

// let calculator = {
//     read(a,b){
//       this.a=a;
//       this.b=b;
//     },
//     sum(){
//       return this.a+this.b
//     },
//      mul(){
//       return this.a*this.b
//     }
// }


// calculator.read(10,20);
// console.log(calculator)
// console.log( calculator.sum() );
// console.log( calculator.mul() );

// Question 10 : Output

// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method(callback) {
//     // callback();
//     console.log(arguments)
//     arguments[0]()
//   }
// };
// object.method(callback, 1, 2);


// Question 11 : Implement this Code

const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total);

// My Answer
var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

