//array

const myArr = [0,1,2,3,4,5]
const myHeros= ["Shaktiman", " Nagraj"]
const myArr2= new Array(1,2,3,4,5)
 // Array Method

 myArr.push(6) // push value 6 at the end of the array
 myArr.pop() // removes last value in array
 myArr.unshift(9) // insert at the start of array
 myArr.shift() // removes first element in array
//  console.log(myArr.includes(8)) // return the true or false depending on the existance
//  console.log(myArr.indexOf(5)) // return index of no. is no. exists in arrray else -1
//  const newArr=myArr.join()
// console.log(myArr)   // print the array [0,1,2,3,4,5]
//  console.log(newArr) // bind the array  0,1,2,3,4
//  console.log(typeof newArr) // string
// slice, spice
// console.log("A",myArr)      => A [ 0, 1, 2, 3, 4, 5 ]
// const mn1=myArr.slice(1,3);
// const mn2=myArr.splice(1,3);
// console.log(mn1)           =>[ 1, 2 ]
// console.log("B", myArr)    => B [ 0, 4, 5 ]
// console.log(mn2)           => [ 1, 2, 3 ]
// console.log("C",myArr)     => C [ 0, 4, 5 ]