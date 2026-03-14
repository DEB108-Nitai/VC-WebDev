// Arrays and its Methods
const names = ["Nityananda" , "Gauranga" , "Advaita" , "Deb"] ;

// names.push("Srivas")

// const index = names.findIndex( function find(item){
//   return item ==="Gaur" ;
// }) ;
// using arrow function we dont even have to think of name of function

const index = names.findIndex( (item) => item === "Gauranga")

console.log(names) 
console.log(index)

// filter -> does linear search and filters out the required elements

// const newNames = names.filter((name)=>{
//     return name!== "Deb"
// })

// console.log(newNames)

// const Ages = [10,2,33,24,42]

// const filteredAges = Ages.filter((age)=>{
//     return age > 11
// })

// console.log(filteredAges)

// map

// const fullNames = names.map((name,index)=>{
//     if(index===1){
//         return name +" Mahaprabhu" 
//     }
//     else return name+" Prabhu" 
// })

// const fullNames = names.map((name,index)=>(index===1)? name +" Mahaprabhu": name+" Prabhu" )

// console.log(fullNames)

// Loops

// for( let i =0; i<names.length ; i++){
//     console.log(names[i]) 
// }

// names.forEach((elements)=>{  // loop function 
//     console.log(elements) 
// })

// Destructuring 

// Array Destructuring 

// const userName = ["Balaram" , "krsna"]

// const firstName = userName[0]
// const lastName = userName[1]

// const [firstName , lastName] = ["Balaram" , "krsna"]

// console.log(firstName)
// console.log(lastName)

// Object Destructuring 

// const userData = {
//     name : "Deb" ,
//     age : 20
// }

// const userName = userData.name 
// const userAge = userData.age

// const {name , age} = {
//     name : "Deb",
//     age : 20
// }

// console.log(name)
// console.log(age)

// Spread Operator

const nums1 = [ 1 ,2 ,3]
const nums2 = [4,5,6]

// const merged = [nums1 , nums2 ] --> this becomes array of arrays (nums1 & nums2)

const merged = [...nums1 , ...nums2] // ... acts as spread operator which access each array through its each element 
// 1 2 3 4 5
console.log(merged)