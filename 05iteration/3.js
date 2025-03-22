//for of
const arr=[1,2,3,4,5]
for (const i of arr) {
//console.log(i);
}
const greetings="Hello World"
for (const i of greetings) {
    //console.log(i);    
}

//Maps

const map =new Map()
map.set('IN', 'India')
map.set('USA', 'United States of Ameria')
map.set('Fr', 'France')
map.set('IN', 'India')

//console.log(map)
/*
    Map(3) {
  'IN' => 'India',
  'USA' => 'United States of Ameria',
  'Fr' => 'France'
  }
*/
for (const key of map) {
   // console.log(key)
}
/*
   [ 'IN', 'India' ]
   [ 'USA', 'United States of Ameria' ]
   [ 'Fr', 'France' ]
*/


for (const [key,value] of map) {
  //  console.log(key,':-',value)
}
/*
  IN :- India
  USA :- United States of Ameria
  Fr :- France
*/

const myObject ={
    'game1' : 'NFS',
    'game2' : 'Spooderman'
}
// for (const i of myObject) {  // this is not iterateable
//     //console.log(i);
    
// }