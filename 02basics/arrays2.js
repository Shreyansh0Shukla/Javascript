const marvel=["thor", "hukl","tony"]
const dc=["flash","gren","papa"]
//marvel.push(dc) // array ke andar array 
// console.log(marvel) //[ 'thor', 'hukl', 'tony', [ 'flash', 'gren', 'papa' ] ]
// console.log(marvel[3][1]) // gren/
//const newa=marvel.concat(dc) 
//console.log(newa)// [ 'thor', 'hukl', 'tony', 'flash', 'gren', 'papa' ]
const all=[...marvel,...dc] 
//console.log(all) // [ 'thor', 'hukl', 'tony', 'flash', 'gren', 'papa' ]
const anotherArray=[1,2,3,[4,5,6],7,[8,9]]
const real=anotherArray.flat(Infinity)
//console.log(real) =>[
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]

//console.log(Array.isArray("Shukla")) => false
//console.log(Array.from("Shukla")) =>[ 'S', 'h', 'u', 'k', 'l', 'a' ] converst into array
//console.log(Array.from({name:"shukla"}))   =>{}     needs to specify that array to be from keys or values otehrwise it will return empty
let score1=100
let score2=200
let score3=300
//console.log(Array.of(score1,score2,score3))   =>[ 100, 200, 300 ]