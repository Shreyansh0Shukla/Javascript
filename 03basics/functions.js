// Function Definition
function sayMyName(){
    console.log("Shreyansh");
    
}
//sayMyName()                         // function calling
function addTwoNumber(number1,number2){
    console.log(number1+number2);
}
//addTwoNumber(1,2)                    // function calling
function addTwoNumber2(number1,number2){
    return(number1+number2);
}
let result=addTwoNumber2(4,6)
//console.log(result)

function loginUser(username){
    return `${username} just logegd in`
}
let k=loginUser("Shreyansh")
//console.log(k);              // if nothing will be passed it will denote undefined

function loginUser2(username){
    if(username==undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logegd in`
}
//console.log(loginUser2())

function loginUser3(username="Shreyansh"){   // default value
    return `${username} just logegd in`
}

function calculateCart(...num){
    return num
}
//console.log(calculateCart(200,400,600))    =>[ 200, 400, 600 ]
const user={
   username:"shreyansh",
   price: 392
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user)      =>Username is shreyansh and price is 392
const myNewArray= new Array(200,400,100,500)
function returnSecondValue(arr){
    return arr[1]
}
console.log(returnSecondValue(myNewArray))