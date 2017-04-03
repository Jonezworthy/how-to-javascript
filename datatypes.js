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
|            DATATYPES          |
+-------------------------------+
*/

////Hopefully you will be familiar with the concept of data types
////They are names given to types of data
////You can find out what datatype a variable has by using the typeof operator on it
////Take these "data types" with a pinch of salt, they aren't true data types
////E.g NaN is not an actual data type - it's more of a error message to explain it failed to do a numerical operation
////Same as undefined, it's more of an error messsage to explain that there is no data type


////boolean
////object
////string
////number
////function
////undefined
////NaN

true; //boolean
{}; //object
'hi'; //string
123;//number
function abc(){};//function
var xyz; //undefined
10 / 0; //NaN

console.log(typeof true); //boolean
console.log(typeof {}); //object
console.log(typeof 'hi'); //string
console.log(typeof 123);//number
console.log(typeof function abc(){});//function
console.log(typeof xyz); //undefined
console.log(typeof 10 / 0); //NaN