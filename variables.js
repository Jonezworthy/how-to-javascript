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
|           VARIABLES           |
+-------------------------------+
*/

////'use strict'; //Use strict is a directive to the JavaScript compiler, using strict reduces bad code smells
////A lot of the restrictions it applies, you'll never use, the main differences you may notice is:
//// - Must declare variables with var
//// - Can't use the with operator


////Multi-line

var x = 10;
var y = 15;

////Single line

var x = 10, y = 15, z = 20;


////var is important, it is needed for first-time variable declarations in strict mode
////Okay to overwrite once it has been declared

x = 30;
y = 45;
z = 50;

//console.log('x:' + x);
//console.log('y:' + y);
//console.log('z:' + z);



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
|           VARIABLES           |
+-------------------------------+
*/
////Only briefly as don't want to add confusion

const a = 'hi'; ////const is a read only variable or a "write-once", once defined, that variable cannot be changed
//a = 'no';


let b = 123; ////let is a block scope defined variable - it only exists in the block (the area within curly braces) - this stops variables overflowing 

if (process) {
    let local = 'Hello!';
//    console.log(local); //Defined
}
//console.log(local); //Undefined

////Destructuring assignment - Assigning values from multiple values in an array/object
////You can do destructuring with Objects and Arrays in ES6 - Destructuring in PHP uses the list function

//// With arrays (Take note of the square bracket notation)
////     Variable names you want                | Values you want 
//const [numOfDoors, numOfWheels, numOfMirrors] = [5, 4, 2];

//console.log('numOfDoors:' + numOfDoors);
//console.log('numOfWheels:' + numOfWheels);
//console.log('numOfMirrors:' + numOfMirrors);

////With objects (Take note of the curly brace notation)
////     Variable names you want                | Values you want 
//var {numOfDoors, numOfWheels, numOfMirrors} = {numOfDoors: 5, numOfWheels:4,numOfMirrors:2};
////-IMPORTANT With Object destructuring is that the KEY must be the same as the variable name!

//console.log('numOfDoors:' + numOfDoors);
//console.log('numOfWheels:' + numOfWheels);
//console.log('numOfMirrors:' + numOfMirrors);

