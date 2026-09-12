console.log("Promise")

//Synchronous Vs Asynchronous


// console.log("start")

// function importantAction(username,cb){
//     setTimeout(()=>{
//          cb(`Hello ${username}`)
//     },1000)
// }


// function likeAction(username,cb){
//     setTimeout(()=>{
//          cb(`Like ${username}`)
//     },1000)
// }


// function shareAction(username,cb){
//     setTimeout(()=>{
//          cb(`Share ${username}`)
//     },1000)
// }

// This is callbackhell and promise solve this problem

// const message = importantAction("Prinshu",function(message){
//     console.log(message)
//     likeAction("Prinshu",(action)=>{
//           console.log(action)
//           shareAction("Prinshu",(action)=>{
//                console.log(action)
//           })
//     })
// })



// console.log('Stop')

// Promise 
// const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              let result=true;
//              if(result){
//                 resolve("Promise resolve")
//              }else{
//                 reject("Promise Rejected")
//              }
//         },2000)
// })


// console.log(promise)

// promise.then((res)=>{
//    console.log(res)
// }).catch((error)=>{
//      console.log(error)
// })



// function importantAction(username){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//                 if(false) resolve(`Hello ${username}`)
//                 else reject("Failed")
//          },100)
//     })
   
// }


// function likeAction(username){
//    return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              resolve(`Like ${username}`)
             
//          },200)
//     })
// }


// function shareAction(username){
//      return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//                resolve(`Share ${username}`)
//          },100)
//     })
// }

// const msg = new importantAction("Prinshu").then((res)=>{
//     console.log(res)

//     likeAction("Prinshu").then((res)=>{
//        console.log(res)

//       shareAction("Prinshu").then((res)=>{
//           console.log(res)
//       })

//     })
// }).catch((err)=>{
//       console.log(err)
// })



// More simpler than above piramid structure and this is called promises chainign

// const msg = new importantAction("Prinshu")
// .then((res)=>{
//       console.log(res)
//       return likeAction("Prinshu")
// })
// .then((res)=>{
//        console.log(res)
//        return shareAction("Prinshu")
// })
// .then((res)=>{
//       console.log(res)
// }).catch((err)=>{
//       console.log(err)
// })


// Promise combinator: It help us to execute more than one promise at a time and then return return result accordingly
// There is 4 types of Promise combinator


// 1. Promise.all(): We Provides muliple promises to Promise.all and it is going to run all the promise in parallel.
// End the end it will return array with all of the fullfilled promises. If one of the promise get failed then it will fail
//all of the promise.all promises

// Promise.all([
//       importantAction("Prinshu"),
//       likeAction("Prinshu"),
//       shareAction("Prinshu"),
// ]).then((res)=>{
//      console.log(res)
// }).catch((err)=>{
//       console.log(res)
// })



//2. Promise.race(): It return the result of promise which get reosolved first, either it get fullfilled or rejected 

// Promise.race([
//       importantAction("Prinshu"),
//       likeAction("Prinshu"),
//       shareAction("Prinshu"),
// ]).then((res)=>{
//      console.log(res)
// }).catch((err)=>{
//       console.log(err)
// })


//3. Promise.allSettled: It will return result of all promises even if anyone of them get failed. It is opposite of promise.all

// Promise.allSettled([
//       importantAction("Prinshu"),
//       likeAction("Prinshu"),
//       shareAction("Prinshu"),
// ]).then((res)=>{
//      console.log(res)
// }).catch((err)=>{
//       console.log(err)
// })


// 4. Promise.any: IT return  promise which result  get fullfilled first and ignore rejected promise
// If all of the promise get failed then it only result failed/rejected promsie

// Promise.any([
//       importantAction("Prinshu"),
//       likeAction("Prinshu"),
//       shareAction("Prinshu"),
// ]).then((res)=>{
//      console.log(res)
// }).catch((err)=>{
//       console.log(err)
//  })


// Async-await: modern approach to handle promises



// function importantAction(username){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
              
//                    if(false)  resolve(`Hello ${username}`)
//                  else reject("Failed")
//          },100)
//     })
   
// }


// function likeAction(username){
//    return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              resolve(`Like ${username}`)
             
//          },200)
//     })
// }


// function shareAction(username){
//      return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//                resolve(`Share ${username}`)
//          },100)
//     })
// }

// const result = async ()=>{
//      try {
//         const msg1 = await importantAction("Prinshu")
//       const msg2 = await  likeAction("Prinshu")
//      const msg3 = await   shareAction("Prinshu")
//      console.log(msg1)
//      console.log(msg2)
//      console.log(msg3)
//      } catch (error) {
//         console.error(error)
//      }
// }

// result()




// Question 1 : What is Output?

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

//output start 1 end 2



// Question 2 : What is Output?

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

// output start 1 3 end 2 
// resolve(2)
// Marks promise as fulfilled
// But .then() callback is NOT executed immediately
// It goes into the microtask queue

// Note: promise.then and .catch block will only executed if promise calls resolve or reject othewise not


// Question 3 : What is Output?

//test = () => ()
//It’s an arrow function that returns another arrow function.
// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')

// output: start middle 1 end success



// Question 4 : What is Output?

// function job() {
//     return new Promise(function(resolve, reject) {
//         resolve()
//         // reject();
//     });
// }

// let promise = job();

// promise
// .then(function() {
//     console.log('Success 1');
// })
// .then(function() {
//     console.log('Success 2');
// })
// .then(function() {
//     console.log('Success 3');
// })
// .catch(function() {
//     console.log('Error 1');
// })
// .then(function() {
//     console.log('Success 4');
// });

// if promise get resolved, all .then will executed associated with it
// all the .then will get executed after catch

// output Error 1 Success 4


// Question 5 : What is Output?

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise
// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

// output : sucess error error caught



// Question 6 : What is the Output?

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise
// .then(function(data) {
//     console.log(data);

//     return job(true);
// })
// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }
//     return job(true);
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log(error); //Defeat
//     return job(false);
// })
// .then(function(data) {
//     console.log(data);
//     return job(true);
// })
// .catch(function(error) {
//     console.log(error); // error
//     return 'Error caught';
// })
// .then(function(data) {
//     console.log(data); // Error caught
//     return new Error('test'); // Not Returning a promise
// })
// .then(function(data) {
//     console.log('Success:', data.message);
// })
// .catch(function(data) {
//     console.log('Error:', data.message);
// });

// output: success Defeat error  Error caught undefines Success: test


// Question 7 : Promises Chaining

// const firstPromise = new Promise((resolve, reject) => {
//     resolve('First!');
// });

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// })

// secondPromise
//     .then(res => res)
//     .then(res => console.log(res));

    // output: first 



    // Question 8 : Rewrite this example code using `async/await`
    //  Instead of `.then/catch`

// function loadJson(url) {
//         return fetch(url)
//           .then(response => {
//             if (response.status == 200) {
//               return response.json();
//             } else {
//               throw new Error(response.status);
//             }
//           });
// }
      
// loadJson('https://javascript.info/no-such-user.json').catch(alert); 

// // Answer
// async function loadJson(url) { // (1)
//     let response = await fetch(url); // (2)
  
//     if (response.status == 200) {
//       let json = await response.json(); // (3)
//       return json;
//     }
  
//     throw new Error(response.status);
// }
  
// loadJson('https://javascript.info/no-such-user.json').catch(alert); 


// Question 9 : Solve Promise Recursively

// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`Subscribe to ${username}`);
//       }, 1000);
//     });
//   }
  
//   function likeTheVideo(video) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`Like the ${video} video`);
//       }, 1000);
//     });
//   }
  
//   function shareTheVideo(video) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`Share the ${video} video`);
//       }, 1000);
//     });
//   }
  
//   function promRecurse(funcPromises) {
//     if (funcPromises.length === 0) return;
    
//     const promi = funcPromises.shift();
  
//     promi.then((result) => console.log(result)).catch((err) => console.log(err));
  
//     promRecurse(funcPromises);
//   }
  
//   promRecurse([
//     importantAction("Roadside Coder"),
//     likeTheVideo("Javascript Interview Questions"),
//     shareTheVideo("Javascript Interview Questions"),
// ]);


// output: Subscribe to Roadside Coder, Like the, Share the 


// Question 10 : Promise Polyfill

function PromisePolyFill(executor) {

}

const promise = new PromisePolyFill((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Sucess")
    },1000)
}).then((res)=>{

}).catch((error)=>{

})
