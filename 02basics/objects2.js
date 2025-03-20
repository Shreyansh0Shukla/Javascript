// const tinederUser = new Object()       => {}      as this is singleton
const tinderUser = {}   // non singleton output =>{}
tinderUser.id="123abd"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false
//console.log(tinderUser)      // { id: '123abd', name: 'Sammy', isLoggedIn: false }
const regularUser={
    email:"soeignew.com",
    fullname:{
        userfullname:{
            firstname: "Shreyansh",
            lastname: "Shukla"
        }
    }
}
/*/console.log(regularUser)                   =>    {
    email: 'soeignew.com',
    fullname: { userfullname: { firstname: 'Shreyansh', lastname: 'Shukla' } }
  }*/
// console.log(regularUser.fullname)                   // { userfullname: { firstname: 'Shreyansh', lastname: 'Shukla' } } 
// console.log(regularUser.fullname.userfullname)      // { firstname: 'Shreyansh', lastname: 'Shukla' }
// console.log(regularUser.fullname.userfullname.lastname)  // Shukla
const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
// const obj3={obj1,obj2}
// console.log(obj3)          => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3=Object.assign({},obj1, obj2)
// console.log(obj3)     =>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1,...obj2}
// console.log(obj3)          =>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(tinderUser)                 => { id: '123abd', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser))    => [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser))  => [ '123abd', 'Sammy', false ]
// console.log(Object.entries(tinderUser))                     => [ [ 'id', '123abd' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.group(tinderUser.hasOwnProperty('isLoggedIn'))      => true

const course={
    coursename: "Javascript",
    price:'999',
    courseInstructor: "chair aur code"
}
const {courseInstructor}= course
//console.log(courseInstructor)   => chair aur code


// **************** API *******************

// {
//     "name": "Shreyansh",
//     "coursename":"Javascript",
//     "Price":"free"
// }