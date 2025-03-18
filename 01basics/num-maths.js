/*
const score=499
const balance= new Number(432)
// console.log(score)
// console.log(balance)
console.log(balance,toString().length)
console.log(balance.toFixed(1)) // set number of decimals
const otherNum=213.489
console.log(otherNum.toPrecision(3)) // focuses on total no. of calues ex for 23.8906 => 23.9 , 123.89=> 124 similarly 1123.89 => 1.12e+3
const hundreds= 100000
console.log(hundreds.toLocaleString()) // set no. to be in US standards 100,000
console.log(hundreds.toLocaleString('en-IN')) // according to indian standards
*/
//****************************Maths***************
console.log(Math); //=> Object [Math] {}
console.log(Math.abs(-1)) 
console.log(Math.round(4.3)) //=> 4.2 ,ceil => 5 , floor => 4
//Math.min, Math.max 
console.log(Math.random()) // always lies between 0 & 1
console.log(Math.random()*10) // will lie between 0 and 10
console.log(Math.floor(Math.random()*10)+1) // 1 -10
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) // will be between max and min