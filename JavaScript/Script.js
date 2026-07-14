// Level 01 : Variables and DataTypes
// variables :  var , let and const 
// let a = 30 
// console.log(a)
// const b = "Hare Krsna"
// console.log(b)
// DataTypes -> check notes 
// Objects 
// const student ={
//     name : "Ayush",
//     age : "20"
// }
 
// const item ={
//     dairymilk : "20",
//     kitkat : "10"
// }
// // accessing object values
// console.log(item["kitkat"])
// console.log(student["name"])
// // updating object 
// student["marks"]="80"
// console.log(student)
// Level 1 Practice 
// 1,2
// let a = "Krsna"
// let b = 108 
// console.log(a+b)
// console.log(typeof(a+b))

// Level 02 : Operators & Conditional Statements

// + , - , * , / , % , ++ , -- , ** (exponentiation) , = , == , === , != , !== , > , < , >= , <= , && , || , !

// let a = 5
// let b = 10
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log("Exponentiation is " , a ** b)

// conditional statements

// let age = 20 
// if(age >18){
//     console.log("you can vote !! ")
// }
// else console.log("you cannot vote !!")

//  let marks = 80
//  marks>33? console.log("you are pass !!") : console.log("you are fail !!")

 // Level 03 : Loops & Functions
 
// for loop 
// for(let i = 0 ; i<5 ; i++){
//     console.log(i)
// }
// // for in loop 
// let marks={
//     ayush : 80,
//     krsna : 90,
//     shivam : 70
// }
// for(let a in marks){
//     console.log("marks of " + a + " is " + marks[a])
// }
// let name = "Krsna"
// for(let a of name){
//     console.log(a)
// }

// // While loop
// let i =0;
// while(i<20){
//     console.log(i);
//     i++
    
// }
// // do while loop 
// let i=0
// do{
//     console.log(i)
// }
// while(i<20)

// Functions
// function sub(a,b){
//     return a-b
// }

// let c= sub(10,5)
// console.log(c)
// const sum=(a,b)=>{
//     return a+b
// }
// let c=sum(2,3)
// console.log(c)
// // Level 3 practic 
// //1 
// const obj={
//     ayush: 40,
//     krsna: 50,
//     shivam: 60
// }
// for(let a in obj){
//     console.log("marks of " + a + " is " + obj[a])
// }

// Level 4 : Strings 

// let name = "krsna"
//  console.log(name.length)
//   let set = `HARE KRISH  NA ${name}`
//     console.log(set)
//     let a = 'HARE KRISHNA , i\'m dev'
//     console.log(a)

//     console.log(name.toUpperCase())
//     console.log(name.toLowerCase())
//     console.log(name.slice(0,3))
//     console.log(name.replace("sna","ush"))
//     console.log(name.includes("krsna"))
//     console.log(name.concat(" is a good boy"))
//     let b = "  Hare Krsna   "
//     console.log(b.trim())
//     // startsWith() and endsWith()
//     console.log(name.startsWith("k"))
//     console.log(name.endsWith("a"))

// Level 5 : Arrays

// const arr = [27, "Ayush", true, "Dev"];

// // Accessing elements
// console.log(arr[0]); // Prints 27
// console.log(arr[1]); // Prints Ayush
// console.log(arr[2]); // Prints true

// Checking length
// console.log(arr.length); // Prints 4 

// // Updating an array value
// arr[3] = "Hemant"; 
// console.log(arr);

// let number = [1, 2, 3, 4, 5, 6, 7];

// // Convert array to string
// console.log(number.toString());

// // Push and Pop (Add/Remove from the end)
// number.push(8);
// console.log(number);
// number.pop();
// console.log(number);

// // Unshift and Shift (Add/Remove from the beginning)
// number.unshift(7); 
// number.shift();
// console.log(number);

// // Delete operator (Removes value but leaves an empty slot)
// delete number[2];
// console.log(number);

// // Concat (Merging arrays)
// let number2 = [22, 33, 44, 55, 66];
// let newArray = number.concat(number2);
// console.log(newArray);

// // Sort (Alphabetical by default)
// let sortArr = [222, 0, 4, 6, 7, 8, 88];
// sortArr.sort();
// console.log(sortArr);

// // Sort (Ascending/Descending using a compare function)
// let compare = (a, b) => {
//   return a - b; // Ascending order. Use b - a for Descending.
// };
// sortArr.sort(compare);

// // Splice (position, elements_to_remove, elements_to_add...)
// let spliceArr = [222, 0, 4, 6, 7, 8, 88];
// spliceArr.splice(2, 4, 24, 78, 90, 100);
// console.log(spliceArr);

// // Slice (start_index, end_index)
// let sliceArr = arr.slice(2, 5);
// console.log(sliceArr);

// // Reverse
// arr.reverse();
// console.log(arr);

// // Join (Combines array elements into a string with a separator)
// console.log(arr.join("+"));

// // Array.from (Convert String/Object into an Array)
// let name = "Ayush";
// let nameArr = Array.from(name);
// console.log(nameArr);

// let loopArr = [1, 2, 3, 4, 5, 7, 8, 9];

// // Standard For Loop
// for (let i = 0; i < loopArr.length; i++) {
//   console.log(loopArr[i]);
// }

// // forEach Loop
// loopArr.forEach((value, index) => {
//   console.log(value, index);
//   // console.log(value * value); // Example: Printing squares
// });

// // for...of Loop (iterates over values)
// for (let a of loopArr) {
//   console.log(a);
// }

// // for...in Loop (iterates over keys/indices)
// for (let a in loopArr) {
//   console.log(a);
// }

// let mfrArr = [1, 2, 3, 4, 5, 7, 8, 9];

// // Map (Creates a new array by performing an operation on each element)
// let mapArr = mfrArr.map((x) => {
//   return x * x;
// });
// console.log(mapArr);

// // Filter (Creates an array with elements that pass a condition)
// let filterArr = mfrArr.filter((x) => {
//   return x > 5;
// });
// console.log(filterArr);

// // Reduce (Reduces the array to a single value, e.g., sum or factorial)
// let reduceArr = mfrArr.reduce((x, y) => {
//   return x + y; 
// });
// console.log(reduceArr);
  
// // Q1: Add number to the beginning of the array from user input
// let pArr1 = [2, 3, 4, 5, 6, 7];
// pArr1.unshift(27);
// console.log(pArr1);

// // Q2: Keep adding numbers to the array until 27 is entered
// let pArr2 = [];
// let num;
// do {
//   num = prompt("Enter a number");
//   num = Number.parseInt(num);
//   pArr2.push(num);
// } while (num != 27);
// console.log(pArr2);

// // Q3: Filter for even numbers from a given array
// let pArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenNumber = pArr3.filter((x) => {
//   return x % 2 == 0;
// });
// console.log(evenNumber);

// // Q4: Create an array of cubes of given numbers
// let pArr4 = [1, 2, 3, 4, 5, 6, 7];
// let cubes = pArr4.map((x) => {
//   return x ** 3;
// });
// console.log(cubes);

// // // Q5: Use reduce to calculate factorial of a given number from an array 
// // let pArr5 = [1, 2, 3, 4, 5, 6, 7];
// // let factorial = pArr5.reduce((x, y) => {
// //   return x * y;
// // });
// // console.log(factorial);

// Level 6 : Dom 