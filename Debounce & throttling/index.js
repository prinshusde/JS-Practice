console.log("Deboubce and Throttling")


// Debounce & Throttling Interview Question

// Question 1 :   Create a button UI and add debounce as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times" count after 800ms of debounce


// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var triggerCount = 0;
// var pressedCount = 0;

// const debounceCount = _.debounce(()=>{
//    triggerCount += 1;
//   count.innerHTML = triggerCount;
// },500)

// btn.addEventListener("click",()=>{
//   btnPress.innerHTML=++pressedCount
//   debounceCount()
// })


// Question 2 : Create a button UI and add throttle as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times" count after 800ms of debounce


// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var triggerCount = 0;
// var pressedCount = 0;

// const throttleCount = _.throttle(()=>{
//   count.innerHTML=++triggerCount
// },1000)


// btn.addEventListener("click",()=>{
//   btnPress.innerHTML=++pressedCount
//  throttleCount()
  
// })



// Question 3 : Debounce Polyfill

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var triggerCount = 0;
// var pressedCount = 0;

// const myDebounce=(cb,d)=>{
//    let timmer;

//    return function(...args){
//     // if aready timmer set then clear old and set new one
//     if(timmer)clearTimeout(timmer)
//         timmer = setTimeout(()=>{
//            cb(...args)
//        },d)
//    }
// }

// const debounceCount = myDebounce(()=>{
//    triggerCount += 1;
//   count.innerHTML = triggerCount;
// },500)

// btn.addEventListener("click",()=>{
//   btnPress.innerHTML=++pressedCount
//  debounceCount();
// })



// Question 4 : Throttle Polyfill

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0
var pressedCount = 0

const start = new Date().getTime();

const myThrottle = function (cb, d) {
    let last = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cb(...args);
    };
};

var throttled = myThrottle(()=>{
    triggerCount+=1
    count.innerHTML=triggerCount
}, 1000);

btn.addEventListener("click", () => {
    btnPress.innerHTML=pressedCount++
    const now = new Date().getTime()
    const seconds = (now-start)/1000
    console.log(seconds.toFixed());
    throttled()
});