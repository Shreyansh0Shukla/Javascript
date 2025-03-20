const user={
    username:"Shreyansh",
    price:199,
    welcomeMeassage:function(){
        console.log(`${this.username} , Welcome to the website`);
        console.log(this)   
    }
}
// user.welcomeMeassage()   // => Shreyansh , Welcome to the website
// user.username="shukla"
// user.welcomeMeassage()    // => shukla , Welcome to the website
/* 
    while condol.log(this) whille output 
{
  username: 'Shreyansh',
  price: 199,
  welcomeMeassage: [Function: welcomeMeassage]
}

and 
{
  username: 'shukla',
  price: 199,
  welcomeMeassage: [Function: welcomeMeassage]
}

*/

//console.log(this)    => in node enviroment it will give empty object {}   and in can of browser consol it will be window object 
function chai(){
    let username="Shreyn"
    console.log(this.username)    // cant access will result in output of undefined   ,, only works on case of ibjects not in function
    console.logs(log)   // this will result in several values
}
chai()