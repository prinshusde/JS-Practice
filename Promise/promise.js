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



function importantAction(username){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
               resolve(`Hello ${username}`)
         },1000)
    })
   
}


function likeAction(username){
   return new Promise((resolve,reject)=>{
         setTimeout(()=>{
               resolve(`Like ${username}`)
         },1000)
    })
}


function shareAction(username){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
               resolve(`Share ${username}`)
         },1000)
    })
}

const msg = new importantAction("Prinshu").then((res)=>{
    console.log(res)
}).catch((err)=>{
      console.log(err)
})



// const message = importantAction("Prinshu",function(message){
//     console.log(message)
//     likeAction("Prinshu",(action)=>{
//           console.log(action)
//           shareAction("Prinshu",(action)=>{
//                console.log(action)
//           })
//     })
// })