// if
// if(condition){

// }

//Switch case
switch (key) {
    case value:
        
        break;

    default:
        break;
}
/*
falsy values:
fasle,0,-0,BigInt 0n,"",null,undefined,NaN

true values:
true,1,"0",'false'," ",[],{},function(){} 
string with 0, string with false , string with space, empty or non empty array and object, empty function
*/
const userEMail= []
if(userEMail.lenght === 0){

}

const emptyObj ={}
if(Object.keys(emptyObj).length===0){
}

// Nullish coalescing Operation (??) :: null undefined
let val;
val = 5 ?? 10    // => val=5
val = null ?? 10  // => val=10
val = undefined ?? 15  // => val=15
val= null?? 10 ?? 24 // => val=10
// Terniary Operator
// condition ? true :false
const icePrice =100
icePrice>=80 ? console.log("True") : console.log("Flase")    // => True
