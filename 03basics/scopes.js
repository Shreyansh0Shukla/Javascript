var c=400   //global scope
if(true){
    let a =10
    const b=20
    var c= 30     // block leevel scope
}
//console.log(a)   =>cant be acccesible as out of cope declaration 
//console.log(b)   =>cant be acccesible as out of cope declaration
//console.log(c)   => accesible and output generatoed is 30 
// now suppose someother file is imported and var c values is different than it will efefct the value here
 
function one(){
    const user="Shreyansh"
    function two(){
        const website="youtube"
        console.log(user)
    }
    //console.log(website)    => can't access ouside scope
    two()
}
//one()   // Shreyansh   same goes for nested if else


//**********************INtresting */
addingOne(6)                      // Here in this case we can access the function before declaration
function addingOne(num){
   return num+1
}
addingTwo(5)                     // Here another way to declare the function and here we cannot access the function before declaration
const ans=function addingTwo(num){
    return num+2
}