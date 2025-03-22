// const  coading=['js',"ruby",'java',"python"]
// const value=coading.forEach((item) =>{
//     console.log(item);
    
// })
// console.log(value)  // undefined     with or without return stetement
const num =[1,2,3,4,5,6,7,8,9,10]
// const nreNum=num.filter((nums)=> nums>4)    //  in fliter we get a call back function in which each value will be access individually and after that we need to give condition and it will return the values which is satisfied
// console.log(nreNum);   // =>[ 5, 6, 7, 8, 9, 10 ]
 /*
     or
     const nreNum=num.filter((nums)=>{
            return 
        })
  
 */

const newNum=[]
num.forEach(num => {
    if(num>4){
        newNum.push(num)
    }
});
console.log(newNum)   // [ 5, 6, 7, 8, 9, 10 ]