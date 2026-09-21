console.log("Event Propagation")

// Q1. What is event propogation 

// TO decide when and in which direction, event will be execures is called event propogation


// Question 2 : Event Bubbling
// event is triger from button to top

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", function (event) {
//   alert("div");
// });

// form.addEventListener("click", function (event) {
//   alert("form");
// });

// button.addEventListener("click", function (event) {
//   alert("button");
// });


// Question 2 : event.target vs this.target vs event.currentTarget
// event.target: event.target is the element that triggered the event
// event.cyrrentTarget: while event.currentTarget is the element that the event listener is attached to

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");


// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);

// function func(event){
//   alert("currentTarget = " + event.currentTarget.tagName + ", target = " + event.target.tagName+ ", this=" + this.tagName)
// }


// Question 3 : Event Capturing
// Event Capturing is the process in which events gets executed from top to buttom
// if add "capture: true" then only capccturing will enable

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", function (event) {
//   alert("div");
// },{capture: true});

// form.addEventListener("click", function (event) {
//   alert("form");
// },{capture: true});

// button.addEventListener("click", function (event) {
//   alert("button");
// },{capture: true});



// Question 4 : How To Stop Event bubbling or Capturing or Propagation


// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", function (event) {
//   event.stopPropagation();
//   alert("div");
// });

// form.addEventListener("click", function (event) {
//     //event.stopPropagation();
//   alert("form");
// });

// button.addEventListener("click", function (event) {
//    //event.stopPropagation();
//   alert("button");
// });


// Question 5 : Event Delegation
// In event delegation we add event to the parent element instead of adding to descendent element
// document.querySelector(".products").addEventListener("click", (event) => {
//     console.log(event.target.className);
    
//     if (event.target.tagName === "SPAN") {
//       window.location.href += "/" + event.target.className;
//     }
// });


// Question 6 : What is the Output?

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", function (event) {
//   alert("div");
// });

// form.addEventListener("click", function (event) {
//   alert("form");
// }, {capture: true});

// button.addEventListener("click", function (event) {
//   alert("button");
// });

// Question 7 : Create a Modal which closes by clicking on negative space


// const container = document.querySelector(".modalContainer");
// const button = document.querySelector(".modalButton");

// button.addEventListener("click", () => {
//   toggleModal(true);
// });

// function toggleModal(toggle) {
//   container.style.display = toggle ? "flex" : "none";
// }

// container.addEventListener("click", (e) => {
//   if (e.target.className === "modalContainer") toggleModal(false);
// });


