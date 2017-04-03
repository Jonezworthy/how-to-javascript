/*
+-------------------------------+
|                               |
|   +----+    +---+   +-----+   |
|   |        +        |         |
|   |        +        |         |
|   +----+    +--+    +-----+   |
|   |             +         |   |
|   |             +         |   |
|   +----+   +---+    +-----+   |
|                               |
+-------------------------------+
|           FUNCTIONS           |
+-------------------------------+
*/

////Functions are used to make code reusable


////This is a typical function declaration
function doubler(input) {
    return input * 2; ////Use the return key word to allow expressions to be returned out of the function
}

///We try to avoid these types of functions as they are not encapsulated in an object, objects are our friends

//console.log('double 4 :' + doubler(4));
//console.log('double 16:' + doubler(16));

////This is an anonymous function expression
var halver = function (input) {
    return input / 2;
};

//console.log('halver 4 :' + halver(4));
//console.log('halver 16:' + halver(16));


////This is a terrible idea - though it is possible to create a function with the Function object
////Why is it terrible you ask? - Imagine if this function was just a little bit more complicated in its logic - it would be difficult to understand

var incrementer = new Function('input', 'return input + 1');

//console.log('incrementer 2:' + incrementer(2));
//console.log('incrementer 3:' + incrementer(3));


////Immediately invoking function expression
////The purpose of these functions is to get code to run immediately, but encapsulated within a function scope
(function () {

//    console.log('This code will run without being called');

})();

/*
+-------------------------------+
|                               |
|   +----+    +---+   +         |
|   |        +        |         |
|   |        +        |         |
|   +----+    +--+    +-----+   |
|   |             +   |     |   |
|   |             +   |     |   |
|   +----+   +---+    +-----+   |
|                               |
+-------------------------------+
|           FUNCTIONS           |
+-------------------------------+
*/
////Anonymous shorthand functions

////This is the old way
//function(){
//    
//};
////New way
//()=>{
//    //Function body
//};
////Working example - inside an immediately invoking function expression

(()=>{
//    console.log('How many brackets?!');
})();

////functions can now have default values like PHP
function exampleDefaults(a = 10, b = 15, c = process, d = (process.cpus ? true : false)){
    console.log(a);
    console.log(b);
//    console.log(c);
    console.log(d);
}
//exampleDefaults();

function exampleSpreads(a, ...extras){
    console.log(a);
    console.log(extras);
}

//exampleSpreads('a', true, 'hello', false, []);