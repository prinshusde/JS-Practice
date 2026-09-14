console.log("Objects")

//In a standard JavaScript object, a key can only be a String or a Symbol
//If you use any other data type as a key, JavaScript will automatically coerce (convert) it into a string behind the scenes

// const user = {
//     name:"prince",
//     age:20,
//     "this is me":true,
//     10:"hello",
//     _a:"hii"
// }

// delete property

//delete user.age

//console.log(user)
// console.log(user[10])
// console.log(user._a)
// console.log(user["this is me"])

// How to add Dynamic property

// const property = "firstName";
// const name = "Prince"

// const user = {
//     [property]:name
// }

// console.log(user)
// console.log(user.firstName)

// How to loop over object

// const user = {
//     name:"prince",
//     age:20,
//     "this is me":true,
//     10:"hello",
//     _a:"hii"
// }

// for(key in user){
//     console.log(key +" : "+ user[key])
// }



// Question 2 : Output
//  key with same will be replaced with latest value
// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);

// Question 3 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums"
// };

// function multiplyByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key] === "number"){
//             obj[key]=obj[key]*2
//         }
//     }
// }

// multiplyByTwo(nums)

// console.log(nums)


// Question 4 : Output (Important)

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a);
// console.log(a[b]);


// Question 5 : JSON.Stringify and JSON.parse 
// Use case: object can not direcly store into local storage
// const userOne = {
//     name : "piyush",
//     age : 87
// };



// const strObj = JSON.stringify(userOne);
// localStorage.setItem("test",strObj)
// console.log(strObj)

// console.log(JSON.parse(strObj));



// Question 6 : Output
// this is spread all of the caracters into  array 
// console.log([...'Lydia']);



// Question 7 : Output

// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };
// // this is add all the property of user into admin
// console.log(admin);




// Question 8 : Output

// const settings = {
//     username: 'lydiahallie',
//     level: 19,
//     health: 90,
//   };
//  // stringify only propertied given in array 
// const data = JSON.stringify(settings, ['level', 'health']);
// console.log(data);



// Question 9 : Output

// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
  
// console.log(shape.diameter());
// // Note: this is arrow function point to parent 
// console.log(shape.perimeter());



// Question 10 : Destructuring in object

// let user = {
//     name:"Prince",
//     age:24,
//     fullName : {
//         firstName : "Prince",
//         lastName : "Shukla"
//     }
// };
  
// const name = "Roadside Coder"    // to change name or renaming
// const {name:names} =user
// const { fullName : {firstName,lastName} } = user;// Destructuring for nested objects



// console.log(names)

// console.log(lastName);

// Question 11 : Output
// Note: rest parameters should alwasy suppose to be last params
// Note: Spread can be used in between
// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit]
// }

// function getItems(fruitList, favoriteFruit, ...args) {
//     return [...fruitList, ...args, favoriteFruit]
// }
  
// getItems(["banana", "apple"], "pear", "orange");


// Question 12 : Output

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// //Both c and d point to same object refrenece
// c.greeting = 'Hello';
// console.log(d.greeting);
// // Both point to same object
// console.log(c===d)


// Question 13 : Output
// Note: both object have there own memory spaces
// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});



// Question 14 : Output

// let person = { name: 'Lydia' };
// const members = [person];

// // You are not copying the object
// //You are putting the reference of person into the array
// //Both person and members[0] point to the same object
// person = null;

// console.log(members);
// console.log(person);


// Question 15 : Output

// const value = { number: 10,name:"Prince" };
// // { ...value } creates a new object
// // It copies all properties from value into obj
// const obj = {...value}

// console.log(obj)

// const multiply = (x = { ...value }) => {
//   console.log("f obj: ",x)
//   console.log((x.number *= 2));
// };

// multiply(); // take default value of value object into x
// multiply();// // take default value of value object into x
// multiply(value);
// multiply(value);

// console.log(obj)
// console.log(value)


// Question 17 : Output 
// person is new variables in this function
// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//       name: 'John',
//       age: 50
//     };

//     return person;
// }

// const personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?
// console.log(personObj1); // -> ?


// Question 18 : Shallow copy VS Deep copy
// Shallow copy: when one object holds refrenece of another obejct
// Deep copy: When completly clone one object into another object

const user={
  name:"prince",
  age:25
}
// Creates deep copy of user object
const cloneObj = Object.assign({},user)
// This also creates deep copy 
const objclone = JSON.parse(JSON.stringify(user));
// This also creates deep copy 
const objclones = {...user}
cloneObj.name="Prinshu"
console.log(user)
console.log(cloneObj)
console.log(cloneObj===user)

