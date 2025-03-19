//singleton   when created with constructors

//object literals
const mySys = Symbol("keys1") // declaration of symbol
const JsUser={
    name: "Shreyansh",
    "lastName":"Shukla",
    [mySys]: "myKey1",    // using of symbol
    age: 22,
    location: "Kashipur",
    email:"paparazi@pupu.com",
    isLogeedIn: false,
    lastLoginDays: ["Mondays", "Saturday"] 
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["lastName"])     // to access value which is declared as string like "lastName"
// console.log(JsUser[mySys])          // accesing symbol
JsUser.email="skdvbosienfvowkd"    // alter the value
//Object.freeze(JsUser)         // now vlaues cant be alterd in object

JsUser.greeting =function(){
    console.log("Hello JsUser");
}
console.log(JsUser.greeting()) // outputs Hello JsUser
JsUser.greeting2 =function(){
    console.log(`Hello JsUser , ${this.name}`);
}
console.log(JsUser.greeting2())
