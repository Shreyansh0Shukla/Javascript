const myObject={
    js: "javascript",
    cpp: 'C++',
    rb:'Ruby',
    swift:'Swift by apple'
}
for (const key in myObject) {
    //console.log(key)
}
/*
js
cpp
rb
swift
*/
for (const key in myObject) {
    //console.log(`Keys in object : ${key} and their value is ${myObject[key]}`)
}
/*
Keys in object : js and their value is javascript
Keys in object : cpp and their value is C++
Keys in object : rb and their value is Ruby
Keys in object : swift and their value is Swift by apple
*/
const language=["js","ruby","paython"]
for (const key in language) {
    //console.log(key);
}
/*
0
1
2
*/
for (const key in language) {
    //console.log(language[key]);
}
/**
js
ruby
paython
 */
const map =new Map()
map.set('IN', 'India')
map.set('USA', 'United States of Ameria')
map.set('Fr', 'France')
map.set('IN', 'India')
for (const key in map) {   // it is not iterateable
    //console.log(map[key]);
    //console.log(key)
}