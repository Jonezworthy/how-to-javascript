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
 |              REGEX            |
 +-------------------------------+
 */

////Regex is short for Regular Expressions
////Regular expressions are patterns of characters and symbols
////That give you the ability to find text within strings


////Simple string matches
var regex1 = /hello/; //So this is a basic search for the text hello
var sampletext1 = 'abc abc hello abc abc';
////We test this pattern on strings using the match method of the String object
//
//console.log(sampletext1.match(regex1));

////Depending on the whether you use the global flag - you will get a different set of data back (it will always be an array or null though)
////With global flag:
////- You should only get matches

////WithOUT global flag:
////You should get 
////- Match(es)
////- Index of match
////- The input

//// #### REGEX METHODS #### ////

////There are other types of regex methods available (these are defined in comparison to match)(these are prototyped methods on their respective objects)
////RegExp.prototype.exec: Works like String.match();
////RegExp.prototype.test: Returns true/false depending on whether there is a match
////String.prototype.search: Searches for pattern, returns the index of the match or -1
////String.prototype.replace: Searches for pattern, replaces the match with the replacement string
////String.prototype.split: Breaks a string in to arrays on the pattern

////##Replace - 
var replaceRegex = /howdy/g;
var sampleText = 'howdy howdy hello';
////Take note that it is using the g flag - which is a global (it will replace all of the occurences)
//console.log(sampleText.replace(replaceRegex, 'hello'));  //Replacing howdy for hello
////You can use $ to reference the captured pattern, with numerical index to reference which pattern
///$1, $2, $3 for example
var replaceRegex2 = /(.*)([a-z])/;
sampleText.replace(replaceRegex, 'boo $1, ahh $2');

////##Split - The split method is a powerful tool, here's an example
var splitRegex = /;|\./;
var sampleData = 'cow.sheep;cat.dog';
////This is splitting the string into array bits on the ; or . 
//console.log(sampleData.split(splitRegex));

//console.log(new RegExp(splitRegex).split(sampleData));



////RegExp syntaxes
////Regular Expressions have to start with and end with a forward slash
////Flags go after the slashes (or second parameter of the RegExp constructor
////There are only 5 flags in JavaScript regex - these are the most common 

////Read the rest here - https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags 
////g - global search
////i - case insensitive search
////m - multi-line search
////Flags stack side by side

var r1 = /hello/;
var r2 = /hello/g;
var r3 = /hello/gm;
var r3 = /hello/gmi;

//// Ranges ////
////You use ranges to allow for any type of characters
var r4 = /[a-z]/; //matches a to z lowercase (1 character)
var r5 = /[a-z]/i; //matches a to z uppercase or lowercase (1 character)
var r6 = /[0-9]/; //matches 0-9 (1 character)
var r7 = /[a-z0-9]/i;//matches 0-9 or a to z upper or lower case (1 character)

////Character Classes ////
////You use character classes to match on several characters
var r8 = /b[ai]ker/; //matches on biker or baker
var r9 = /[0-9_-]/; //matches on number range & containing hyphens or underscores

////Lengths ////
////Lengths are kinda needed for using ranges
var r10 = /[a-z]+/; //matches a to z lowercase (1 or more characters)
var r11 = /[a-z]*/; //matches a to z lowercase (any amount of chacters (even 0))
var r12 = /[a-z]{3}/; //matches a to z lowercase (3 characters only)(ignores additional characters)
var r13 = /[a-z]{3,10}/; //matches a to z lowercase (3 + but no more than 10 characters)(ignores additional characters)

////Groups ////
////You use groups to do submatches 
var r14 = /(abc)(def)/; //matches if both groups exist (only matches on 'abcdef')
var r15 = /hello (mate|buddy)/; //matches if (hello mate) or (hello buddy)

////Special characters ////
var r16 = /|/; // | -> or character
var r17 = /.+/; // . -> any single character
var r18 = /^begin/; // ^ -> describes start of the line
var r19 = /endswith$/; // $ -> describes end of the line
var r20 = /\t/;//matches on tabs
var r21 = /\n/; //matches on new lines
var r22 = /\r/; //matches on carriage returns
var r23 = /\d/; //matches on any numeric character
var r24 = /\D/; //negated \d (matches on any NON numeric character
var r25 = /\w/; //matches on any  alphanumeric character + underscore
var r26 = /\W/; //negated \w
var r27 = /\s/; //matches on space (\t\n\r\f)
var r28 = /\S/; //negated \s
var r29 = /\b/; //matches word boundary - allows you to do whole word searches
var r30 = /\B/; //negated \b


//// Common/Useful regex ////
//// This is called a negative look ahead - you can use this to do a NOT match
var r29 = /h((?!ello).)o/; //matches on anything beginning with h, ending in o, but NOT hello
var r30 = /(.*)/;//matches on any amount of anything

////Escaping ////
////You can escape specical characters with the backslash
////Escaping means telling the regular expression machine to ignore the special character and treat it as a normal symbol

var r31 = /hello world\!/;
var r32 = new RegExp('hello world!'); //Needs double back slash - why?...

console.log(r31);
console.log(r32);

////Do be aware that this regex syntax is for JavaScript, other regex in other technologies may differ