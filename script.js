// the difference between var, let & const
// 1. first you need to know there are mainly two versions of javascript - es5 & es6
// 2. es5 only has var 
// 3. es6 have let & const 
// 4. don't get confuse here, your machine has both
// 5. var is function scoped
// 6. let & const are braces scoped
// 7. var adds itself to the window object
// 8. let & const don't add




// window object
// 1. go to your browser and press ctrl + shift + j
// 2. type window in your console and hit enter
// 3. the list you are seeing is called window objects
// 4. these are not a part of javascript but javascript may use or access these objects

function abcd() {
    for (var i = 1; i < 12; i++) {
        console.log(i);
    }
    console.log(i); // this will not give any error - function scoped
}
abcd();

function dcba() {
    for (let i = 1; i < 12; i++) {
        console.log(i);
    }
    let i = 1; // defining i to avoid error
    console.log(i); // this will give an error - braces scoped
}
dcba();




// browser context api
// 1. browser provides us with some features for our convenience
// 2. window objects are a part of it 
// 3. api = application programming interface




// stack
// 1. type of data structure
// 2. obviously to store data
// 3. lifo = last in first out
// 5. filo = first in last out




// heap memory
// 1. variables & data we create need to be store somewhere
// 2. can think of it as memory alloted by our machine to store the intermediate data
// 3. final data gets stored after that




// execution context
// 1. imagine it like whenever we execute a function it will automatically create an imaginary container which will contain three things - 
//    ~ variables
//    ~ functions inside that parent function
//    ~ lexical environment of that function 
// 2. this imaginary container is known as execution context 
// 3. a container where function's code is executed
// 4. always created whenever a function is called

function cad(){
    var s = 12;
    function dac(){
        var t = 12;
    }
}
cad()




// lexical environment
// 1. like a chart where it is metioned what data a particular function can access
// 2. it holds the function's scope and scope chain




// how to copy reference values 
// with the help of spread operator

var v = [1, 2, 3, 4, 5];
var u = [...v]; // spread operator - [...(var_to_copy)]

var uv = {
    name: "harsh",
    age: "43"
};
var vu = {...uv}; // spread operator - {...(var_to_copy)}




// truthy & falsy
// 1. whatever we write in javascript is mainly of two types - truthy & falsy
// 2. falsy values - 0, false, undefined, null, NaN & document.all
// 3. everything else is considered as truthy values

if (NaN) {
    console.log("IF");
}
else{
    console.log("ELSE");
}




// switch 
// 1. you will rarely use it 
// 2. do not take the load of learning it 

switch (1) {
    case 1:
        console.log("CASE 1"); 
        break;

    default:
        break;
}




// foreach, forin & dowhile
// 1. foreach
//    ~ when you want to perform something on every element 
//    ~ it does not change the original array 
//    ~ it only changes the temporary copy of the array 
// 2. forin
//    ~ for looping on object 
// 3. dowhile 
//    ~ almost while 
//    ~ if you want to do something atleast once

var w = [1, 2, 3, 4, 5, 6, 7];
w.forEach(function (val1) {
    console.log(val1 + 2);
})

var e = {
    name: "harsh",
    age: "24"
};
for (var key in e) {
    console.log(key);
    console.log(e[name]);
    console.log(key, e[name]);
}

var f = 12;
do {
    console.log("HEY");
    f++;
} while (f<9);




// callback functtions
// 1. it is just a normal function
// 2. only the execution is delayed 
// 3. it is called after the completion

setTimeout(function() {
    console.log("DELAY RUN")
}, 2000);




// first class functions
// 1. in javascript, functions can also be used as values 
// 2. you can store it in a variable
// 3. you can use functiions while calling a function 

var g = function(){};
function dat(){
    console.log("");
}
dat(function(){console.log("MAGIC");})




// how arrays are made behind the scenes 
// 1. javascript converts arrays into objects
// 2. actually they are not arrays, they are objects 

var arrr = [1, 2, 3, 4, 5];
// it gets converted like -
// var arrr = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     4: 5
// };

arrr[-1] = 0; // this will not give any errorS

// to know the actual type -
// 1. Array.isArrar([]) will give true
// 2. Array.isArray({}) will give false




// how to delete object properties

var x = {
    name: "harsh",
    age: "24"
};
delete x.age;