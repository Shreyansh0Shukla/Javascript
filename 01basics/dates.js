//Dates
let myDate= new Date()
//console.log(myDate)                    => 2025-03-19T05:50:26.461Z
// console.log(myDate.toDateString())       =>Wed Mar 19 2025
// console.log(myDate.toISOString())        =>2025-03-19T06:07:42.341Z
// console.log(myDate.toJSON())             =>2025-03-19T06:07:42.341Z
// console.log(myDate.toLocaleDateString()) =>3/19/2025
// console.log(myDate.toLocaleString())     =>3/19/2025, 6:07:42 AM
// console.log(myDate.toLocaleTimeString()) =>6:07:42 AM
// console.log(myDate.toString())           =>Wed Mar 19 2025 06:07:42 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toTimeString())       =>06:07:42 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString())        =>Wed, 19 Mar 2025 06:07:42 GMT
// console.log(myDate.getTimezoneOffset())  => 0
// let myCreateDate= new Date(2025,2,19,11,50)
// console.log(myCreateDate)                  =>2025-03-19T11:50:00.000Z 
// console.log(myCreateDate.toDateString())   =>Wed Mar 19 2025
// console.log(myCreateDate.toLocaleString()) =>3/19/2025, 11:50:00 AM 
//let d=new Date("2025-03-19")
// console.log(d.toLocaleString()) //=> 19/03/2025 12:00:00 AM
//let myTimeStamp=Date.now()
// console.log(myTimeStamp) => 1742365797978  no. of miliseconds uptill now from jan 1 1970  and time around 6 am
// console.log(d.getTime()) => 1742342400000  no. of miliseconds uptill this date which is 19 march 00:00:00
//console.log(Math.floor(Date.now()/1000))
// console.log(myDate.getMonth()) => 2 which means march
// console.log(myDate.getDay())   => 3 which means wednesday
myDate.toLocaleDateString('Default',{
    weekday:"long",
})