const myNums =[1,2,3]
// const total=myNums.reduce(function (acc, curr) {
//     console.log(`1acc: ${acc} and curr :${curr}`);
       
//     return acc+curr
// },0)
//console.log(total);
/*
1acc: 0 and curr :1
1acc: 1 and curr :2
1acc: 3 and curr :3
6 
*/
const myTotal=myNums.reduce( (acc,curr) => acc+curr,0)
//console.log(myTotal);  // => 6

const shoppingCart= [
    {
        itemName: "kdjsbvkw",
        price : 320
    },
    {
        itemName: "kvkw",
        price : 220
    }
]
const totla=shoppingCart.reduce( (acc,curr) => acc+curr.price,0)
console.log(totla); // 540

