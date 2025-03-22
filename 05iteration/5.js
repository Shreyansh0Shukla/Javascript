const  coading=['js',"ruby",'java',"python"]
coading.forEach(i => {          // also can define coading.foreach(function(i){ cnosol.log...})
    //console.log(i);
});
/*
js
ruby
java
python
*/

function printMe(i){
    //console.log(i);
}
coading.forEach(printMe)

/*
js
ruby
java
python
*/


coading.forEach((item,i,arr)=>{
    //console.log(item,i,arr);
    
})
/*
js 0 [ 'js', 'ruby', 'java', 'python' ]
ruby 1 [ 'js', 'ruby', 'java', 'python' ]
java 2 [ 'js', 'ruby', 'java', 'python' ]
python 3 [ 'js', 'ruby', 'java', 'python' ]
*/

const myCoading=[
    {
        languageName:"JAvascript",
        languageFileName:"js"
    },
    {
        languageName:"JAva",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myCoading.forEach((item)=>{
    //console.log(item.languageName);
    
})
/*
JAvascript
JAva
python

*/