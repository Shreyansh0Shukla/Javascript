// Immediately Invoked Function Expression (IIFE)
(function chai(){ //names IFFE 
  console.log('BD conencted');
})();   // Use semi-colon to end the evoked function
// The function that immidiately executes also to remove pollution of global scope as global scode may rises issue
// Arrow function implementation
(() =>{
    console.log('DB connected 2')
})();
( (name) => {
    console.log(`Hello $(name)`)
})('hitesh');
/*
   here the parater are passed in arrow function
   like chai('hitesh') is passed in function
*/
