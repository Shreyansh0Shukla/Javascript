// premitive datatype
/*
   string, number, boolean, null,undefined,symbol,BigInt
*/
const n=symbol('123')
const bigNo=12482940358312048n
//reference(non-premetive)
/* 
      Array, Objects, Function
*/
const heros=["Shaktiman","Nagraj", "Doga"]
let obj={
    name:"shrey",
    age:22,
}

//function(){}; function declaration
/*const myFunction=function(){      //using function as a variable
    console.log("Hello World")
}
    */

//***************************************

//primitive =>stack memory , non-premitive=>heam memory
let x="falanadhikana.com"
let y=x
y="fufu@fafa.com";
console.log(x)// falanadhikana.com
console.log(y)// "fufu@fafa.com"
let user={
    email:"gafig",
    i: 34124,
}
let user2= user
user2.email="adgjna"
console.log(user.email)//  adgjna
console.log(user2.email)// adgjna