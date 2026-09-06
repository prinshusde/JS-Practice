console.log("Map Filter Reduce")

//✅ Map: Map method is used for creating new array from existing one by applying a function to each element of the array.


 //const nums =[1,2,3,4,5]

// const multiplyByThree = nums.map((num,index,array)=>{
//     return num*3
// })

// console.log(multiplyByThree)

// Pollyfill for map method


// Array.prototype.myMap = function(callback){
//     let temp = []

//     for(let i=0;i<this.length;i++){
//           let result = callback(this[i],i,this)
//           temp.push(result)
//     }
//     return temp
// }


// const multiplyByThree = nums.myMap((num,index,array)=>{
//     return num*3
// })

// console.log(multiplyByThree)


//✅ Filter: The filter method takes each element in a array & it applies conditionla statement against it,
//  if conditional return true then element get  pushed into new output array otherwise ignored.


//  const nums =[1,2,3,4,5]

//  const moreThanTwo = nums.filter((num,index,array)=>{
//      if(num>2){
//         return num
//      }
//  })


// console.log(moreThanTwo)

// Pollyfill for filter method


// Array.prototype.myFilter = function(cb){
//     let temp = []

//     for(let i=0;i<this.length;i++){
//         let result = cb(this[i],i,this)

//         if(result){
//             temp.push(this[i])
//         }
//     }
//     return temp
// }


//  const moreThanTwo = nums.myFilter((num,index,array)=>{
//      if(num>2){
//         return num
//      }
//  })


// console.log(moreThanTwo)


//✅ Reduce: Reduce method reduces an array of vaues down to a single value.

//Syntex: reduce((accumulator, currentValue, currentIndex, array)=>{}, initialValue)

//Note: If initialValue is not provided then accumulator will be first element of array and currentValue
//  will be second element of array.

       const nums =[1,2,3,4,5]


    //   const sum = nums.reduce((acc,curr,i,arr)=>{
    //     return acc+curr
    //   })

    //   console.log(sum)


    // Pollyfill for reduce method

    // Array.prototype.myReduce = function(cb,initialValue){
    //      let accu = initialValue? initialValue : this[0]

    //      const startIndex = initialValue? 0 : 1

    //      if(this.length === 0 && initialValue === undefined) {
    //         throw new TypeError("Reduce of empty array with no initial value")
    //      }
    //      if(this.length === 1 && initialValue === undefined) {
    //         return this[0]
    //      }
    //      if(this.length === 1 && initialValue !== undefined) {
    //         return cb(initialValue, this[0], 0, this)
    //      }

    //      for(let i=startIndex;i<this.length;i++){
    //         accu = cb(accu,this[i],i,this)
    //      }
    //      return accu
    // }



    //    Array.prototype.myReduce = function(cb,initialValue){
    //      let accumulator = initialValue

    //      if(this.length === 0 && initialValue === undefined) {
    //         throw new TypeError("Reduce of empty array with no initial value")
    //      }
    //      if(this.length === 1 && initialValue === undefined) {
    //         return this[0]
    //      }
    //      if(this.length === 1 && initialValue !== undefined) {
    //         return cb(initialValue, this[0], 0, this)
    //      }

    //      for(let i=0;i<this.length;i++){
    //        accumulator = accumulator? cb(accumulator,this[i],i,this) : this[i]
    //      }
    //      return accumulator
    // }


    //       const sum = nums.myReduce((acc,curr,i,arr)=>{
    //     return acc+curr
    //   })

    //   console.log(sum)



    let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];


// Q1 - Return only the names of students in capital


// const namesInCapital = students.map((student)=>{
//      return student.name.toUpperCase()
// })

// console.log(namesInCapital)



// Q2 - we want to get the details of students who scored more than 60 marks.


// const student = students.filter((student)=>{
//     return student.marks>60
// })

// console.log(student)



// Q4 - Sum total of the marks of the students


// const totalMarks = students.reduce((acc,student)=>{
//     return acc+student.marks
// },0)

// console.log(totalMarks)



// Q6 - print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.

// let totalMarks = studentRecords.map(function(stu){ 
//     if(stu.marks < 60){
//         stu.marks += 20;}
//     return stu;
// }).filter(stu => stu.marks > 60).reduce((acc,curr) => acc+curr.marks, 0);

// console.log(totalMarks);

        