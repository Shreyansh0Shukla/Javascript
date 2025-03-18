const s1='Hello'
const s2='World'
//console.log(`${s1} my ${s2}`); =>Hello my World

const s=new String('Hello')
//console.log(s[0])  => H
//console.log(s.__proto__) => {}
//console.log(s.length) =>5
//console.log(s.toUpperCase()) => HELLO
//console.log(s.charAt(2)) //=> l
//console.log(s.indexOf('o'))// =>4
//const newS = s.substring(0,4) =>helo   if we pass the negative value it ignores negative and starts from 0
//const news= s.slice(-8,4) =>ello  
//console.log(trim(s)) removes spaces
console.log(s.replace('l','u'));