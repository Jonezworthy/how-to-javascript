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
|             OTHER             |
+-------------------------------+
*/

////Eval
////Eval is a method on the window/global object
////Use of this method is not recommended, it gives browser hackers ultimate amount of scope
////Eval executes a string
//eval('console.log(\'Terrible \');');

////Imagine now if the opinion value was actually from the value of a HTML attribute
////<div data-opinion="bad"></div>

var opinion = 'bad';
//eval('console.log(\'This is so ' + opinion + '\');');

////Hypothetically, I could then do this, and inject whatever JavaScript I want
////<div data-opinion="data\');console.log(\'something dodgy!">

opinion = 'data\');console.log(\'something dodgy!';
//eval('console.log(\'This is so ' + opinion + '\');');


////Eval gets evaluated in the scope it is called in
var testvar = 'hello';

//eval('console.log(testvar);');

////You should really considering an alternative if you are having to execute strings as JavaScript
////If executing this string is necessary, my only recommendation is to do it in an anonymous function, this reduces the scope of it
////The code will be executed in function scope

////Console logging testvar will not work here
////To protect your application, put window/process/global as parameters to the function so they are not accessible
////Sounds wrong but if you define them as arguments, they will be undefined when the function runs as we will NOT pass them in

//var evalSafe = new Function('process, window, global', 'console.log(process)');

//evalSafe();

////At least now if there is any dodgy script, they can't redirect the page away, or read any cookies